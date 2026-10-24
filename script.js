/* ========================================
   BILINGUAL PORTFOLIO — ENGLISH / ARABIC
   ======================================== */
const translations = {
  en: {
    skip: 'Skip to content', navAbout: 'About', navProjects: 'Projects', navWeb: 'Web Development', navSkills: 'Skills', navContact: 'Contact',
    downloadCV: 'Download CV', menu: 'Menu', close: 'Close', openToWork: '<span class="status-dot"></span> Open to entry-level opportunities', hello: "Hello, I'm", heroRole: 'Mechatronics Engineering Graduate',
    heroTags: 'Robotics <span>·</span> Automation <span>·</span> Embedded Systems <span>·</span> Web Development',
    heroDescription: 'I build practical solutions at the intersection of hardware, software, and intelligent systems, from robotics projects to WordPress websites.',
    exploreProjects: 'Explore my projects <span aria-hidden="true">↗</span>', profileStatus: '<span class="status-dot"></span> Mechatronics Engineer', currentFocus: 'CURRENT FOCUS', focusHeading: 'Turning ideas into working systems.',
    focusOne: '<span class="focus-icon">01</span><span>Robotics &amp; computer vision</span>', focusTwo: '<span class="focus-icon">02</span><span>Controls &amp; industrial automation</span>', focusThree: '<span class="focus-icon">03</span><span>Websites built with WordPress</span>',
    heroFooter: '<span>Latakia, Syria</span><span>Mechatronics · Web</span>', proofOne: 'Face recognition accuracy<br>in thesis project', proofTwo: 'Robotics projects<br>completed during studies', proofThree: 'Computers repaired<br>in hardware support role', proofFour: 'Technical worlds<br>engineering + web',
    aboutEyebrow: 'A LITTLE ABOUT ME', aboutHeading: 'Curious by nature.<br><span class="gradient-text">Practical by design.</span>', aboutLead: "I'm a Mechatronics Engineering graduate from Latakia University, interested in robotics, control systems, embedded development, and automation.",
    aboutDetail: 'My academic work brought together ESP32-CAM, computer vision, GPS, RFID, and control logic. Alongside engineering, I have experience with WordPress website development and enjoy making digital experiences clear and useful.',
    educationDegree: 'Bachelor in Electrical and Mechanical Engineering', educationMajor: 'Major in Mechatronics Engineering · Latakia University', educationDate: 'October 2021 - June 2026', wordpressDegree: 'WordPress Website Development', wordpressMajor: 'Dollani Bootcamp · WordPress, Elementor, WooCommerce, ACF and CSS', wordpressDate: 'September 2026 - December 2026',
    engineeringEyebrow: 'ENGINEERING WORK', projectsHeading: 'Projects that <span class="gradient-text">move ideas forward.</span>', projectsCount: '02 featured projects',
    attendanceLabel: 'ROBOTICS / COMPUTER VISION', attendanceMeta: '01 / THESIS PROJECT', attendanceTitle: 'Attendance Tracking Robot', attendanceDescription: 'An autonomous 4-wheeled robot that follows a line route between offices, stops at each one to scan faces with an ESP32-CAM + OpenFace pipeline, and logs attendance with timestamps.', attendanceDetails: 'Built on an Arduino Uno with an L298D motor shield, TCRT5000 line sensors and an HC-SR04 obstacle sensor. Faces are detected with SSD and converted to 128-D embeddings via OpenFace, then matched by cosine similarity against a JSON employee database. Navigation uses fuzzy logic and magnetic stop markers, and a Tkinter GUI lets admins manage profiles and review the attendance log. Tested to 92% recognition accuracy under normal office lighting.',
    deliveryLabel: 'AUTONOMY / NAVIGATION', deliveryMeta: '02 / ROBOTICS', deliveryTitle: 'StoreBot — Store Delivery Robot', deliveryDescription: 'A mall delivery robot that carries products from the store to the customer, coordinated by a web page and database, with GPS navigation, obstacle avoidance, and RFID access control.', deliveryDetails: 'An ESP32 handles connectivity and forwards client requests to an Arduino Mega, which drives the motors and reads ultrasonic, tilt, flame, and Ublox NEO GPS sensors. A web page and database assign an available robot or ask the client to wait 30 minutes, while an RFID + servo mechanism releases the purchase only for authorized cards. The project vision proposes upgrading to a Raspberry Pi with ROS, computer vision, and solar charging.',
    projectOverview1: 'Project overview <span class="project-details-icon" aria-hidden="true">＋</span>', projectOverview2: 'Project overview <span class="project-details-icon" aria-hidden="true">＋</span>',
    webEyebrow: 'MY WEB DEVELOPMENT WORK', webHeading: 'Web <span class="gradient-text">Projects</span>', webDescription: 'Websites and digital experiences built with modern web technologies.', webOverlay: 'WordPress Project', webCategory: 'WEBSITE DEVELOPMENT', webProjectTitle: 'Ramita Tour', webProjectDescription: 'A tourism website developed with WordPress, featuring reusable content layouts and dynamic Courses and Testimonials sections.', webProjectLink: 'View GitHub Profile <span aria-hidden="true">↗</span>',
    skillsEyebrow: 'TOOLKIT', skillsHeading: 'Skills I bring <span class="gradient-text">to the table.</span>', skillOne: 'Programming &amp; embedded', skillTwo: 'Robotics &amp; automation', skillThree: 'AI &amp; computer vision', skillFour: 'Web &amp; technical tools',
    contactEyebrow: 'HAVE A ROLE OR PROJECT IN MIND?', contactHeading: `Let's build something<br><span class="gradient-text">that works.</span>`, contactDescription: "I'm interested in entry-level opportunities in robotics, controls, and automation, as well as relevant web development projects.", emailMe: 'Email me <span aria-hidden="true">↗</span>', footerTagline: 'Designed to connect engineering with the digital world.', backToTop: 'Back to top ↑',
    mainNavigation: 'Main navigation', brandHome: 'Ahmad Yamen Radwan home', professionalFocus: 'Professional focus', profileAlt: 'Ahmad Yamen Radwan', webImageAlt: 'Ramita Tour website preview'
  },
  ar: {
    skip: 'انتقل إلى المحتوى', navAbout: 'نبذة عني', navProjects: 'المشاريع', navWeb: 'تطوير الويب', navSkills: 'المهارات', navContact: 'تواصل معي',
    downloadCV: 'تحميل السيرة الذاتية', menu: 'القائمة', close: 'إغلاق', openToWork: '<span class="status-dot"></span> متاح للفرص الوظيفية للمبتدئين', hello: 'مرحباً، أنا', heroRole: 'خريج هندسة الميكاترونيك',
    heroTags: 'الروبوتات <span>·</span> الأتمتة <span>·</span> الأنظمة المضمنة <span>·</span> تطوير الويب',
    heroDescription: 'أطوّر حلولاً عملية تجمع بين الأجهزة والبرمجيات والأنظمة الذكية، بدءاً من مشاريع الروبوتات وصولاً إلى مواقع ووردبريس.',
    exploreProjects: 'استكشف مشاريعي <span aria-hidden="true">↗</span>', profileStatus: '<span class="status-dot"></span> مهندس ميكاترونيك', currentFocus: 'مجالات التركيز الحالية', focusHeading: 'أحوّل الأفكار إلى أنظمة عملية.',
    focusOne: '<span class="focus-icon">01</span><span>الروبوتات والرؤية الحاسوبية</span>', focusTwo: '<span class="focus-icon">02</span><span>أنظمة التحكم والأتمتة الصناعية</span>', focusThree: '<span class="focus-icon">03</span><span>مواقع مبنية باستخدام ووردبريس</span>',
    heroFooter: '<span>اللاذقية، سوريا</span><span>الميكاترونيك · الويب</span>', proofOne: 'دقة التعرّف على الوجوه<br>في مشروع التخرج', proofTwo: 'مشاريع روبوتات<br>أُنجزت خلال الدراسة', proofThree: 'حاسوب تم إصلاحه<br>ضمن الدعم الفني', proofFour: 'مجالان تقنيان<br>الهندسة والويب',
    aboutEyebrow: 'نبذة مختصرة عني', aboutHeading: 'فضولي بطبيعتي.<br><span class="gradient-text">عملي في تصميم الحلول.</span>', aboutLead: 'أنا خريج هندسة الميكاترونيك من جامعة اللاذقية، وأهتم بالروبوتات وأنظمة التحكم وتطوير الأنظمة المضمنة والأتمتة.',
    aboutDetail: 'جمعت مشاريعي الأكاديمية بين ESP32-CAM والرؤية الحاسوبية ونظام تحديد المواقع GPS وتقنية RFID ومنطق التحكم. وإلى جانب الهندسة، لدي خبرة في تطوير مواقع ووردبريس وأستمتع بتصميم تجارب رقمية واضحة ومفيدة.',
    educationDegree: 'بكالوريوس في الهندسة الكهربائية والميكانيكية', educationMajor: 'اختصاص هندسة الميكاترونيك · جامعة اللاذقية', educationDate: 'أكتوبر 2021 - يونيو 2026', wordpressDegree: 'تطوير مواقع ووردبريس', wordpressMajor: 'معسكر دولاني التدريبي · WordPress وElementor وWooCommerce وACF وCSS', wordpressDate: 'سبتمبر 2026 - ديسمبر 2026',
    engineeringEyebrow: 'المشاريع الهندسية', projectsHeading: 'مشاريع <span class="gradient-text">تحوّل الأفكار إلى واقع.</span>', projectsCount: 'مشروعان مميزان',
    attendanceLabel: 'الروبوتات / الرؤية الحاسوبية', attendanceMeta: '01 / مشروع التخرج', attendanceTitle: 'روبوت تتبّع الحضور', attendanceDescription: 'روبوت ذاتي الحركة بأربع عجلات يتبع مساراً محدداً بين المكاتب، ويتوقف عند كل مكتب لمسح الوجوه باستخدام ESP32-CAM وOpenFace، ثم يسجّل الحضور مع الطوابع الزمنية.', attendanceDetails: 'يعتمد المشروع على Arduino Uno مع درع قيادة المحركات L298D وحساسات تتبّع الخط TCRT5000 وحساس العوائق HC-SR04. تُكتشف الوجوه باستخدام SSD وتُحوّل إلى متجهات تمثيل ذات 128 بُعداً عبر OpenFace، ثم تُطابق باستخدام التشابه الكوني مع قاعدة بيانات الموظفين بصيغة JSON. يستخدم التنقّل المنطق الضبابي وعلامات توقف مغناطيسية، وتتيح واجهة Tkinter للمسؤولين إدارة الملفات ومراجعة سجل الحضور. بلغت دقة التعرّف المختبرة 92% في ظروف الإضاءة المكتبية المعتادة.',
    deliveryLabel: 'الاستقلالية / الملاحة', deliveryMeta: '02 / الروبوتات', deliveryTitle: 'StoreBot — روبوت توصيل داخل المتاجر', deliveryDescription: 'روبوت توصيل في مركز تجاري ينقل المنتجات من المتجر إلى العميل، وتنسّق عمله صفحة ويب وقاعدة بيانات، مع ملاحة GPS وتجنّب للعوائق والتحكم في الوصول باستخدام RFID.', deliveryDetails: 'يتولى ESP32 الاتصال وإرسال طلبات العملاء إلى Arduino Mega، الذي يتحكم بالمحركات ويقرأ بيانات حساسات الموجات فوق الصوتية والميل واللهب ونظام تحديد المواقع Ublox NEO. تُعيّن صفحة ويب وقاعدة بيانات روبوتاً متاحاً أو تطلب من العميل الانتظار 30 دقيقة، بينما تتيح آلية RFID ومحرك مؤازر استلام المشتريات للبطاقات المصرّح بها فقط. وتتضمن الرؤية المستقبلية تطوير المشروع باستخدام Raspberry Pi وROS والرؤية الحاسوبية والشحن بالطاقة الشمسية.',
    projectOverview1: 'نظرة عامة على المشروع <span class="project-details-icon" aria-hidden="true">＋</span>', projectOverview2: 'نظرة عامة على المشروع <span class="project-details-icon" aria-hidden="true">＋</span>',
    webEyebrow: 'أعمالي في تطوير الويب', webHeading: 'مشاريع <span class="gradient-text">الويب</span>', webDescription: 'مواقع وتجارب رقمية طُوّرت باستخدام تقنيات ويب حديثة.', webOverlay: 'مشروع ووردبريس', webCategory: 'تطوير المواقع', webProjectTitle: 'راميتا تور', webProjectDescription: 'موقع سياحي طُوّر باستخدام ووردبريس، ويضم قوالب محتوى قابلة لإعادة الاستخدام وأقساماً ديناميكية للدورات وآراء العملاء.', webProjectLink: 'عرض ملفي على GitHub <span aria-hidden="true">↗</span>',
    skillsEyebrow: 'مجموعة الأدوات', skillsHeading: 'المهارات التي <span class="gradient-text">أقدّمها.</span>', skillOne: 'البرمجة والأنظمة المضمنة', skillTwo: 'الروبوتات والأتمتة', skillThree: 'الذكاء الاصطناعي والرؤية الحاسوبية', skillFour: 'الويب والأدوات التقنية',
    contactEyebrow: 'هل لديك فرصة عمل أو مشروع؟', contactHeading: 'لنبنِ شيئاً<br><span class="gradient-text">يعمل بكفاءة.</span>', contactDescription: 'أهتم بالفرص الوظيفية للمبتدئين في الروبوتات وأنظمة التحكم والأتمتة، إضافة إلى مشاريع تطوير الويب ذات الصلة.', emailMe: 'راسلني عبر البريد <span aria-hidden="true">↗</span>', footerTagline: 'تصميم يربط الهندسة بالعالم الرقمي.', backToTop: 'العودة إلى الأعلى ↑',
    mainNavigation: 'التنقّل الرئيسي', brandHome: 'الصفحة الرئيسية لأحمد يامن رضوان', professionalFocus: 'مجالات التركيز المهني', profileAlt: 'أحمد يامن رضوان', webImageAlt: 'معاينة موقع راميتا تور'
  }
};

const languageToggle = document.querySelector('#language-toggle');
let currentLanguage = 'en';

function applyLanguage(language) {
  currentLanguage = language;
  const t = translations[language];
  document.documentElement.lang = language;
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.toggle('arabic', language === 'ar');

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (t[key] !== undefined) element.innerHTML = t[key];
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    const key = element.dataset.i18nAria;
    if (t[key] !== undefined) element.setAttribute('aria-label', t[key]);
  });

  document.querySelectorAll('.cv-link').forEach((link) => {
    link.innerHTML = `${t.downloadCV} <span aria-hidden="true">↓</span>`;
  });
  if (languageToggle) {
    languageToggle.textContent = language === 'en' ? 'العربية' : 'English';
    languageToggle.setAttribute('aria-label', language === 'en' ? 'Switch to Arabic' : 'Switch to English');
  }
  const menuButton = document.querySelector('.menu-toggle');
  if (menuButton) {
    menuButton.textContent = menuButton.getAttribute('aria-expanded') === 'true' ? t.close : t.menu;
  }
  document.querySelectorAll('.project-details-toggle').forEach((button, index) => {
    const panel = document.getElementById(button.getAttribute('aria-controls'));
    const isOpen = button.getAttribute('aria-expanded') === 'true';
    button.innerHTML = `${t[`projectOverview${index + 1}`]}`;
    button.setAttribute('aria-expanded', String(isOpen));
    if (panel) panel.classList.toggle('is-open', isOpen);
  });
}

if (languageToggle) {
  languageToggle.addEventListener('click', () => {
    applyLanguage(currentLanguage === 'en' ? 'ar' : 'en');
  });
}

/* MOBILE NAVIGATION */
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.textContent = isOpen ? translations[currentLanguage].close : translations[currentLanguage].menu;
  });
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.textContent = translations[currentLanguage].menu;
    });
  });
}

/* PROJECT OVERVIEW TOGGLES */
document.querySelectorAll('.project-details-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const panel = document.getElementById(button.getAttribute('aria-controls'));
    if (!panel) return;
    const isOpen = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!isOpen));
    panel.classList.toggle('is-open', !isOpen);
  });
});

/* SCROLL REVEAL ANIMATIONS */
const sections = document.querySelectorAll('.section, .proof-strip, .contact-inner');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  sections.forEach((section) => {
    section.classList.add('reveal');
    observer.observe(section);
  });
}
