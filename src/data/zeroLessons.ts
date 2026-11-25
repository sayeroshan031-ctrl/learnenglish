import type { Lesson } from '@/types';

/**
 * Zero pack (A0 / pre-beginner) — part 1 (content version 8).
 * For absolute beginners: alphabet, sounds, numbers, greetings,
 * self-introduction, days/months, survival words. Orders -8..-1 so the
 * pack sits before A1 (orders 1-40) and flows into it.
 */
export const zeroLessons: Lesson[] = [
  {
    id: 'zero-001',
    module: 'Vocab',
    cefrLevel: 'A0',
    title: 'مسیر صفر ۱: حروف الفبا',
    order: -8,
    content: {
      theory:
        '<p>به مسیر صفر خوش آمدید! از اینجا، از نقطهٔ صفر شروع می‌کنیم. زبان انگلیسی <strong>۲۶ حرف</strong> دارد: A تا Z. پنج حرف آن «صدادار» هستند: <strong>A, E, I, O, U</strong> — بیشتر کلمه‌ها دست‌کم یکی از این‌ها را دارند. بقیه «بی‌صدا» هستند.</p><p>اسم هر حرف را با صدای بلند چند بار بگویید. برای گفتن اسم‌تان به انگلیسی، بعداً همین حرف‌ها را هجی می‌کنید: مثلاً <em>R-E-Z-A</em>. نگران نباشید؛ قدم‌به‌قدم پیش می‌رویم.</p>',
      examples: [
        'A B C D — اِی، بی، سی، دی',
        'E F G H — ای، اِف، جی، اِچ',
        'I J K L — آی، جِی، کِی، اِل',
        'M N O P — اِم، اِن، اُ، پی',
        'Q R S T — کیو، آر، اِس، تی',
        'U V W X Y Z — یو، وی، دابلیو، اِکس، وای، زِد',
      ],
      tips: ['حروف صدادار (A E I O U) را با رنگ دیگری در دفترتان بنویسید.', 'هر روز فقط ۷ حرف تمرین کنید؛ تا پایان هفته کل الفبا را بلدید.'],
    },
    media: {},
    estimatedMinutes: 8,
    tags: ['zero', 'alphabet', 'vocabulary'],
  },
  {
    id: 'zero-002',
    module: 'Vocab',
    cefrLevel: 'A0',
    title: 'مسیر صفر ۲: صداها و اولین کلمات',
    order: -7,
    content: {
      theory:
        '<p>هر حرف یک «صدا» هم دارد که با اسمش فرق می‌کند. مثلاً حرف <strong>A</strong> اسمش «اِی» است ولی در کلمهٔ <em>apple</em> (سیب) صدای «اَ» می‌دهد. در این درس با چند کلمهٔ خیلی ساده شروع می‌کنیم تا گوش‌تان به صداها عادت کند.</p><p>روی دکمهٔ 🔊 بزنید، گوش بدهید و بلند تکرار کنید. در این سطح، <strong>شنیدن و تکرار</strong> مهم‌ترین کار است.</p>',
      examples: [
        'apple — سیب',
        'book — کتاب',
        'cat — گربه',
        'dog — سگ',
        'egg — تخم‌مرغ',
        'fish — ماهی',
      ],
      tips: ['کلمه را اول آهسته، بعد با سرعت عادی بگویید.', 'برای هر کلمه یک تصویر در ذهنتان بسازید؛ تصویر، حافظه را قوی می‌کند.'],
    },
    media: {},
    estimatedMinutes: 8,
    tags: ['zero', 'sounds', 'vocabulary'],
  },
  {
    id: 'zero-003',
    module: 'Vocab',
    cefrLevel: 'A0',
    title: 'مسیر صفر ۳: اعداد ۰ تا ۲۰',
    order: -6,
    content: {
      theory:
        '<p>اعداد از پرکاربردترین کلمه‌های هر زبان‌اند: برای سن، قیمت، شماره و ساعت. از ۰ تا ۱۲ هر عدد اسم خودش را دارد؛ از ۱۳ به بعد بیشترشان با پسوند <strong>-teen</strong> ساخته می‌شوند: <em>thirteen, fourteen…</em></p><p>دو جفت را اشتباه نگیرید: <em>thirteen</em> (۱۳) با <em>thirty</em> (۳۰) فرق دارد — درس بعد مال دهگان‌هاست.</p>',
      examples: [
        'zero one two three — صفر، یک، دو، سه',
        'four five six seven — چهار، پنج، شش، هفت',
        'eight nine ten — هشت، نه، ده',
        'eleven twelve — یازده، دوازده',
        'thirteen fourteen fifteen — سیزده، چهارده، پانزده',
        'sixteen seventeen eighteen nineteen twenty — شانزده، هفده، هجده، نوزده، بیست',
      ],
      tips: ['اعداد را با انگشتانتان بشمارید؛ حرکت دست، یادگیری را تثبیت می‌کند.', 'عدد سن خودتان و اعضای خانواده را به انگلیسی بگویید.'],
    },
    media: {},
    estimatedMinutes: 8,
    tags: ['zero', 'numbers', 'vocabulary'],
  },
  {
    id: 'zero-004',
    module: 'Vocab',
    cefrLevel: 'A0',
    title: 'مسیر صفر ۴: دهگان‌ها، صد و شماره‌ها',
    order: -5,
    content: {
      theory:
        '<p>دهگان‌ها با پسوند <strong>-ty</strong> ساخته می‌شوند: <em>twenty, thirty, forty…</em> عددهای دو رقمی مثل ۲۵ می‌شوند: <em>twenty-five</em>. صد می‌شود <em>one hundred</em> و هزار <em>one thousand</em>.</p><p>شماره تلفن را رقم‌به‌رقم می‌خوانند و صفر را معمولاً <em>oh</em> می‌گویند. قیمت ساده هم همین‌طور: <em>fifty</em> یعنی پنجاه (مثلاً پنجاه هزار تومان).</p>',
      examples: [
        'thirty forty fifty — سی، چهل، پنجاه',
        'sixty seventy eighty ninety — شصت، هفتاد، هشتاد، نود',
        'twenty-five — بیست و پنج',
        'one hundred — صد',
        'one thousand — هزار',
        'My number is zero nine one four… — شمارهٔ من صفر نه یک چهار… است',
      ],
      tips: ['فرق -teen و -ty را با تکیهٔ صدا یاد بگیرید: thirTEEN در برابر THIRty.', 'شماره تلفن خودتان را به انگلیسی تمرین کنید؛ امن‌ترین عدد برای تمرین است.'],
    },
    media: {},
    estimatedMinutes: 9,
    tags: ['zero', 'numbers', 'vocabulary'],
  },
  {
    id: 'zero-005',
    module: 'Speaking',
    cefrLevel: 'A0',
    title: 'مسیر صفر ۵: سلام و احوالپرسی',
    order: -4,
    content: {
      theory:
        '<p>اولین مکالمهٔ هر زبان، سلام و احوالپرسی است. صبح: <em>Good morning</em>، بعدازظهر: <em>Good afternoon</em>، عصر و شب هنگام رسیدن: <em>Good evening</em> و هنگام خواب یا خداحافظی شبانه: <em>Good night</em>.</p><p>سؤال همیشگی <em>How are you?</em> یعنی «حالت چطور است؟» و جواب ساده‌اش: <em>I’m fine, thank you.</em> (خوبم، ممنون). با مربی پنهان همین درس، این مکالمه را چند بار تمرین کنید.</p>',
      examples: [
        'Hello! — سلام!',
        'Good morning. — صبح بخیر.',
        'How are you? — حالت چطور است؟',
        'I’m fine, thank you. — خوبم، ممنون.',
        'Good night. — شب بخیر.',
        'Goodbye. See you! — خداحافظ. می‌بینمت!',
      ],
      tips: ['Good night فقط برای خداحافظی شبانه است، نه برای سلام‌کردن.', 'جواب How are you همیشه لازم نیست طولانی باشد؛ I’m fine کافی است.'],
    },
    media: {},
    estimatedMinutes: 9,
    tags: ['zero', 'greetings', 'speaking'],
  },
  {
    id: 'zero-006',
    module: 'Speaking',
    cefrLevel: 'A0',
    title: 'مسیر صفر ۶: معرفی خود',
    order: -3,
    content: {
      theory:
        '<p>حالا خودتان را معرفی کنید. سه جملهٔ طلایی: <em>My name is …</em> (اسم من … است)، <em>I am from Iran</em> (من اهل ایرانم) و <em>I live in …</em> (در … زندگی می‌کنم). <em>I am</em> کوتاه می‌شود <em>I’m</em>: مثلاً <em>I’m Reza</em>.</p><p>وقتی کسی خودش را معرفی کرد، جواب مؤدبانه: <em>Nice to meet you</em> (از آشنایی‌تان خوشحالم). این درس، پل شما به درس اول A1 است.</p>',
      examples: [
        'My name is Reza. — اسم من رضا است.',
        'I am from Iran. — من اهل ایرانم.',
        'I live in Yazd. — من در یزد زندگی می‌کنم.',
        'I’m a mechanic. — من مکانیکم.',
        'Nice to meet you. — از آشنایی‌تان خوشحالم.',
        'What’s your name? — اسم شما چیست؟',
      ],
      tips: ['معرفی خودتان را با اسم و شهر واقعی خودتان تمرین کنید.', 'I’m کوتاه‌شدهٔ I am است و در صحبت همیشه همین را می‌شنوید.'],
    },
    media: {},
    estimatedMinutes: 9,
    tags: ['zero', 'introduction', 'speaking'],
  },
  {
    id: 'zero-007',
    module: 'Vocab',
    cefrLevel: 'A0',
    title: 'مسیر صفر ۷: روزها، ماه‌ها و فصل‌ها',
    order: -2,
    content: {
      theory:
        '<p>هفتهٔ انگلیسی از <strong>Monday</strong> (دوشنبه) شروع می‌شود و یکشنبه (<em>Sunday</em>) روز تعطیل اصلی است. اسم روزها و ماه‌ها همیشه با حرف بزرگ نوشته می‌شوند. ماه‌ها از <em>January</em> (ژانویه) تا <em>December</em> (دسامبر) هستند و چهار فصل: <em>spring</em> بهار، <em>summer</em> تابستان، <em>autumn</em> پاییز، <em>winter</em> زمستان.</p><p>امروز به انگلیسی می‌شود <em>today</em>، فردا <em>tomorrow</em> و دیروز <em>yesterday</em>.</p>',
      examples: [
        'Monday Tuesday Wednesday — دوشنبه، سه‌شنبه، چهارشنبه',
        'Thursday Friday — پنجشنبه، جمعه',
        'Saturday Sunday — شنبه، یکشنبه',
        'January February March — ژانویه، فوریه، مارس',
        'spring summer autumn winter — بهار، تابستان، پاییز، زمستان',
        'today tomorrow yesterday — امروز، فردا، دیروز',
      ],
      tips: ['روز تولدتان را پیدا کنید و اسمش را به انگلیسی بگویید.', 'اسم روزها را به ترتیب هفتهٔ خودتان (از شنبه) هم یک بار مرور کنید تا جا بیفتد.'],
    },
    media: {},
    estimatedMinutes: 9,
    tags: ['zero', 'days', 'months', 'vocabulary'],
  },
  {
    id: 'zero-008',
    module: 'Speaking',
    cefrLevel: 'A0',
    title: 'مسیر صفر ۸: کلمات بقا و پل به A1',
    order: -1,
    content: {
      theory:
        '<p>آخرین درس مسیر صفر، کلمه‌هایی است که از روز اول نجات‌تان می‌دهند: <em>yes</em> بله، <em>no</em> نه، <em>please</em> لطفاً، <em>thank you</em> ممنون، <em>excuse me</em> ببخشید، و برای اشاره: <em>this</em> (این، نزدیک) و <em>that</em> (آن، دور). اگر چیزی را نفهمیدید بگویید: <em>I don’t understand</em> و برای آهسته‌تر: <em>Slowly, please</em>.</p><p>🎉 مسیر صفر تمام شد! حالا الفبا، اعداد، سلام و معرفی را بلدید. قدم بعدی، <strong>درس اول A1</strong> است — از فهرست درس‌ها ادامه بدهید. مربی پنهان در همهٔ درس‌های A1 هم کنار شماست.</p>',
      examples: [
        'Yes, please. — بله، لطفاً.',
        'No, thank you. — نه، ممنون.',
        'Excuse me. — ببخشید.',
        'This is my book. — این کتاب من است.',
        'I don’t understand. — نمی‌فهمم.',
        'Slowly, please. — آهسته‌تر، لطفاً.',
      ],
      tips: ['این شش جمله را آن‌قدر بگویید تا بدون فکرکردن بیایند.', 'از اینجا به بعد، هر درس A1 را اول با مربی تمرین کنید، بعد خودتان بخوانید.'],
    },
    media: {},
    estimatedMinutes: 9,
    tags: ['zero', 'survival', 'speaking', 'bridge'],
  },
];
