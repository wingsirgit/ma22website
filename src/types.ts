export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Country {
  id: string;
  name: string;
  flag: string;
  popularCourses: string[];
  visaSuccessRate: string;
  bgGradient: string;
  description: string;
  keyUniversities: string;
}

export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  description: string;
  avatarUrl: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
}

export interface Testimonial {
  id: string;
  studentName: string;
  country: string;
  university: string;
  quote: string;
  visaType: string;
  rating: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}
