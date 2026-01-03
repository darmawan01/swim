
export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  price: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Kids';
  image: string;
}

export interface RegistrationFormData {
  fullName: string;
  email: string;
  phone: string;
  courseId: string;
  message: string;
}

export interface ImprovementData {
  week: string;
  stamina: number;
  speed: number;
  technique: number;
}
