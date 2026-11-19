import type { Lesson } from '@/types';

/**
 * A1 content pack 4 — FINAL A1 pack (content version 5) — lessons 31–40.
 * Quantities, imperatives, frequency, permission/offers, past storytelling,
 * feelings, jobs talk, invitations, common mistakes, A1 can-do review.
 * Self-contained: no external media.
 */
export const a1Lessons4: Lesson[] = [
  {
    id: 'lesson-031',
    module: 'Vocab',
    cefrLevel: 'A1',
    title: 'مقدار و ظرف‌ها: a bottle of …',
    order: 31,
    content: {
      theory:
        '<p>اسم‌های غیرقابل‌شمارش (water, milk, rice, cheese) را با ظرف و واحد می‌شماریم: <strong>a bottle of</strong> water (یک بطری آب)، <strong>a cup of</strong> tea (یک فنجان چای)، <strong>a glass of</strong> juice (یک لیوان آبمیوه)، <strong>a kilo of</strong> rice (یک کیلو برنج)، <strong>a piece of</strong> cake (یک تکه کیک)، <strong>a box of</strong> eggs (یک جعبه تخم‌مرغ).</p><p>جمع‌شان روی ظرف می‌نشیند: <em>two bottles of water</em>. در مغازه همین‌ها جملهٔ خریدتان است: <em>Can I have a kilo of apples, please?</em></p>',
      examples: [
        'A bottle of water, please. — یک بطری آب، لطفاً.',
        'She drinks two cups of tea a day. — او روزی دو فنجان چای می‌خورد.',
        'We need a kilo of rice. — یک کیلو برنج لازم داریم.',
        'He ate a piece of cake. — او یک تکه کیک خورد.',
        'There is a box of books on the desk. — یک جعبه کتاب روی میز است.',
        'Can I have a glass of water? — می‌شود یک لیوان آب داشته باشم؟',
      ],
      tips: [
        'of همیشه بین ظرف و محتوا می‌آید: a cup of tea (نه a cup tea).',
        'plate, bowl, spoon, fork, knife از فلش‌کارت‌های همین بسته‌اند؛ سر سفره لازم می‌شوند.',
      ],
    },
    media: {},
    estimatedMinutes: 8,
    tags: ['vocabulary', 'quantities', 'containers'],
  },
  {
    id: 'lesson-032',
    module: 'Grammar',
    cefrLevel: 'A1',
    title: 'دستور و خواهش: imperatives',
    order: 32,
    content: {
      theory:
        '<p>جملهٔ دستوری با شکل سادهٔ فعل شروع می‌شود و فاعل ندارد: <strong>Open the book.</strong> (کتاب را باز کن). منفی‌اش با <strong>Don’t</strong>: <em>Don’t run.</em> (ندو).</p><p>برای نرم‌کردنش please می‌گذاریم اول یا آخر جمله: <em>Sit down, please.</em> پیشنهاد گروهی هم با <strong>Let’s</strong> است که در درس ۲۹ دیدیم: <em>Let’s go.</em></p>',
      examples: [
        'Open your books, please. — کتاب‌هایتان را باز کنید، لطفاً.',
        'Don’t be late. — دیر نکن.',
        'Listen to me. — به من گوش بده.',
        'Don’t touch that! — به آن دست نزن!',
        'Please be quiet. — لطفاً ساکت باشید.',
        'Let’s start the lesson. — بیایید درس را شروع کنیم.',
      ],
      tips: [
        'جملهٔ دستوری بدون please در انگلیسی تند شنیده می‌شود؛ please نجاتش می‌دهد.',
        'Don’t + فعل ساده، برای همهٔ فاعل‌ها یکی است.',
      ],
    },
    media: {},
    estimatedMinutes: 7,
    tags: ['grammar', 'imperatives'],
  },
  {
    id: 'lesson-033',
    module: 'Grammar',
    cefrLevel: 'A1',
    title: 'قیدهای تکرار: always تا never',
    order: 33,
    content: {
      theory:
        '<p>برای گفتن «هر چند وقت» از این قیدها استفاده می‌کنیم، از همیشه تا هرگز: <strong>always</strong> (همیشه)، <strong>usually</strong> (معمولاً)، <strong>often</strong> (اغلب)، <strong>sometimes</strong> (گاهی)، <strong>never</strong> (هرگز).</p><p>جای‌شان: قبل از فعل اصلی (<em>I always get up early</em>) ولی بعد از فعل be (<em>She is always late</em>). سؤال رایج: <strong>How often do you …?</strong> (هر چند وقت …؟) و جواب با every: <em>every day / every week</em>.</p>',
      examples: [
        'I always drink tea in the morning. — من همیشه صبح چای می‌خورم.',
        'He is usually busy. — او معمولاً مشغول است.',
        'We often go to the park. — ما اغلب به پارک می‌رویم.',
        'She never eats fast food. — او هرگز فست‌فود نمی‌خورد.',
        'How often do you study? — Every day. — هر چند وقت درس می‌خوانی؟ هر روز.',
        'They sometimes visit us. — آن‌ها گاهی به ما سر می‌زنند.',
      ],
      tips: [
        'never خودش منفی است؛ دیگر not نمی‌خواهد: She never eats (نه doesn’t never).',
        'sometimes می‌تواند اول جمله هم بیاید: Sometimes I walk to work.',
      ],
    },
    media: {},
    estimatedMinutes: 8,
    tags: ['grammar', 'frequency', 'adverbs'],
  },
  {
    id: 'lesson-034',
    module: 'Speaking',
    cefrLevel: 'A1',
    title: 'اجازه خواستن و تعارف کردن',
    order: 34,
    content: {
      theory:
        '<p>اجازه خواستن: <strong>Can I …?</strong> دوستانه و روزمره (<em>Can I sit here?</em>) و رسمی‌تر: <strong>Could I …?</strong> (<em>Could I use your phone?</em>). جواب مثبت: <em>Yes, of course.</em> و رد مؤدبانه: <em>Sorry, you can’t.</em></p><p>تعارف و پیشنهاد کمک: <strong>Shall I …?</strong> (<em>Shall I help you?</em>) و <em>Would you like …?</em> که در درس ۱۹ دیدیم. برای دادن چیزی هم: <em>Here you are.</em> (بفرمایید).</p>',
      examples: [
        'Can I open the window? — می‌توانم پنجره را باز کنم؟',
        'Could I speak to the doctor? — می‌توانم با دکتر صحبت کنم؟',
        'Shall I carry your bag? — کیفتان را بیاورم؟',
        'Would you like some tea? — Yes, please. — چای میل دارید؟ بله، لطفاً.',
        'Here you are. — Thank you. — بفرمایید. — ممنون.',
        'Sorry, you can’t park here. — ببخشید، اینجا نمی‌توانید پارک کنید.',
      ],
      tips: [
        'Could از can مؤدبانه‌تر است ولی معنایش همان اجازه است.',
        'Here you are هنگام تحویل‌دادن هر چیزی گفته می‌شود.',
      ],
    },
    media: {},
    estimatedMinutes: 8,
    tags: ['speaking', 'permission', 'offers'],
  },
  {
    id: 'lesson-035',
    module: 'Speaking',
    cefrLevel: 'A1',
    title: 'قصه گفتن در گذشته: اول، بعد، در پایان',
    order: 35,
    content: {
      theory:
        '<p>برای تعریف‌کردن یک اتفاق با ترتیب زمانی، از این ربط‌ها استفاده کنید: <strong>First</strong> (اول)، <strong>Then</strong> (بعد)، <strong>After that</strong> (بعد از آن)، <strong>Finally</strong> (در پایان). همهٔ فعل‌ها گذشته‌اند (درس‌های ۲۱ و ۲۲).</p><p>الگوی آماده: <em>First, we went to the market. Then we bought some fruit. After that, we had lunch. Finally, we went home.</em> با همین چهار کلمه، هر خاطرهٔ ساده‌ای را می‌شود تعریف کرد.</p>',
      examples: [
        'First, I got up at six. — اول، ساعت شش بیدار شدم.',
        'Then I had breakfast. — بعد صبحانه خوردم.',
        'After that, we went to the city. — بعد از آن، به شهر رفتیم.',
        'Finally, we came home at night. — در پایان، شب به خانه آمدیم.',
        'First she called me, then she visited me. — اول به من زنگ زد، بعد به دیدنم آمد.',
        'Yesterday was a good day. First, … — دیروز روز خوبی بود. اول، …',
      ],
      tips: [
        'بعد از First و Finally معمولاً ویرگول می‌آید.',
        'تمرین این درس: دیروزتان را در چهار جمله با همین ربط‌ها بنویسید.',
      ],
    },
    media: {},
    estimatedMinutes: 9,
    tags: ['speaking', 'storytelling', 'past'],
  },
  {
    id: 'lesson-036',
    module: 'Vocab',
    cefrLevel: 'A1',
    title: 'احساسات: چطور حس می‌کنی؟',
    order: 36,
    content: {
      theory:
        '<p>سؤالِ حالِ دل: <strong>How do you feel?</strong> یا همان <em>How are you?</em> جواب‌ها با <strong>I feel</strong> یا <strong>I am</strong>: <em>happy, sad, tired, angry, afraid, excited, bored, surprised, worried, hungry, thirsty, hot, cold</em> (بخشی را از بسته‌های قبل می‌شناسید).</p><p>دلیل آوردن با <strong>because</strong> (چون): <em>I am happy because it is Friday.</em> — because جمله را کامل می‌کند: علت بعدش می‌آید.</p>',
      examples: [
        'I feel tired today. — امروز حس خستگی دارم.',
        'She is excited about the trip. — او از سفر هیجان‌زده است.',
        'He is angry because he is late. — او عصبانی است چون دیر کرده.',
        'The children are bored. — بچه‌ها حوصله‌شان سر رفته.',
        'Are you afraid of dogs? — از سگ می‌ترسی؟',
        'We are happy because the exam is easy. — خوشحالیم چون امتحان آسان است.',
      ],
      tips: [
        'feel و am هر دو درست‌اند: I feel tired = I am tired.',
        'excited برای آدم است؛ exciting برای چیز هیجان‌انگیز (a film). این تفاوت در A2 عمیق می‌شود.',
      ],
    },
    media: {},
    estimatedMinutes: 8,
    tags: ['vocabulary', 'feelings', 'because'],
  },
  {
    id: 'lesson-037',
    module: 'Speaking',
    cefrLevel: 'A1',
    title: 'شغل‌ها: چه کاره‌ای و کجا کار می‌کنی؟',
    order: 37,
    content: {
      theory:
        '<p>سؤالِ شغل: <strong>What do you do?</strong> (چه‌کاره‌ای؟) — جواب با درس ۲: <em>I am a driver.</em> سؤالِ محل کار: <strong>Where do you work?</strong> — جواب با in/at: <em>I work in a hospital / at a school / for a company.</em></p><p>شغل‌های تازهٔ این بسته: <em>driver, farmer, engineer, pilot, actor, artist, writer, dentist, waiter, builder, secretary, police officer, firefighter, postman</em>. توصیف شغل هم ساده است: <em>Her job is interesting / difficult.</em></p>',
      examples: [
        'What do you do? — I am a farmer. — چه‌کاره‌ای؟ کشاورزم.',
        'Where does he work? — In an office. — او کجا کار می‌کند؟ در یک اداره.',
        'My sister is a dentist. — خواهرم دندان‌پزشک است.',
        'The pilot works at the airport. — خلبان در فرودگاه کار می‌کند.',
        'His job is difficult but interesting. — کار او سخت ولی جالب است.',
        'She works for a big company. — او برای یک شرکت بزرگ کار می‌کند.',
      ],
      tips: [
        'قبل از شغل مفرد حتماً a/an بیاید: I am a teacher (نه I am teacher).',
        'What do you do یعنی شغلت چیست، نه «چه کار داری می‌کنی»!',
      ],
    },
    media: {},
    estimatedMinutes: 8,
    tags: ['speaking', 'jobs', 'work'],
  },
  {
    id: 'lesson-038',
    module: 'Speaking',
    cefrLevel: 'A1',
    title: 'دعوت و پیشنهاد: چرا … نکنیم؟',
    order: 38,
    content: {
      theory:
        '<p>سه راه پیشنهاد دادن: <strong>Let’s …</strong> (<em>Let’s play chess</em>)، <strong>Why don’t we …?</strong> (<em>Why don’t we go to the cinema?</em>) و <strong>How about …?</strong> که بعدش اسم یا فعل -ing می‌آید (<em>How about a coffee? / How about going?</em>).</p><p>قبول‌کردن: <em>Good idea! / Yes, let’s!</em> رد مؤدبانه با عذر: <em>I’d love to, but I can’t. I am busy.</em> (دوست دارم، ولی نمی‌توانم).</p>',
      examples: [
        'Why don’t we visit the museum? — چرا به موزه نرویم؟',
        'How about some tea? — چای چطور است؟',
        'Let’s play football tomorrow. — بیا فردا فوتبال بازی کنیم.',
        'Good idea! Let’s go. — ایدهٔ خوبی است! برویم.',
        'I’d love to, but I am tired. — دوست دارم، ولی خسته‌ام.',
        'How about going to the park? — رفتن به پارک چطور است؟',
      ],
      tips: [
        'بعد از Why don’t we فعل ساده می‌آید، نه to‌دار.',
        'I’d love to مؤدبانه‌ترین راه قبول یا رد ملایم است.',
      ],
    },
    media: {},
    estimatedMinutes: 8,
    tags: ['speaking', 'invitations', 'suggestions'],
  },
  {
    id: 'lesson-039',
    module: 'Grammar',
    cefrLevel: 'A1',
    title: 'اشتباه‌های رایج فارسی‌زبان‌ها',
    order: 39,
    content: {
      theory:
        '<p>این درس جمع‌کردن خطاهایی است که فارسی‌زبان‌ها از روی زبان مادری می‌آورند. هرکدام را با شکل درستش ببینید:</p><p>۱) سن با be است: <em>I am 20</em> (نه I have 20). ۲) شغل a می‌خواهد: <em>She is a doctor</em>. ۳) بعد از can و did فعل ساده: <em>I can swim / Did you go?</em> ۴) صفت جمع نمی‌شود: <em>big houses</em> (نه bigs). ۵) married با to می‌آید نه with: <em>married to Ali</em>. ۶) listen حرف اضافه می‌خواهد: <em>listen to music</em>. ۷) در انگلیسی فاعل حذف نمی‌شود: <em>It is raining</em> (نه Is raining).</p>',
      examples: [
        'I am twenty years old. — بیست سالم است. (درست)',
        'He is a good driver. — او رانندهٔ خوبی است. (درست)',
        'Did you see it? — دیدی‌اش؟ (درست: see ساده)',
        'Listen to the teacher. — به معلم گوش بده. (درست)',
        'It is cold today. — امروز سرد است. (درست: با It)',
        'She is married to Reza. — او با رضا ازدواج کرده است. (درست: to)',
      ],
      tips: [
        'هر وقت جمله‌ای ساختید، این چک‌لیست هفت‌تایی را مرور کنید.',
        'این خطاها طبیعی‌اند؛ حتی زبان‌آموزهای قوی هم اول راه همه را می‌کنند.',
      ],
    },
    media: {},
    estimatedMinutes: 9,
    tags: ['grammar', 'common-mistakes', 'review'],
  },
  {
    id: 'lesson-040',
    module: 'Speaking',
    cefrLevel: 'A1',
    title: 'جمع‌بندی A1: حالا چه کارهایی ازت برمی‌آید؟',
    order: 40,
    content: {
      theory:
        '<p>تبریک! اگر هر ۴۰ درس و فلش‌کارت‌ها را کار کرده باشید، به سطح <strong>A1 کامل</strong> رسیده‌اید. چک‌لیست رسمی «می‌توانم»های A1:</p><p>✔ خودم و دیگران را معرفی کنم و اطلاعات شخصی بدهم و بگیرم. ✔ دربارهٔ خانواده، خانه، شهر، شغل و کارهای روزانه‌ام حرف بزنم. ✔ بگویم الان چه کار می‌کنم، دیروز چه کردم و قرار است چه کار کنم. ✔ خرید کنم، قیمت بپرسم، در رستوران سفارش بدهم. ✔ آدرس بپرسم و راه را توضیح بدهم. ✔ اگر طرفم آرام و شمرده حرف بزند، گفت‌وگوی سادهٔ روزمره را پیش ببرم.</p><p>قدم بعد <strong>A2</strong> است: گذشتهٔ کامل‌تر و قصه‌های بلندتر، مقایسه و تجربه‌ها (present perfect)، مکالمه‌های سفر و هتل، و دو برابر شدن دایرهٔ واژگان. تا آن موقع، فلش‌کارت‌ها را با مرور زمان‌بندی‌شده (همین اپ) زنده نگه دارید؛ زبانِ تمرین‌نشده زود فراموش می‌شود.</p>',
      examples: [
        'Hello, my name is … and I am from … — معرفی کامل خودم.',
        'Yesterday I went to work and then I visited my friend. — تعریف دیروزم.',
        'I am going to travel next week. — برنامهٔ هفتهٔ آینده‌ام.',
        'Excuse me, how much is this? — خرید واقعی.',
        'Would you like to drink coffee with me? — دعوت دوستانه.',
        'I can speak English a little, and I learn every day. — جملهٔ امضای یک A1 موفق!',
      ],
      tips: [
        'هر «می‌توانم» بالا را با صدای بلند برای خودتان انجام دهید؛ هرجا گیر کردید، درسش را از فهرست پیدا و مرور کنید.',
        'از اینجا به بعد روزی ۱۰ دقیقه مرور فلش‌کارت، از هر کلاس تازه‌ای مفیدتر است.',
      ],
    },
    media: {},
    estimatedMinutes: 10,
    tags: ['speaking', 'review', 'can-do', 'a1-complete'],
  },
];
