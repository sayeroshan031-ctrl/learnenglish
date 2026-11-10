import type { Lesson } from '@/types';

/**
 * Real A1 content pack (content version 2).
 * Every lesson is self-contained: no external media references.
 */
export const a1Lessons: Lesson[] = [
  {
    id: 'lesson-001',
    module: 'Speaking',
    cefrLevel: 'A1',
    title: 'سلام و معرفی خود',
    order: 1,
    content: {
      theory:
        '<p>برای سلام‌کردن می‌گوییم: <strong>Hello</strong> (سلام، رسمی و عمومی)، <strong>Hi</strong> (سلام، دوستانه)، <strong>Good morning</strong> (صبح بخیر)، <strong>Good afternoon</strong> (عصر بخیر) و <strong>Good evening</strong> (شب بخیر، هنگام رسیدن).</p><p>برای معرفی خود: <strong>My name is …</strong> یعنی «اسم من … است» و <strong>I am from …</strong> یعنی «من اهلِ … هستم». در جوابِ آشنایی هم می‌گوییم: <strong>Nice to meet you</strong> — «از آشنایی‌تان خوشحالم».</p>',
      examples: [
        'Hello! My name is Sara. — سلام! اسم من ساراست.',
        'Hi, I am Ali. I am from Yazd. — سلام، من علی‌ام. اهل یزدم.',
        'Good morning, teacher! — صبح بخیر، معلم!',
        'Nice to meet you. — از آشنایی‌تان خوشحالم.',
        'Good evening. How are you? — شب بخیر. حالتان چطور است؟',
      ],
      tips: [
        'در جواب How are you می‌توانید بگویید: I am fine, thank you.',
        'موقع خداحافظی: Goodbye یا کوتاه‌تر Bye.',
      ],
    },
    media: {},
    estimatedMinutes: 6,
    tags: ['speaking', 'beginner', 'greetings'],
  },
  {
    id: 'lesson-002',
    module: 'Grammar',
    cefrLevel: 'A1',
    title: 'فعل to be (am / is / are)',
    order: 2,
    content: {
      theory:
        '<p>فعل <strong>to be</strong> یعنی «بودن» و سه شکل دارد: با <strong>I</strong> می‌آید <strong>am</strong>، با <strong>he / she / it</strong> می‌آید <strong>is</strong> و با <strong>you / we / they</strong> می‌آید <strong>are</strong>.</p><p>منفی‌کردن: بعد از فعل، <strong>not</strong> می‌گذاریم: <em>She is not a doctor.</em> سؤالی‌کردن: فعل را می‌آوریم اول جمله: <em>Are you a student?</em> — جواب کوتاه: <em>Yes, I am. / No, I am not.</em></p>',
      examples: [
        'I am a student. — من دانش‌آموزم.',
        'She is my sister. — او خواهر من است.',
        'They are friends. — آن‌ها دوست‌اند.',
        'He is not a teacher. — او معلم نیست.',
        'Are you happy? — Yes, I am. — خوشحالی؟ بله.',
        'We are from Iran. — ما اهل ایرانیم.',
      ],
      tips: [
        'شکل کوتاه رایج است: I am → I’m، she is → she’s، they are → they’re.',
        'برای سن هم از to be استفاده می‌شود: I am 20 years old (نگید I have 20).',
      ],
    },
    media: {},
    estimatedMinutes: 9,
    tags: ['grammar', 'beginner', 'to-be'],
  },
  {
    id: 'lesson-003',
    module: 'Vocab',
    cefrLevel: 'A1',
    title: 'اعضای خانواده',
    order: 3,
    content: {
      theory:
        '<p>واژه‌های اصلی خانواده: <strong>father</strong> پدر، <strong>mother</strong> مادر، <strong>parents</strong> والدین، <strong>brother</strong> برادر، <strong>sister</strong> خواهر، <strong>grandfather</strong> پدربزرگ، <strong>grandmother</strong> مادربزرگ، <strong>family</strong> خانواده.</p><p>برای معرفی اعضای خانواده از این الگو استفاده کنید: <strong>This is my …</strong> — «این …ی من است». مثلاً: <em>This is my mother.</em></p>',
      examples: [
        'father — پدر',
        'mother — مادر',
        'brother — برادر',
        'sister — خواهر',
        'This is my father. — این پدر من است.',
        'My family is big. — خانوادهٔ من بزرگ است.',
      ],
      tips: [
        'dad شکل خودمانیِ father و mum/mom شکل خودمانیِ mother است.',
        'parents یعنی هر دو: پدر و مادر با هم.',
      ],
    },
    media: {},
    estimatedMinutes: 6,
    tags: ['vocab', 'beginner', 'family'],
  },
  {
    id: 'lesson-004',
    module: 'Vocab',
    cefrLevel: 'A1',
    title: 'اعداد و گفتن سن',
    order: 4,
    content: {
      theory:
        '<p>اعداد ۱ تا ۱۰: <strong>one, two, three, four, five, six, seven, eight, nine, ten</strong>. اعداد ۱۱ تا ۲۰: <strong>eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty</strong>.</p><p>پرسیدن سن: <strong>How old are you?</strong> — «چند سالته؟» جواب: <strong>I am … years old.</strong> دقت کنید سن با فعل to be گفته می‌شود، نه have.</p>',
      examples: [
        'one, two, three — یک، دو، سه',
        'ten, eleven, twelve — ده، یازده، دوازده',
        'How old are you? — چند سالته؟',
        'I am fifteen years old. — من پانزده سال دارم.',
        'She is twenty years old. — او بیست سال دارد.',
      ],
      tips: [
        'عددهای ۱۳ تا ۱۹ به teen ختم می‌شوند؛ twenty (بیست) را با آن‌ها قاطی نکنید.',
        'برای شماره تلفن، هر رقم جدا خوانده می‌شود و 0 را oh می‌خوانند.',
      ],
    },
    media: {},
    estimatedMinutes: 7,
    tags: ['vocab', 'beginner', 'numbers'],
  },
  {
    id: 'lesson-005',
    module: 'Grammar',
    cefrLevel: 'A1',
    title: 'حروف تعریف a و an',
    order: 5,
    content: {
      theory:
        '<p>قبل از اسم‌های مفردِ قابل‌شمارش از <strong>a</strong> یا <strong>an</strong> استفاده می‌کنیم؛ هر دو یعنی «یک». قانون بر اساس <strong>صدای</strong> اول کلمه است، نه حرفِ نوشته‌شده: اگر کلمه با صدای مصوّت (a, e, i, o, u) شروع شود <strong>an</strong> می‌گیرد: <em>an apple</em>، <em>an hour</em>. در غیر این صورت <strong>a</strong> می‌گیرد: <em>a book</em>، <em>a university</em> (چون university با صدای «یو» شروع می‌شود).</p>',
      examples: [
        'a book — یک کتاب',
        'an apple — یک سیب',
        'a teacher — یک معلم',
        'an egg — یک تخم‌مرغ',
        'a house — یک خانه',
        'an old house — یک خانهٔ قدیمی',
      ],
      tips: [
        'a و an فقط برای مفرد است؛ برای جمع نمی‌آید: books (نه a books).',
        'قبل از شغل‌ها هم می‌آید: She is a doctor.',
      ],
    },
    media: {},
    estimatedMinutes: 7,
    tags: ['grammar', 'beginner', 'articles'],
  },
  {
    id: 'lesson-006',
    module: 'Vocab',
    cefrLevel: 'A1',
    title: 'مشاغل',
    order: 6,
    content: {
      theory:
        '<p>مشاغل رایج: <strong>teacher</strong> معلم، <strong>doctor</strong> دکتر، <strong>driver</strong> راننده، <strong>worker</strong> کارگر، <strong>farmer</strong> کشاورز، <strong>cook</strong> آشپز، <strong>singer</strong> خواننده، <strong>student</strong> دانش‌آموز/دانشجو.</p><p>پرسیدن شغل: <strong>What do you do?</strong> — «شغلت چیست؟» جواب با to be و حرف تعریف: <em>I am a teacher.</em></p>',
      examples: [
        'teacher — معلم',
        'doctor — دکتر',
        'What do you do? — شغلت چیست؟',
        'I am a driver. — من راننده‌ام.',
        'He is a cook. — او آشپز است.',
        'My mother is a teacher. — مادرم معلم است.',
      ],
      tips: [
        'حرف تعریف را فراموش نکنید: نگید I am teacher؛ درستش I am a teacher است.',
        'بیشتر شغل‌ها با er ساخته می‌شوند: teach → teacher، drive → driver.',
      ],
    },
    media: {},
    estimatedMinutes: 6,
    tags: ['vocab', 'beginner', 'jobs'],
  },
  {
    id: 'lesson-007',
    module: 'Vocab',
    cefrLevel: 'A1',
    title: 'روزهای هفته و ساعت',
    order: 7,
    content: {
      theory:
        '<p>روزهای هفته: <strong>Monday</strong> دوشنبه، <strong>Tuesday</strong> سه‌شنبه، <strong>Wednesday</strong> چهارشنبه، <strong>Thursday</strong> پنجشنبه، <strong>Friday</strong> جمعه، <strong>Saturday</strong> شنبه، <strong>Sunday</strong> یکشنبه. روزها همیشه با حرف بزرگ شروع می‌شوند و قبلشان <strong>on</strong> می‌آید: <em>on Friday</em>.</p><p>پرسیدن ساعت: <strong>What time is it?</strong> جواب: <strong>It is five o’clock.</strong> — «ساعت پنج است». نیم ساعت: <em>half past five</em> — «پنج و نیم».</p>',
      examples: [
        'Monday — دوشنبه',
        'Friday — جمعه',
        'on Saturday — روز شنبه',
        'What time is it? — ساعت چند است؟',
        'It is seven o’clock. — ساعت هفت است.',
        'It is half past eight. — ساعت هشت و نیم است.',
      ],
      tips: [
        'o’clock فقط برای ساعتِ کامل (بدون دقیقه) گفته می‌شود.',
        'در انگلیسیِ بریتانیایی هفته از Monday شروع می‌شود.',
      ],
    },
    media: {},
    estimatedMinutes: 8,
    tags: ['vocab', 'beginner', 'time', 'days'],
  },
  {
    id: 'lesson-008',
    module: 'Vocab',
    cefrLevel: 'A1',
    title: 'غذا و نوشیدنی + like',
    order: 8,
    content: {
      theory:
        '<p>واژه‌های پرکاربرد: <strong>bread</strong> نان، <strong>rice</strong> برنج، <strong>water</strong> آب، <strong>tea</strong> چای، <strong>milk</strong> شیر، <strong>egg</strong> تخم‌مرغ، <strong>cheese</strong> پنیر، <strong>apple</strong> سیب.</p><p>گفتن علاقه: <strong>I like …</strong> یعنی «… دوست دارم» و منفی‌اش <strong>I don’t like …</strong> است: <em>I like tea. I don’t like coffee.</em></p>',
      examples: [
        'bread — نان',
        'water — آب',
        'I like rice. — برنج دوست دارم.',
        'I don’t like milk. — شیر دوست ندارم.',
        'She likes apples. — او سیب دوست دارد.',
        'Do you like tea? — چای دوست داری؟',
      ],
      tips: [
        'برای he/she به like حرف s اضافه می‌شود: he likes.',
        'در سؤال و منفی برای I/you از don’t استفاده می‌کنیم.',
      ],
    },
    media: {},
    estimatedMinutes: 7,
    tags: ['vocab', 'beginner', 'food', 'likes'],
  },
  {
    id: 'lesson-009',
    module: 'Grammar',
    cefrLevel: 'A1',
    title: 'حال ساده: کارهای روزانه',
    order: 9,
    content: {
      theory:
        '<p>برای کارهای همیشگی و روزانه از <strong>حال ساده</strong> استفاده می‌کنیم: شکل اصلی فعل برای I / you / we / they: <em>I get up at seven.</em> اما برای <strong>he / she / it</strong> به فعل <strong>s</strong> اضافه می‌شود: <em>He works every day. She reads books.</em></p><p>قیدهای تکرار: <strong>every day</strong> هر روز، <strong>always</strong> همیشه، <strong>usually</strong> معمولاً — قید قبل از فعل می‌آید: <em>I always drink tea in the morning.</em></p>',
      examples: [
        'I get up at six. — ساعت شش بیدار می‌شوم.',
        'We go to work by bus. — با اتوبوس سر کار می‌رویم.',
        'He works in a shop. — او در یک مغازه کار می‌کند.',
        'She reads a book every night. — او هر شب کتاب می‌خواند.',
        'They play football on Fridays. — آن‌ها جمعه‌ها فوتبال بازی می‌کنند.',
      ],
      tips: [
        'مهم‌ترین قانون A1: برای he/she/it حرف s را جا نیندازید!',
        'فعل‌هایی که به s, sh, ch و x ختم می‌شوند es می‌گیرند: watch → watches.',
      ],
    },
    media: {},
    estimatedMinutes: 9,
    tags: ['grammar', 'beginner', 'present-simple'],
  },
  {
    id: 'lesson-010',
    module: 'Vocab',
    cefrLevel: 'A1',
    title: 'خانه و there is / there are',
    order: 10,
    content: {
      theory:
        '<p>بخش‌های خانه: <strong>room</strong> اتاق، <strong>kitchen</strong> آشپزخانه، <strong>bedroom</strong> اتاق خواب، <strong>bathroom</strong> حمام/دست‌شویی، <strong>garden</strong> باغچه. وسایل: <strong>bed</strong> تخت، <strong>table</strong> میز، <strong>chair</strong> صندلی، <strong>door</strong> در، <strong>window</strong> پنجره.</p><p>برای گفتن «وجود دارد»: برای یک چیز <strong>There is</strong> و برای چند چیز <strong>There are</strong>: <em>There is a bed in the room. There are two chairs.</em></p>',
      examples: [
        'kitchen — آشپزخانه',
        'bedroom — اتاق خواب',
        'There is a table in the kitchen. — در آشپزخانه یک میز هست.',
        'There are three rooms in my house. — در خانهٔ من سه اتاق هست.',
        'My house is small but nice. — خانهٔ من کوچک ولی قشنگ است.',
      ],
      tips: [
        'There is کوتاه‌شده‌اش می‌شود: There’s.',
        'برای منفی: There isn’t (مفرد) و There aren’t (جمع).',
      ],
    },
    media: {},
    estimatedMinutes: 8,
    tags: ['vocab', 'beginner', 'house'],
  },
];
