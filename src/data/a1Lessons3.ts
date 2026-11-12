import type { Lesson } from '@/types';

/**
 * A1 content pack 3 (content version 4) — lessons 21–30.
 * Past simple, going to, directions/transport, hobbies, health,
 * big numbers, classroom, phone/plans, town. Self-contained.
 */
export const a1Lessons3: Lesson[] = [
  {
    id: 'lesson-021',
    module: 'Grammar',
    cefrLevel: 'A1',
    title: 'گذشتهٔ ساده ۱: was/were و فعل‌های باقاعده',
    order: 21,
    content: {
      theory:
        '<p>برای گذشته، شکل گذشتهٔ to be این است: <strong>was</strong> (با I/he/she/it) و <strong>were</strong> (با you/we/they): <em>I was at home yesterday</em>.</p><p>فعل‌های باقاعده با <strong>-ed</strong> گذشته می‌شوند: <em>work → worked، watch → watched، play → played</em>. اگر فعل به e تمام شود فقط d می‌گیرد: <em>live → lived</em>. نشانه‌های گذشته: <strong>yesterday</strong> (دیروز)، <strong>last night/week/year</strong> (دیشب/هفتهٔ پیش/پارسال)، <strong>… ago</strong> (… پیش: <em>two days ago</em>).</p><p>منفی و سؤالِ فعل‌های معمولی را در درس بعد با did کامل می‌کنیم؛ فعل be منفی‌اش ساده است: <em>wasn’t / weren’t</em>.</p>',
      examples: [
        'I was tired yesterday. — دیروز خسته بودم.',
        'They were at school last week. — هفتهٔ پیش در مدرسه بودند.',
        'We watched a movie last night. — دیشب فیلم دیدیم.',
        'She worked in a bank two years ago. — او دو سال پیش در بانک کار می‌کرد.',
        'It wasn’t cold yesterday. — دیروز سرد نبود.',
        'He played football yesterday. — او دیروز فوتبال بازی کرد.',
      ],
      tips: [
        'تلفظ -ed سه حالت دارد ولی در این سطح فقط بنویسید و بشنوید، قاعده‌اش را بعداً عمیق می‌شویم.',
        'wasn’t = was not و weren’t = were not.',
      ],
    },
    media: {},
    estimatedMinutes: 10,
    tags: ['grammar', 'past-simple', 'was-were'],
  },
  {
    id: 'lesson-022',
    module: 'Grammar',
    cefrLevel: 'A1',
    title: 'گذشتهٔ ساده ۲: فعل‌های بی‌قاعده و did',
    order: 22,
    content: {
      theory:
        '<p>فعل‌های پرکاربرد زیادی بی‌قاعده‌اند و باید حفظ شوند: <em>go → went، see → saw، have → had، eat → ate، drink → drank، buy → bought، take → took، give → gave، come → came، make → made، say → said، get → got، meet → met، find → found</em>.</p><p>منفیِ همهٔ فعل‌ها (به‌جز be): <strong>didn’t + شکل سادهٔ فعل</strong>: <em>I didn’t go</em> (نگید didn’t went). سؤال: <strong>Did you …?</strong> با شکل ساده: <em>Did you see the film?</em> — جواب کوتاه: <em>Yes, I did. / No, I didn’t.</em></p>',
      examples: [
        'We went to Yazd last year. — پارسال به یزد رفتیم.',
        'She ate a sandwich. — او یک ساندویچ خورد.',
        'He bought a new phone. — او یک گوشی تازه خرید.',
        'I didn’t sleep well last night. — دیشب خوب نخوابیدم.',
        'Did you meet your friends? — Yes, I did. — دوستانت را دیدی؟ بله.',
        'They saw a good film yesterday. — آن‌ها دیروز فیلم خوبی دیدند.',
      ],
      tips: [
        'بعد از did و didn’t همیشه شکل سادهٔ فعل می‌آید؛ این خطای شمارهٔ یک زبان‌آموزهاست.',
        'گذشته‌ها را با فلش‌کارت‌های همین بسته تمرین کنید؛ گروهی حفظشان کنید: eat–ate، drink–drank.',
      ],
    },
    media: {},
    estimatedMinutes: 11,
    tags: ['grammar', 'past-simple', 'irregular'],
  },
  {
    id: 'lesson-023',
    module: 'Grammar',
    cefrLevel: 'A1',
    title: 'برنامه و آیندهٔ نزدیک: going to',
    order: 23,
    content: {
      theory:
        '<p>برای برنامه و قصد نزدیک: <strong>am/is/are + going to + فعل ساده</strong>: <em>I am going to travel</em> یعنی «قرار است سفر کنم / می‌خواهم سفر کنم».</p><p>منفی: <em>We aren’t going to stay</em>. سؤالی: <em>Are you going to come?</em> این ساختار برای پیش‌بینی از روی نشانه هم می‌آید: <em>Look at the clouds! It is going to rain.</em></p>',
      examples: [
        'I am going to study tonight. — امشب قرار است درس بخوانم.',
        'She is going to buy a car. — او قرار است ماشین بخرد.',
        'We are going to visit our family. — قرار است به خانواده‌مان سر بزنیم.',
        'Are you going to work tomorrow? — فردا قرار است کار کنی؟',
        'They aren’t going to stay here. — آن‌ها قرار نیست اینجا بمانند.',
        'Look! He is going to fall. — نگاه کن! دارد می‌افتد (قرار است بیفتد).',
      ],
      tips: [
        'going to در صحبت روزمره اغلب «gonna» شنیده می‌شود، ولی در نوشتن همان going to درست است.',
        'برای برنامه‌های قطعی آیندهٔ نزدیک، حال استمراری هم می‌آید (درس ۱۵): I am leaving tomorrow.',
      ],
    },
    media: {},
    estimatedMinutes: 9,
    tags: ['grammar', 'going-to', 'future'],
  },
  {
    id: 'lesson-024',
    module: 'Speaking',
    cefrLevel: 'A1',
    title: 'آدرس پرسیدن و وسایل نقلیه',
    order: 24,
    content: {
      theory:
        '<p>آدرس پرسیدن: <strong>Excuse me, where is the bank?</strong> یا <strong>How can I get to the station?</strong> جواب‌های کلیدی: <em>Go straight</em> (مستقیم برو)، <em>Turn left / right</em> (به چپ/راست بپیچ)، <em>It’s on the left</em> (سمت چپ است)، <em>opposite</em> (روبروی)، <em>on the corner</em> (سر نبش).</p><p>وسیلهٔ رفت‌وآمد با <strong>by</strong> می‌آید: <em>by bus, by car, by train, by plane, by taxi</em> — ولی پیاده می‌شود <em>on foot</em>. سؤالِ «چطور می‌روی؟»: <em>How do you go to work?</em></p>',
      examples: [
        'Excuse me, where is the post office? — ببخشید، ادارهٔ پست کجاست؟',
        'Go straight and turn left. — مستقیم بروید و به چپ بپیچید.',
        'The museum is opposite the park. — موزه روبروی پارک است.',
        'I go to work by bus. — با اتوبوس سر کار می‌روم.',
        'She travels by train. — او با قطار سفر می‌کند.',
        'We walked there on foot. — پیاده رفتیم آنجا.',
      ],
      tips: [
        'Excuse me را اول هر سؤال خیابانی بگویید؛ بدون آن بی‌ادبانه است.',
        'by با وسایل نقلیه s نمی‌گیرد: by bus (نه by buses).',
      ],
    },
    media: {},
    estimatedMinutes: 9,
    tags: ['speaking', 'directions', 'transport'],
  },
  {
    id: 'lesson-025',
    module: 'Speaking',
    cefrLevel: 'A1',
    title: 'سرگرمی‌ها: like / love / hate + ing',
    order: 25,
    content: {
      theory:
        '<p>بعد از <strong>like, love, hate</strong> برای فعالیت‌ها، فعل با <strong>-ing</strong> می‌آید: <em>I like swimming. She loves reading. He hates getting up early.</em></p><p>شدت علاقه از کم به زیاد: <em>don’t like → like → love</em> و نقطهٔ مقابل: <em>hate</em>. سؤال: <em>What do you like doing?</em> برای سرگرمی‌ها: <em>playing football, listening to music, watching movies, drawing, fishing, camping</em>.</p>',
      examples: [
        'I love listening to music. — عاشق گوش‌دادن به موسیقی‌ام.',
        'She likes playing the piano. — او پیانو زدن را دوست دارد.',
        'We don’t like running. — ما دویدن را دوست نداریم.',
        'What do you like doing? — I like drawing. — چه کاری را دوست داری؟ نقاشی کشیدن.',
        'He hates cooking. — او از آشپزی متنفر است.',
        'They like camping in summer. — آن‌ها تابستان کمپ‌زدن را دوست دارند.',
      ],
      tips: [
        'بعد از like هم -ing می‌آید هم to + فعل؛ در این سطح -ing را یاد بگیرید که رایج‌تر است.',
        'play برای ورزش و بازی با the نمی‌آید (play football) ولی سازها the می‌گیرند (play the guitar).',
      ],
    },
    media: {},
    estimatedMinutes: 8,
    tags: ['speaking', 'hobbies', 'gerund'],
  },
  {
    id: 'lesson-026',
    module: 'Vocab',
    cefrLevel: 'A1',
    title: 'بدن و دکتر: حالم خوب نیست',
    order: 26,
    content: {
      theory:
        '<p>گفتن حال بد: <strong>I don’t feel well</strong> (حالم خوب نیست) یا <strong>I am sick</strong>. دردها با <strong>have a …</strong> می‌آیند: <em>headache</em> (سردرد)، <em>toothache</em> (دندان‌درد)، <em>stomachache</em> (دل‌درد)، <em>a cold</em> (سرماخوردگی). برای عضو مشخص: <em>My back hurts</em> (کمرم درد می‌کند).</p><p>آدم‌های درمان: <em>doctor</em> (دکتر)، <em>nurse</em> (پرستار)؛ دارو = <em>medicine</em>. جملهٔ طلایی مطب: <em>I have a headache. Can you help me?</em></p>',
      examples: [
        'I have a headache. — سردرد دارم.',
        'She has a toothache. — او دندان‌درد دارد.',
        'My leg hurts. — پایم درد می‌کند.',
        'He has a cold. — او سرما خورده است.',
        'The doctor is in the hospital. — دکتر در بیمارستان است.',
        'Take this medicine and rest. — این دارو را بخور و استراحت کن.',
      ],
      tips: [
        'headache و toothache با a می‌آیند: I have a headache.',
        'sick یعنی مریض؛ برای «خسته» بگویید tired که در فلش‌کارت‌ها هست.',
      ],
    },
    media: {},
    estimatedMinutes: 8,
    tags: ['vocabulary', 'health', 'doctor'],
  },
  {
    id: 'lesson-027',
    module: 'Vocab',
    cefrLevel: 'A1',
    title: 'اعداد بزرگ و گفتن سال‌ها',
    order: 27,
    content: {
      theory:
        '<p>ده‌ها: <em>twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety</em>. بعد: <strong>one hundred</strong> (۱۰۰)، <strong>one thousand</strong> (۱۰۰۰)، <strong>one million</strong> (یک میلیون). ترکیب: <em>two hundred and fifty</em> (۲۵۰)، <em>three thousand</em> (۳۰۰۰).</p><p>سال‌ها دو تا دو تا خوانده می‌شوند: <em>2020 = twenty twenty</em>، <em>1990 = nineteen ninety</em>، و برای ۲۰۰۰ تا ۲۰۰۹: <em>two thousand and five</em> (۲۰۰۵). قیمت‌های بزرگ را همین‌طور تمرین کنید: <em>It costs two million tomans.</em></p>',
      examples: [
        'There are three hundred students. — سیصد دانش‌آموز هستند.',
        'My car is ten thousand dollars. — ماشینم ده هزار دلار است.',
        'He was born in nineteen eighty-five. — او در سال ۱۹۸۵ به دنیا آمد.',
        'It is twenty twenty-six now. — الان سال ۲۰۲۶ است.',
        'The house costs two million. — خانه دو میلیون قیمت دارد.',
        'Forty people came to class. — چهل نفر به کلاس آمدند.',
      ],
      tips: [
        'hundred و thousand وقتی دقیق‌اند s نمی‌گیرند: two hundred (نه hundreds).',
        'forty را بدون u بنویسید (اشتباه رایج: fourty غلط است).',
      ],
    },
    media: {},
    estimatedMinutes: 8,
    tags: ['vocabulary', 'numbers', 'years'],
  },
  {
    id: 'lesson-028',
    module: 'Vocab',
    cefrLevel: 'A1',
    title: 'مدرسه و کلاس درس',
    order: 28,
    content: {
      theory:
        '<p>وسایل کلاس: <em>pen</em> (خودکار)، <em>pencil</em> (مداد)، <em>notebook</em> (دفتر)، <em>ruler</em> (خط‌کش)، <em>eraser</em> (پاک‌کن)، <em>board</em> (تخته)، <em>desk</em> (نیمکت/میز تحریر)، <em>map</em> (نقشه).</p><p>جمله‌های کلاسی که هر روز لازم می‌شوند: <em>Can I come in?</em> (می‌توانم بیایم داخل؟)، <em>Can you repeat, please?</em> (می‌شود تکرار کنید؟)، <em>What does this mean?</em> (این یعنی چه؟)، <em>How do you say … in English?</em> (… را به انگلیسی چه می‌گویند؟)، <em>I don’t understand</em> (نمی‌فهمم). تکلیف = <em>homework</em> و امتحان = <em>exam</em>.</p>',
      examples: [
        'Can you repeat, please? — می‌شود تکرار کنید، لطفاً؟',
        'What does “library” mean? — «library» یعنی چه؟',
        'I don’t understand. — نمی‌فهمم.',
        'We have an exam tomorrow. — فردا امتحان داریم.',
        'The teacher is writing on the board. — معلم دارد روی تخته می‌نویسد.',
        'Don’t forget your homework. — تکالیفت را فراموش نکن.',
      ],
      tips: [
        'همین پنج جملهٔ کلاسی را حفظ کنید؛ نیمی از مشکل کلاس زبان حل می‌شود.',
        'eraser در انگلیسی آمریکایی و rubber در بریتانیایی هر دو یعنی پاک‌کن.',
      ],
    },
    media: {},
    estimatedMinutes: 8,
    tags: ['vocabulary', 'school', 'classroom'],
  },
  {
    id: 'lesson-029',
    module: 'Speaking',
    cefrLevel: 'A1',
    title: 'تلفن و قرار گذاشتن',
    order: 29,
    content: {
      theory:
        '<p>تلفن را این‌طور جواب می‌دهیم: <strong>Hello, this is Ali.</strong> (من علی‌ام — پشت تلفن this is می‌گوییم نه I am). برای خواستن شخص: <em>Can I speak to Sara, please?</em> اگر نبود: <em>She isn’t here. Can I take a message?</em></p><p>قرار گذاشتن: <strong>Let’s …</strong> برای پیشنهاد (<em>Let’s meet at five</em>)، و <em>Would you like to …?</em> برای دعوت (<em>Would you like to drink coffee?</em>). جواب مثبت: <em>Yes, good idea!</em> و رد مؤدبانه: <em>Sorry, I can’t. I am busy.</em></p>',
      examples: [
        'Hello, this is Reza. — سلام، رضا هستم.',
        'Can I speak to Maryam, please? — می‌توانم با مریم صحبت کنم، لطفاً؟',
        'Let’s meet tomorrow at six. — بیا فردا ساعت شش همدیگر را ببینیم.',
        'Would you like to go to the cinema? — دوست داری برویم سینما؟',
        'Sorry, I can’t. I am busy. — ببخشید، نمی‌توانم. سرم شلوغ است.',
        'See you on Friday! — جمعه می‌بینمت!',
      ],
      tips: [
        'پشت تلفن برای معرفی خودتان this is درست است، نه I am.',
        'Let’s مخفف let us است و همیشه با فعل ساده می‌آید.',
      ],
    },
    media: {},
    estimatedMinutes: 8,
    tags: ['speaking', 'phone', 'plans'],
  },
  {
    id: 'lesson-030',
    module: 'Vocab',
    cefrLevel: 'A1',
    title: 'شهر من: مکان‌های شهر',
    order: 30,
    content: {
      theory:
        '<p>مکان‌های مهم شهر: <em>cinema</em> (سینما)، <em>library</em> (کتابخانه)، <em>supermarket</em> (سوپرمارکت)، <em>restaurant</em> (رستوران)، <em>hotel</em> (هتل)، <em>museum</em> (موزه)، <em>pharmacy</em> (داروخانه)، <em>bridge</em> (پل)، <em>office</em> (اداره/دفتر)، <em>theatre</em> (تئاتر).</p><p>حالا می‌توانید شهرتان را توصیف کنید و ترکیب درس‌های قبل را به کار ببرید: <em>In my city there is a big museum. It is next to the library. There are two cinemas.</em> برای «آیا … هست؟» هم: <em>Is there a pharmacy near here?</em></p>',
      examples: [
        'There is a cinema in my city. — در شهر من یک سینما هست.',
        'The library is opposite the museum. — کتابخانه روبروی موزه است.',
        'Is there a pharmacy near here? — این نزدیکی داروخانه هست؟',
        'We buy food at the supermarket. — ما از سوپرمارکت غذا می‌خریم.',
        'The hotel is behind the station. — هتل پشت ایستگاه است.',
        'My office is in the city centre. — دفترم در مرکز شهر است.',
      ],
      tips: [
        'centre املای بریتانیایی است؛ آمریکایی‌ها center می‌نویسند. هر دو درست‌اند.',
        'توصیف شهر خودتان را با همین الگو بنویسید؛ بهترین تمرین این درس است.',
      ],
    },
    media: {},
    estimatedMinutes: 8,
    tags: ['vocabulary', 'town', 'places'],
  },
];
