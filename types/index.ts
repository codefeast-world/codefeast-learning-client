import { StaticImageData } from 'next/image';
import { ReactNode } from "react";

export interface SocialIcon {
    icon: StaticImageData;
    link: string;
}

export interface ContactInfoItem {
    icon?: StaticImageData;
    socialIcons?: SocialIcon[];
    text: string;
    bgColor: string;
}

export interface SubjectOption {
    value: string;
    label: string;
}

export interface FAQItem {
    question: string;
    answer: string;
    topic: string;
}

export interface FAQSection {
    title: string;
    items: FAQItem[];
} 

export interface DeveloperProps {
    image: string;
    title: string;
    description: string;
}
export interface DeveloperCardProps extends DeveloperProps {
    titleClassName?: string; // Custom class for the title
    descriptionClassName?: string; // Custom class for the description
}

export interface BenefitCardProps {
    image: string;
    title: string;
}

export interface AccordionItemProps {
  title: ReactNode; // Accepts JSX or string
  content: ReactNode; // Accepts JSX or string
  isOpen: boolean;
  onClick: () => void;
}
export type Section = {
    id: string
    title: string
    content: string
    tag: string
}

export type SectionRefs = {
    [key: string]: HTMLDivElement | null
}
export interface SidebarProps {
    tags: string[];
    activeTag: string;
    setActiveTag: (tag: string) => void;
    scrollToSection: (sectionId: string) => void;
    sections: Section[];
}
export type Subject = "General Inquiry" | "Technical Support" | "Billing Question";

export interface FormData {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  subject: Subject
  message: string
}

export interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  phoneNumber?: string
  message?: string
}
export interface StagesInterviewProps {
    Heading: string;
    data: Array<{ image: string; title: string; description: string }>;
}