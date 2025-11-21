export interface NavigationItem {
  name: string;
  path: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  type: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  institution: string;
  content: string;
  image?: string;
}

export interface ContactForm {
  name: string;
  institution: string;
  email: string;
  phone: string;
  message: string;
}
