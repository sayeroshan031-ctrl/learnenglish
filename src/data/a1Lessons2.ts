import type { Lesson } from '@/types';

/**
 * A1 content pack 2 (content version 3) — lessons 11–20.
 * Continues the pack-1 syllabus: possession, demonstratives, place,
 * ability, present continuous, calendar, weather, shopping, restaurant,
 * adjectives and comparison. Self-contained: no external media.
 */
export const a1Lessons2: Lesson[] = [
  {
    id: 'lesson-011',
    module: 'Grammar',
    cefrLevel: 'A1',
    title: 'مالکیت: my / your / his و ’s',
    order: 11,
    content: {
      theory:
        '<p>برای گفتن «مالِ کی» از این کلمه‌ها استفاده می‌کنیم: <strong>my</strong> (مال من)، <strong>your</strong> (مال تو/شما)، <strong>his</strong> (مال او – مرد)، <strong>her</strong> (مال او – زن)، <strong>our</strong> (مال ما)، <strong>their</strong> (مال آن‌ها). این‌ها همیشه قبل از اسم می‌آیند: <em>my book</em> — کتاب من.</p><p>راه دوم، آپاستروف s است: <strong>Ali’s car</strong> یعنی «ماشینِ علی». برای جمع‌ها s آخر جمله می‌رود بعد از s جمع: <em>the students’ books</em>.</p>',
      examples: [
        'This is my phone. — این گوشیِ من است.',
        'Her name is Maryam. — اسم او مریم است.',
        'Our house is big. — خانهٔ ما بزرگ است.',
        'That is Reza’s bike. — آن دوچرخهٔ رضاست.',
        'Their children are at school. — بچه‌های آن‌ها در مدرسه‌اند.',
        'Is this your bag? — این کیفِ توست؟',
      ],
      tips: [
        'his فقط برای مرد و her فقط برای زن است؛ اشتباه رایج فارسی‌زبان‌ها.',
        'its یعنی «مالِ آن (چیز/حیوان)» و با it’s (مخفف it is) فرق دارد.',
      ],
    },
    media: {},
    estimatedMinutes: 8,
    tags: ['grammar', 'possessive', 'a1'],
  },
  {
    id: 'lesson-012',
    module: 'Grammar',
    cefrLevel: 'A1',
    title: 'این و آن + جمع بستن اسم‌ها',
    order: 12,
    content: {
      theory:
        '<p>چهار کلمهٔ اشاره داریم: <strong>this</strong> (این، نزدیک و مفرد)، <strong>that</strong> (آن، دور و مفرد)، <strong>these</strong> (این‌ها، نزدیک و جمع)، <strong>those</strong> (آن‌ها، دور و جمع).</p><p>جمع بستن معمولاً با <strong>-s</strong> است: <em>book → books</em>. اگر کلمه به s، x، ch یا sh تمام شود <strong>-es</strong> می‌گیرد: <em>bus → buses، watch → watches</em>. اگر به حرف بی‌صدا + y تمام شود، y می‌شود <strong>ies</strong>: <em>city → cities</em>. چند جمع بی‌قاعدهٔ مهم: <em>man → men، woman → women، child → children، person → people</em>.</p>',
      examples: [
        'This is my book. — این کتاب من است.',
        'Those are my friends. — آن‌ها دوستان من‌اند.',
        'These shoes are new. — این کفش‌ها تازه‌اند.',
        'I have two watches. — من دو ساعت (مچی) دارم.',
        'There are three children in the park. — سه بچه در پارک هستند.',
        'These cities are old. — این شهرها قدیمی‌اند.',
      ],
      tips: [
        'people خودش جمع است؛ نگوییم peoples.',
        'these را «دیز» و those را «دُوز» تلفظ می‌کنیم.',
      ],
    },
    media: {},
    estimatedMinutes: 9,
    tags: ['grammar', 'plurals', 'demonstratives'],
  },
  {
    id: 'lesson-013',
    module: 'Grammar',
    cefrLevel: 'A1',
    title: 'حروف اضافهٔ مکان: کجاست؟',
    order: 13,
    content: {
      theory:
        '<p>برای گفتن جای چیزها: <strong>in</strong> (داخل)، <strong>on</strong> (روی سطح)، <strong>under</strong> (زیر)، <strong>next to</strong> (کنار)، <strong>behind</strong> (پشت)، <strong>in front of</strong> (جلو)، <strong>between</strong> (بین دو چیز).</p><p>سؤالِ «کجاست؟» می‌شود: <strong>Where is …?</strong> و با الگوی درس ۱۰ جواب می‌دهیم: <em>The cat is under the table.</em></p>',
      examples: [
        'The book is on the table. — کتاب روی میز است.',
        'The cat is under the chair. — گربه زیر صندلی است.',
        'My bag is next to the door. — کیفم کنار در است.',
        'The bank is between the café and the shop. — بانک بین کافه و مغازه است.',
        'Where is the key? It is in my pocket. — کلید کجاست؟ توی جیبم است.',
        'The car is in front of the house. — ماشین جلوی خانه است.',
      ],
      tips: [
        'on برای «روی سطح» است: on the wall (روی دیوار)، on the table.',
        'at برای نشانی و مکان‌های مشخص می‌آید: at home، at school.',
      ],
    },
    media: {},
    estimatedMinutes: 8,
    tags: ['grammar', 'prepositions', 'place'],
  },
  {
    id: 'lesson-014',
    module: 'Grammar',
    cefrLevel: 'A1',
    title: 'توانایی: can و can’t',
    order: 14,
    content: {
      theory:
        '<p><strong>can</strong> یعنی «می‌توانم / بلدم» و <strong>can’t</strong> یعنی «نمی‌توانم». بعد از can همیشه شکل سادهٔ فعل می‌آید، بدون to: <em>I can swim</em> (نگید I can to swim).</p><p>سؤالی: <em>Can you drive?</em> — جواب کوتاه: <em>Yes, I can. / No, I can’t.</em> برای درخواست مؤدبانه هم می‌گوییم: <em>Can you help me, please?</em></p>',
      examples: [
        'I can speak English. — می‌توانم انگلیسی صحبت کنم.',
        'She can ride a bike. — او می‌تواند دوچرخه‌سواری کند.',
        'He can’t drive. — او نمی‌تواند رانندگی کند.',
        'Can you swim? — Yes, I can. — شنا بلدی؟ بله.',
        'We can play football today. — امروز می‌توانیم فوتبال بازی کنیم.',
        'Can you help me, please? — می‌شود کمکم کنی، لطفاً؟',
      ],
      tips: [
        'can برای همهٔ فاعل‌ها یکی است: I can، he can، they can — s نمی‌گیرد.',
        'در متن رسمی can’t را cannot هم می‌نویسند.',
      ],
    },
    media: {},
    estimatedMinutes: 7,
    tags: ['grammar', 'can', 'ability'],
  },
  {
    id: 'lesson-015',
    module: 'Grammar',
    cefrLevel: 'A1',
    title: 'حال استمراری: همین الان',
    order: 15,
    content: {
      theory:
        '<p>برای کاری که <strong>همین الان در حال انجام</strong> است: فاعل + <strong>am/is/are</strong> + فعل با <strong>-ing</strong>: <em>I am reading now</em>.</p><p>منفی: <em>She is not sleeping</em>. سؤالی: <em>Are you working?</em> چند قاعدهٔ -ing: اگر فعل به e تمام شود e حذف می‌شود (<em>write → writing</em>)؛ فعل‌های کوتاه با یک حرف صدادار معمولاً حرف آخرشان دوتا می‌شود (<em>run → running، sit → sitting</em>).</p><p>فرقش با حال ساده: حال ساده = عادت و همیشه (<em>I read every night</em>)؛ استمراری = فقط الان (<em>I am reading now</em>).</p>',
      examples: [
        'I am studying English now. — الان دارم انگلیسی می‌خوانم.',
        'Look! It is raining. — نگاه کن! دارد باران می‌بارد.',
        'They are playing in the garden. — دارند در باغ بازی می‌کنند.',
        'She is not listening. — او گوش نمی‌دهد.',
        'What are you doing? — داری چه کار می‌کنی؟',
        'He is running to school. — دارد به طرف مدرسه می‌دود.',
      ],
      tips: [
        'نشانه‌های این زمان: now، right now، Look!، Listen!',
        'فعل‌هایی مثل know و want معمولاً -ing نمی‌گیرند.',
      ],
    },
    media: {},
    estimatedMinutes: 10,
    tags: ['grammar', 'present-continuous'],
  },
  {
    id: 'lesson-016',
    module: 'Vocab',
    cefrLevel: 'A1',
    title: 'ماه‌ها، فصل‌ها و تاریخ',
    order: 16,
    content: {
      theory:
        '<p>ماه‌های میلادی: <strong>January, February, March, April, May, June, July, August, September, October, November, December</strong>. فصل‌ها: <strong>spring</strong> (بهاری)، <strong>summer</strong> (تابستان)، <strong>autumn</strong> (پاییز)، <strong>winter</strong> (زمستان).</p><p>برای تاریخ از اعداد ترتیبی استفاده می‌کنیم: <em>first (1st), second (2nd), third (3rd), fourth (4th)</em> و بعد الگو یکی است: <em>fifth, sixth… twentieth, twenty-first</em>. تاریخ را این‌طور می‌گوییم: <em>my birthday is on May 3rd</em> — با حرف اضافهٔ <strong>on</strong> برای روز و تاریخ، و <strong>in</strong> برای ماه و فصل و سال.</p>',
      examples: [
        'My birthday is in June. — تولدم در ماه ژوئن است.',
        'School starts on September 1st. — مدرسه اول سپتامبر شروع می‌شود.',
        'It is cold in winter. — در زمستان هوا سرد است.',
        'Her birthday is on the 21st of March. — تولد او ۲۱ مارس است.',
        'We travel in summer. — ما در تابستان سفر می‌کنیم.',
        'Today is the third of May. — امروز سوم مه است.',
      ],
      tips: [
        'ماه‌ها در انگلیسی همیشه با حرف بزرگ نوشته می‌شوند.',
        'on برای روز مشخص، in برای ماه/فصل/سال — این تمایز را حفظ کنید.',
      ],
    },
    media: {},
    estimatedMinutes: 8,
    tags: ['vocabulary', 'months', 'dates'],
  },
  {
    id: 'lesson-017',
    module: 'Vocab',
    cefrLevel: 'A1',
    title: 'آب‌وهوا و لباس',
    order: 17,
    content: {
      theory:
        '<p>سؤالِ هوا: <strong>What’s the weather like today?</strong> جواب با <strong>It is</strong> شروع می‌شود: <em>It is sunny</em> (آفتابی)، <em>cloudy</em> (ابری)، <em>windy</em> (بادی)، <em>rainy</em> (بارانی)، <em>snowy</em> (برفی)، <em>hot / warm / cool / cold</em> (گرم / ملایم‌گرم / خنک / سرد). برای باران و برفِ در حال بارش: <em>It is raining / snowing</em> (درس ۱۵).</p><p>لباس‌ها: <strong>shirt</strong> (پیراهن)، <strong>T-shirt</strong>، <strong>trousers</strong> (شلوار)، <strong>dress</strong> (پیراهن زنانه)، <strong>coat</strong> (پالتو)، <strong>jacket</strong> (کاپشن)، <strong>shoes</strong> (کفش)، <strong>hat</strong> (کلاه)، <strong>glasses</strong> (عینک). پوشیدن = <em>wear</em>: <em>She is wearing a red dress.</em></p>',
      examples: [
        'It is sunny and warm today. — امروز هوا آفتابی و گرم است.',
        'It is very cold in Yazd in winter. — زمستان در یزد خیلی سرد است.',
        'What’s the weather like? — It’s cloudy. — هوا چطور است؟ ابری است.',
        'He is wearing a black coat. — او پالتوی مشکی پوشیده است.',
        'Take your hat, it is windy. — کلاهت را بردار، باد می‌آید.',
        'It is raining. I need my jacket. — دارد باران می‌بارد. کاپشنم را لازم دارم.',
      ],
      tips: [
        'بعد از It is برای هوا همیشه صفت می‌آید، نه اسم: It is sunny (نه It is sun).',
        'trousers و glasses و shoes همیشه جمع گفته می‌شوند.',
      ],
    },
    media: {},
    estimatedMinutes: 8,
    tags: ['vocabulary', 'weather', 'clothes'],
  },
  {
    id: 'lesson-018',
    module: 'Speaking',
    cefrLevel: 'A1',
    title: 'خرید: قیمت و some / any',
    order: 18,
    content: {
      theory:
        '<p>قیمت پرسیدن: <strong>How much is it?</strong> (مفرد) و <strong>How much are they?</strong> (جمع). برای مقدار: با اسم‌های غیرقابل‌شمارش <strong>how much</strong> و با قابل‌شمارش‌ها <strong>how many</strong>: <em>How much water? How many eggs?</em></p><p><strong>some</strong> در جمله‌های مثبت می‌آید (<em>I need some bread</em>) و <strong>any</strong> در سؤال و منفی (<em>Do you have any eggs? I don’t have any money</em>). نکته: در پیشنهاد و درخواست مؤدبانه وسط سؤال هم some می‌آید: <em>Would you like some tea?</em></p>',
      examples: [
        'How much is this bag? — این کیف چنده؟',
        'It’s twenty dollars. — بیست دلار است.',
        'I need some milk and some eggs. — کمی شیر و چند تا تخم‌مرغ لازم دارم.',
        'We don’t have any cheese. — ما اصلاً پنیر نداریم.',
        'How many people are there? — چند نفر هستند؟',
        'Can I have some water, please? — می‌شود کمی آب داشته باشم، لطفاً؟',
      ],
      tips: [
        'واحد پول را ساده بگویید: ten dollars، و برای ایران: tomans هم قابل فهم است.',
        'Excuse me اولِ پرسیدن قیمت، گفت‌وگو را مؤدبانه می‌کند.',
      ],
    },
    media: {},
    estimatedMinutes: 9,
    tags: ['speaking', 'shopping', 'some-any'],
  },
  {
    id: 'lesson-019',
    module: 'Speaking',
    cefrLevel: 'A1',
    title: 'در رستوران: would like و سفارش',
    order: 19,
    content: {
      theory:
        '<p><strong>would like</strong> شکل مؤدبانهٔ «می‌خواهم» است؛ کوتاه‌شده‌اش <strong>’d like</strong>: <em>I’d like a coffee, please.</em> سؤالی برای پیشنهاد: <em>Would you like some tea?</em> — جواب: <em>Yes, please. / No, thank you.</em></p><p>جمله‌های کلیدی رستوران: <em>Can I have the menu, please?</em> (منو را می‌دهید؟)، <em>Can I have the bill, please?</em> (صورت‌حساب، لطفاً). برای گفتن «من … هستم» هنگام سفارش از درس‌های قبل استفاده کنید: <em>I’d like rice with chicken.</em></p>',
      examples: [
        'I’d like a cup of tea, please. — یک فنجان چای می‌خواهم، لطفاً.',
        'Would you like some bread? — کمی نان میل دارید؟',
        'Can I have the menu, please? — می‌شود منو را ببینم، لطفاً؟',
        'She’d like a salad. — او یک سالاد می‌خواهد.',
        'Can I have the bill, please? — صورت‌حساب را می‌آورید، لطفاً؟',
        'Two coffees, please. — دو قهوه، لطفاً.',
      ],
      tips: [
        'please در پایان جملهٔ سفارش تقریباً همیشه لازم است.',
        'I want درست است ولی مستقیم و کمی بی‌ادبانه شنیده می‌شود؛ I’d like بهتر است.',
      ],
    },
    media: {},
    estimatedMinutes: 8,
    tags: ['speaking', 'restaurant', 'would-like'],
  },
  {
    id: 'lesson-020',
    module: 'Grammar',
    cefrLevel: 'A1',
    title: 'صفت‌ها و مقایسهٔ ساده',
    order: 20,
    content: {
      theory:
        '<p>صفت قبل از اسم می‌آید و با هیچ فاعلی تغییر نمی‌کند: <em>a big house، big houses</em> (صفت جمع نمی‌شود!). ترتیب رایج: اول نظر، بعد اندازه، بعد رنگ: <em>a beautiful big house</em>.</p><p>مقایسهٔ دو چیز با <strong>-er than</strong>: <em>Ali is taller than Reza</em>. صفت‌های بلند با <strong>more</strong>: <em>more expensive</em>. سه بی‌قاعدهٔ مهم: <em>good → better، bad → worse، far → farther</em>. برای «ترین» از <strong>the -est</strong> استفاده می‌کنیم: <em>the biggest city</em>.</p>',
      examples: [
        'My house is bigger than your house. — خانهٔ من از خانهٔ تو بزرگ‌تر است.',
        'This book is more interesting. — این کتاب جالب‌تر است.',
        'She is taller than her sister. — او از خواهرش بلندتر است.',
        'Today is colder than yesterday. — امروز از دیروز سردتر است.',
        'He is the best student in class. — او بهترین دانش‌آموز کلاس است.',
        'A car is faster than a bike. — ماشین از دوچرخه سریع‌تر است.',
      ],
      tips: [
        'بعد از صفت مقایسه‌ای تقریباً همیشه than می‌آید.',
        'صفت‌های یک‌بخشی کوتاه با y تمام‌شده: happy → happier (y می‌شود i).',
      ],
    },
    media: {},
    estimatedMinutes: 9,
    tags: ['grammar', 'adjectives', 'comparison'],
  },
];
