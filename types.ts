export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
}

export interface NavItem {
  label: string;
  href: string;
}