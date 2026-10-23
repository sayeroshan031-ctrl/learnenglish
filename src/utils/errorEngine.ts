import { db } from '@/db/db';
import type { Mistake, MistakeType } from '@/types';

export interface DetectedPattern {
  type: MistakeType;
  subType: string;
  weight: number;
}

export class ErrorEngine {
  /**
   * Detect error pattern from user input vs correct form
   */
  static detectPattern(
    userInput: string,
    correctForm: string,
    exerciseType: MistakeType
  ): DetectedPattern {
    const normalizedUser = userInput.toLowerCase().trim();
    const normalizedCorrect = correctForm.toLowerCase().trim();

    // Grammar: missing third-person 's'
    if (
      exerciseType === 'grammar' &&
      /\b(he|she|it)\s+\w+[^s\s]\s/.test(userInput)
    ) {
      return { type: 'grammar', subType: 'third_person_s', weight: 1.0 };
    }

    // Article: 'a' before vowels
    if (/\b(a)\s+[aeiou]/i.test(userInput)) {
      return { type: 'grammar', subType: 'article_an', weight: 1.0 };
    }

    // Vocab mismatch
    if (normalizedUser !== normalizedCorrect) {
      return {
        type: 'vocab',
        subType: normalizedCorrect.replace(/\s+/g, '_'),
        weight: 1.0,
      };
    }

    return { type: exerciseType, subType: 'general', weight: 1.0 };
  }

  /**
   * Record a new mistake or update existing one
   */
  static async recordMistake(
    userId: string,
    lessonId: string,
    userInput: string,
    correctForm: string,
    context: string,
    exerciseType: MistakeType
  ): Promise<void> {
    const pattern = this.detectPattern(userInput, correctForm, exerciseType);

    const existing = await db.mistakes
      .where({ userId, subType: pattern.subType, isResolved: 0 })
      .first();

    if (existing) {
      await this.updateMistakeWeight(existing, true);
    } else {
      const now = new Date().toISOString();
      const mistake: Mistake = {
        id: crypto.randomUUID(),
        userId,
        lessonId,
        type: pattern.type,
        subType: pattern.subType,
        userInput,
        correctForm,
        context,
        frequency: 1,
        weight: pattern.weight,
        firstSeenAt: now,
        lastSeenAt: now,
        isResolved: false,
      };
      await db.mistakes.add(mistake);
    }
  }

  /**
   * Update mistake weight based on repetition and time decay
   */
  private static async updateMistakeWeight(
    mistake: Mistake,
    isRepeated: boolean
  ): Promise<void> {
    const daysSinceLastSeen =
      (Date.now() - new Date(mistake.lastSeenAt).getTime()) / 86400000;

    let newWeight = mistake.weight;
    if (isRepeated) {
      newWeight += 0.5;
    } else {
      newWeight *= Math.exp(-daysSinceLastSeen / 30);
    }

    await db.mistakes.update(mistake.id, {
      weight: Math.min(newWeight, 5.0),
      frequency: mistake.frequency + 1,
      lastSeenAt: new Date().toISOString(),
    });
  }

  /**
   * Get user's weakest areas sorted by weight
   */
  static async getWeakAreas(userId: string): Promise<Record<string, number>> {
    const mistakes = await db.mistakes
      .where({ userId, isResolved: false })
      .toArray();

    return mistakes.reduce((acc, m) => {
      acc[m.subType] = (acc[m.subType] || 0) + m.weight;
      return acc;
    }, {} as Record<string, number>);
  }
}
