import { Service, Country, TeamMember, Partner, Testimonial, FAQ } from "./types";

export const SERVICES_DATA: Service[] = [
  {
    id: "counselling",
    title: "Study Abroad Counselling",
    description: "Personalized profiling and career maps guided by certified global counsellors.",
    icon: "Compass",
  },
  {
    id: "selection",
    title: "University Selection",
    description: "Strategic matching with top-tier universities based on grades, budget, and ambitions.",
    icon: "GraduationCap",
  },
  {
    id: "admission",
    title: "Admission Assistance",
    description: "End-to-end application guidance, streamlined submission, and offer tracking support.",
    icon: "FileCheck",
  },
  {
    id: "scholarship",
    title: "Scholarship Guidance",
    description: "Identification and application support for Merit, Need-based, and Country-specific grants.",
    icon: "Award",
  },
  {
    id: "sop",
    title: "SOP & Documentation",
    description: "Professional refining of Statement of Purpose, letters of recommendation, and academic CVs.",
    icon: "FileText",
  },
  {
    id: "visa",
    title: "Student Visa Assistance",
    description: "Comprehensive visa file preparation, mock interviews, and trusted filing support.",
    icon: "Stamp",
  },
  {
    id: "canada-immigration",
    title: "Canada Immigration Support",
    description: "Legal strength procedures backed by a Toronto-based attorney firm for study permits.",
    icon: "ShieldAlert",
  },
  {
    id: "accommodation",
    title: "Accommodation Assistance",
    description: "Trusted support in securing comfortable, safe, and cost-effective student housing options.",
    icon: "Home",
  },
  {
    id: "pickup",
    title: "Airport Pickup Guidance",
    description: "Coordinating warm welcomes, essential airport transits, and landing-day support.",
    icon: "PlaneTakeoff",
  },
  {
    id: "career",
    title: "Career Pathway Planning",
    description: "Identifying future-proof international careers and post-study work authorization streams.",
    icon: "TrendingUp",
  },
];

export const COUNTRIES_DATA: Country[] = [
  {
    id: "usa",
    name: "USA",
    flag: "🇺🇸",
    popularCourses: ["STEM Courses", "MBA", "Computer Science", "Finance"],
    visaSuccessRate: "97%",
    bgGradient: "from-blue-900/60 to-amber-900/40",
    description: "Access Ivy Leagues, Silicon Valley networks, and extensive OPT (Optional Practical Training) avenues.",
    keyUniversities: "Stanford, MIT, NYU, USC, Boston University",
  },
  {
    id: "canada",
    name: "Canada",
    flag: "🇨🇦",
    popularCourses: ["Data Science", "Engineering", "Business Analytics", "IT"],
    visaSuccessRate: "98%",
    bgGradient: "from-red-950/60 to-amber-900/40",
    description: "Supported by a Toronto attorney firm. Post-Graduation Work Permit (PGWP) and quick PR transition pathways.",
    keyUniversities: "U of Toronto, UBC, McGill, Waterloo, Senaca",
  },
  {
    id: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    popularCourses: ["Hospitality", "Finance", "Law", "Medicine & Public Health"],
    visaSuccessRate: "96%",
    bgGradient: "from-indigo-900/60 to-amber-950/40",
    description: "UK-certified counselling. Dynamic 1-Year Masters & 2-Year Graduate Immigration Route (PSW).",
    keyUniversities: "Oxford, Cambridge, LSE, Imperial, Manchester",
  },
  {
    id: "australia",
    name: "Australia",
    flag: "🇦🇺",
    popularCourses: ["Civil Eng.", "Nursing & Medicine", "Accounting", "Cybersecurity"],
    visaSuccessRate: "95%",
    bgGradient: "from-sky-950/60 to-yellow-950/40",
    description: "Warm climate, amazing lifestyle, generous post-study work opportunities, and Australia PR Pathways.",
    keyUniversities: "U of Melbourne, Sydney Uni, Monash, UNSW, ANU",
  },
  {
    id: "germany",
    name: "Germany",
    flag: "🇩🇪",
    popularCourses: ["Automotive Eng.", "Renewable Energy", "Robotics", "Physics"],
    visaSuccessRate: "94%",
    bgGradient: "from-zinc-900/70 to-amber-900/30",
    description: "Tuition-free world-class education with highly sought-after industrial internships and language benefits.",
    keyUniversities: "TUM Munich, RWTH Aachen, Heidelberg, Humboldt",
  },
  {
    id: "france",
    name: "France",
    flag: "🇫🇷",
    popularCourses: ["Luxury Brand Mgmt", "Culinary Arts", "Fashion Design", "Aeronautics"],
    visaSuccessRate: "93%",
    bgGradient: "from-blue-950/70 to-red-950/30",
    description: "Rich cultural environment, top elite Grande Écoles business schools, and highly integrated EU networks.",
    keyUniversities: "HEC Paris, INSEAD, Sorbonne, Sciences Po",
  },
  {
    id: "europe",
    name: "Europe (Schengen)",
    flag: "🇪🇺",
    popularCourses: ["International Relations", "Global Business", "Design", "Logistics"],
    visaSuccessRate: "95%",
    bgGradient: "from-purple-950/60 to-emerald-950/40",
    description: "Study across Schengen zones with high English-taught programs quality, affordable fees, and ease of travel.",
    keyUniversities: "KU Leuven, TU Delft, ETH Zurich, Trinity College Dublin",
  },
];

export const TEAM_DATA: TeamMember[] = [
  {
    id: "rk-sharma",
    name: "R.K. SHARMA",
    designation: "Managing Director",
    description: "A highly respected academician and administrator with decades of educational experience. He guides all departments with wisdom, professionalism, and dedication toward student success.",
    avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300&h=300",
  },
  {
    id: "bs-kastooriya",
    name: "B.S. KASTOORIYA",
    designation: "Legal Head India",
    description: "A senior advocate and legal expert guiding students and families with trusted legal assistance related to overseas education and documentation procedures.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300",
  },
  {
    id: "sk-sharma",
    name: "S.K. SHARMA",
    designation: "Founder",
    description: "Visionary founder committed to creating accessible international education opportunities for Indian students through ethical counselling and trusted support systems.",
    avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300&h=300",
  },
  {
    id: "abha-sharma",
    name: "MRS. ABHA SHARMA",
    designation: "CEO",
    description: "An inspiring leader managing operations, student success initiatives, and international coordination with professionalism and dedication.",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300",
  },
  {
    id: "surekha-bangia",
    name: "MRS. SUREKHA BANGIA",
    designation: "Head Counsellor UK",
    description: "A UK-certified counselling expert helping students choose the right universities, courses, and career pathways with confidence.",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300&h=300",
  },
  {
    id: "vaishali-sharma",
    name: "VAISHALI SHARMA",
    designation: "Legal Advisor International",
    description: "Providing international legal and immigration guidance for students pursuing global education opportunities.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300&h=300",
  },
  {
    id: "sarthak-sharma",
    name: "SARTHAK SHARMA",
    designation: "Head Global Career Pathways",
    description: "Helping students identify future-ready global career opportunities, international pathways, and long-term professional growth strategies.",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300",
  },
];

export const PARTNERS_DATA: Partner[] = [
  { id: "applyboard", name: "ApplyBoard", logo: "🤝" },
  { id: "kc-overseas", name: "KC Overseas Education", logo: "🎓" },
  { id: "adventus", name: "Adventus.io", logo: "🌐" },
  { id: "studyreach", name: "StudyReach.com", logo: "✈️" },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "1",
    studentName: "Priyesh Ranjan",
    country: "Canada",
    university: "University of Waterloo",
    quote: "Backed by the Toronto-based attorneys and Wingsir team, my Study Permit was approved in record time after a previous rejection from another agency. Ethical and flawless counselling!",
    visaType: "Canadian Study Visa",
    rating: 5,
  },
  {
    id: "2",
    studentName: "Ananya Iyer",
    country: "USA",
    university: "Boston University",
    quote: "The personalized SOP refining and extensive mock interviews prepared me thoroughly. I received an admissions offer with a $15k merit scholarship! Exceptional service.",
    visaType: "F-1 Student Visa",
    rating: 5,
  },
  {
    id: "3",
    studentName: "Gurpreet Singh",
    country: "United Kingdom",
    university: "University of Manchester",
    quote: "With Mrs. Surekha's UK training insights, selecting the perfect course and accommodation was super simple. The system feels completely premium and transparent.",
    visaType: "Tier 4 Student Visa",
    rating: 5,
  },
  {
    id: "4",
    studentName: "Meenakshi Joshi",
    country: "Australia",
    university: "University of Sydney",
    quote: "Wingsir guided me through the entire Australian PR pathways and visa requirements with precision. I am permanently settled here and working as an IT professional.",
    visaType: "Subclass 500 Visa & PR",
    rating: 5,
  },
];

export const FAQS_DATA: FAQ[] = [
  {
    id: "faq-1",
    question: "How does WINGSIR-ABROAD LLP ensure higher visa success rates?",
    answer: "Our team consists of UK-certified counsellors and is mentored by Toronto-based immigration attorneys. We prepare robust documentation, perform visa mock interviews, and structure your Statement of Purpose (SOP) with expert legal-strength logic to eliminate gaps that could trigger rejections.",
  },
  {
    id: "faq-2",
    question: "Do you assist with accommodation and airport pickups abroad?",
    answer: "Yes, our global network helps students secure safe, affordable accommodations close to universities, and we coordinate landing support, airport pickup, setting up local bank accounts, and local SIM registrations.",
  },
  {
    id: "faq-3",
    question: "Where are your physical head office and branch locations?",
    answer: "Our main headquarters is located in Delhi NCR, with branches in Faridabad and Agra to provide streamlined walk-in counselling, documentation checks, and interview preps.",
  },
  {
    id: "faq-4",
    question: "What platforms do you aggregate for program selection?",
    answer: "We partner with leading global aggregators – ApplyBoard, KC Overseas, Adventus.io, and StudyReach.com. This gives our students integrated access to over 50,000+ courses and thousands of high-ranking universities under a single trusted umbrella.",
  },
  {
    id: "faq-5",
    question: "Is there any charge for the initial consultation?",
    answer: "No, the initial profiling, university matching counselling session, and general visa check is 100% free of charge. You can book an appointment live on our platform or contact us via WhatsApp to speak with a certified advisor.",
  },
];
