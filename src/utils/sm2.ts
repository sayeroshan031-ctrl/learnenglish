export interface SM2Result {
  repetition: number;
  easeFactor: number;
  interval: number;
}

/**
 * Calculate next review date using SM-2 algorithm
 * @param quality - 0 to 5 (5 = perfect recall)
 * @param repetition - current repetition count
 * @param easeFactor - current ease factor
 * @param interval - current interval in days
 */
export function calculateSM2(
  quality: number,
  repetition: number,
  easeFactor: number,
  interval: number
): SM2Result {
  let newRepetition = repetition;
  let newEaseFactor = easeFactor;
  let newInterval = interval;

  if (quality >= 3) {
    if (repetition === 0) newInterval = 1;
    else if (repetition === 1) newInterval = 6;
    else newInterval = Math.round(interval * easeFactor);
    newRepetition = repetition + 1;
  } else {
    newRepetition = 0;
    newInterval = 1;
  }

  newEaseFactor = Math.max(
    1.3,
    easeFactor + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)
  );

  return {
    repetition: newRepetition,
    easeFactor: newEaseFactor,
    interval: newInterval,
  };
}

/**
 * Get next review date based on SM-2 interval
 */
export function getNextReviewDate(intervalDays: number): string {
  const date = new Date();
  date.setDate(date.getDate() + intervalDays);
  return date.toISOString();
}
