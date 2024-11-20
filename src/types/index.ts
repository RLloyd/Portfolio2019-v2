export interface Project {
   title: string;
   description: string;
   technologies: string[];
   images: string[];
   role: string;
   duration: string;
   challenges?: string[];
   solutions?: string[];
 }

 export interface PortfolioCard {
   id: string;
   title: string;
   image: string;
   description: string;
   category: string;
   link: string;
   projects: Project[];
 }

 export interface PortfolioData {
   [key: string]: PortfolioCard;
 }