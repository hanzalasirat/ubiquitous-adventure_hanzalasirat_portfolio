// Personal facts and project descriptions retained from the original portfolio.
// Add verified links, dates and documents here when supplied by the owner.
export const profile = {
  name: "Hanzala Sirat",
  nameFa: "حنظله سیرت",
  email: "hanzalasirat4@gmail.com",
  phone: "0703064689",
  github: "https://github.com/hanzalasirat",
  location: { en: "Kabul, Afghanistan", fa: "کابل، افغانستان" },
  resumeUrl: null,
  linkedin: null,
};
export const skillGroups = [
  {
    name: { en: "Frontend", fa: "فرانت‌اند" },
    items: ["React", "JavaScript", "HTML5", "CSS3"],
  },
  {
    name: { en: "Backend", fa: "بک‌اند" },
    items: ["PHP", "Laravel", "Python", "Node.js"],
  },
  {
    name: { en: "Databases", fa: "دیتابیس‌ها" },
    items: ["MySQL", "PostgreSQL", "Oracle", "MongoDB"],
  },
  {
    name: { en: "Workflow & tools", fa: "ابزارها و روش کار" },
    items: ["Git", "GitHub", "Networking", "ICDL"],
  },
];
export const projects = [
  {
    id: "tailor-management",
    number: "01",
    category: "business",
    color: "mint",
    title: { en: "Tailor Management System", fa: "سیستم مدیریت خیاطی" },
    description: {
      en: "Bringing orders, measurements and customer records into one organized workspace.",
      fa: "تنظیم سفارش‌ها، اندازه‌ها و معلومات مشتریان در یک محیط منظم.",
    },
    problem: {
      en: "Tailoring businesses need to keep customer measurements, orders and stock organized.",
      fa: "خیاطی‌ها به تنظیم اندازه‌های مشتریان، سفارش‌ها و موجودی نیاز دارند.",
    },
    approach: {
      en: "The project brings customer profiles, measurement tracking, inventory and billing into a single management system.",
      fa: "این پروژه پروفایل مشتری، ثبت اندازه‌ها، موجودی و بل‌ها را در یک سیستم مدیریت گردهم می‌آورد.",
    },
    features: {
      en: [
        "Order management",
        "Customer profiles & measurements",
        "Inventory control",
        "Billing & invoicing",
      ],
      fa: [
        "مدیریت سفارش‌ها",
        "پروفایل و اندازه‌های مشتری",
        "کنترول موجودی",
        "بل و صورت‌حساب",
      ],
    },
    stack: ["React", "Node.js", "MongoDB", "Express"],
    status: "completed",
    source: null as string | null,
    demo: null as string | null,
  },
  {
    id: "school-management",
    number: "02",
    category: "education",
    color: "lavender",
    title: { en: "School Management System", fa: "سیستم مدیریت مکتب" },
    description: {
      en: "A shared platform for students, teachers and everyday school administration.",
      fa: "یک پلتفرم مشترک برای شاگردان، معلمان و امور اداری مکتب.",
    },
    problem: {
      en: "Student records, attendance, grades and timetables need a consistent place to be managed.",
      fa: "معلومات شاگردان، حاضری، نمرات و تقسیم اوقات به مدیریت هماهنگ نیاز دارند.",
    },
    approach: {
      en: "An education platform with student and teacher dashboards, attendance tracking and timetable tools.",
      fa: "پلتفرم آموزشی با داشبورد شاگرد و معلم، ثبت حاضری و ابزار تقسیم اوقات.",
    },
    features: {
      en: [
        "Student portal",
        "Teacher dashboard",
        "Grades & attendance",
        "Timetable scheduling",
      ],
      fa: ["پورتال شاگرد", "داشبورد معلم", "نمرات و حاضری", "تقسیم اوقات"],
    },
    stack: ["Python", "Django", "PostgreSQL", "Bootstrap"],
    status: "progress",
    source: null as string | null,
    demo: null as string | null,
  },
  {
    id: "hospital-management",
    number: "03",
    category: "health",
    color: "peach",
    title: { en: "Hospital Management System", fa: "سیستم مدیریت شفاخانه" },
    description: {
      en: "Connecting patient records, appointments and hospital operations.",
      fa: "وصل‌کردن دوسیه‌های مریضان، وقت ملاقات و امور شفاخانه.",
    },
    problem: {
      en: "Hospital teams need an organized view of patient records, appointments and operations.",
      fa: "تیم‌های شفاخانه به دید منظم از دوسیه مریضان، ملاقات‌ها و امور کاری نیاز دارند.",
    },
    approach: {
      en: "A management application covering patient records, staff, pharmacy, appointments and billing.",
      fa: "برنامه مدیریتی برای دوسیه مریضان، کارمندان، دواخانه، ملاقات‌ها و حساب‌ها.",
    },
    features: {
      en: [
        "Patient records",
        "Appointment system",
        "Staff & pharmacy management",
        "Billing",
      ],
      fa: [
        "دوسیه مریضان",
        "سیستم وقت ملاقات",
        "مدیریت کارمندان و دواخانه",
        "حساب‌ها",
      ],
    },
    stack: ["Java", "Spring Boot", "MySQL", "React"],
    status: "completed",
    source: null as string | null,
    demo: null as string | null,
  },
];

// Populate these only with owner-approved facts and client feedback.
export const timeline: import("./types").TimelineItem[] = [];
export const testimonials: import("./types").Testimonial[] = [];
export const settings = {
  cvUrl: "" as string,
  portraitUrl: "" as string,
  contactEndpoint: process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || "",
};
