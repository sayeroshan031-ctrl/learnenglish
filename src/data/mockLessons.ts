import type { Lesson } from '@/types';

export const mockLessons: Lesson[] = [
  {
    id: 'lesson-001',
    module: 'Grammar',
    cefrLevel: 'A1',
    title: 'فعل to be',
    order: 1,
    content: {
      theory:
        '<p>فعل <strong>to be</strong> در انگلیسی شامل سه شکل اصلی است: <em>am, is, are</em></p>',
      examples: [
        'I am a student.',
        'She is a doctor.',
        'They are friends.',
      ],
      tips: [
        'بعد از he/she/it از is استفاده کنید.',
        'بعد از I از am استفاده کنید.',
      ],
    },
    media: {
      audioUrl: '/audio/lesson-001.mp3',
      poster: '/images/lesson-001.jpg',
    },
    estimatedMinutes: 8,
    tags: ['grammar', 'beginner', 'to-be'],
  },
  {
    id: 'lesson-002',
    module: 'Vocab',
    cefrLevel: 'A1',
    title: 'اعضای خانواده',
    order: 2,
    content: {
      theory:
        '<p>کلمات مربوط به اعضای خانواده در انگلیسی:</p>',
      examples: [
        'father - پدر',
        'mother - مادر',
        'brother - برادر',
        'sister - خواهر',
      ],
      tips: [
        'parent به معنای والد (پدر یا مادر) است.',
      ],
    },
    media: {
      audioUrl: '/audio/lesson-002.mp3',
    },
    estimatedMinutes: 6,
    tags: ['vocab', 'beginner', 'family'],
  },
  {
    id: 'lesson-003',
    module: 'Grammar',
    cefrLevel: 'A1',
    title: 'حروف تعریف a / an',
    order: 3,
    content: {
      theory:
        '<p>از <strong>a</strong> قبل از حروف صدادار و از <strong>an</strong> قبل از سایر حروف استفاده می‌شود.</p>',
      examples: [
        'a book',
        'an apple',
        'a university',
        'an hour',
      ],
      tips: [
        'توجه کنید که university با حرف u شروع می‌شود اما با صدای yoo تلفظ می‌شود، پس a می‌گیرد.',
      ],
    },
    media: {},
    estimatedMinutes: 7,
    tags: ['grammar', 'beginner', 'articles'],
  },
  {
    id: 'lesson-004',
    module: 'Listening',
    cefrLevel: 'A1',
    title: 'مکالمه در کافه',
    order: 4,
    content: {
      theory:
        '<p>به مکالمه زیر گوش دهید و جاهای خالی را پر کنید:</p>',
      examples: [
        'A: Can I have a coffee, please?',
        'B: Sure. Anything else?',
        'A: No, thanks.',
      ],
      tips: [
        'به تلفظ کلمات clise توجه کنید.',
      ],
    },
    media: {
      audioUrl: '/audio/cafe-dialogue.mp3',
      videoUrl: '/video/cafe-dialogue.mp4',
      poster: '/images/cafe-dialogue.jpg',
    },
    estimatedMinutes: 10,
    tags: ['listening', 'beginner', 'dialogue'],
  },
  {
    id: 'lesson-005',
    module: 'Grammar',
    cefrLevel: 'A2',
    title: 'Present Simple',
    order: 5,
    content: {
      theory:
        '<p>زمان حال ساده برای عادت‌ها و واقعیت‌های کلی استفاده می‌شود.</p>',
      examples: [
        'I play football every weekend.',
        'She drinks coffee in the morning.',
        'They live in Tehran.',
      ],
      tips: [
        'در سوم شخص مفرد (he/she/it) به فعل s اضافه کنید.',
        'افعال to be و modal ها s نمی‌گیرند.',
      ],
    },
    media: {
      audioUrl: '/audio/present-simple.mp3',
    },
    estimatedMinutes: 12,
    tags: ['grammar', 'elementary', 'present-simple', 'tenses'],
  },
];
