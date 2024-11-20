// src/data/portfolio.ts
import { PortfolioData } from '../types';

export interface Project {
   title: string;
   description: string;
   technologies: string[];
   images: string[];
   role: string;
   duration: string;
   challenges?: string[];
   solutions?: string[];
   outcome?: string;
 }

 export const portfolioData: PortfolioData = {
   illustrations: {
     id: 'illustrations',
     title: 'Digital Illustrations',
     image: '/images/illustrations.jpg',
     description: 'Creative digital illustrations and artwork',
     category: 'art',
     link: '/illustrations',
     projects: [
       {
         title: 'Fantasy Character Series',
         description: 'A series of character illustrations for fantasy gaming',
         technologies: ['Photoshop', 'Illustrator', 'Procreate'],
         images: ['/images/illustrations/character1.jpg', '/images/illustrations/character2.jpg'],
         role: 'Lead Illustrator',
         duration: '2018-2019',
         challenges: ['Complex lighting effects', 'Character anatomy'],
         solutions: ['Used reference materials', 'Implemented advanced brushwork techniques']
       }
     ]
   },
   inspirations: {
     id: 'inspirations',
     title: 'Concept Art',
     image: '/images/concepts.jpg',
     description: 'Concept art and inspirational pieces',
     category: 'concepts',
     link: '/inspirations',
     projects: [
       {
         title: 'Sci-Fi Environment Concepts',
         description: 'Futuristic environment designs for game development',
         technologies: ['Blender', 'ZBrush', 'Photoshop'],
         images: ['/images/inspirations/env1.jpg', '/images/inspirations/env2.jpg'],
         role: 'Concept Artist',
         duration: '2019',
         challenges: ['Scale representation', 'Atmospheric perspective'],
         solutions: ['Developed custom brushes', 'Created depth through lighting']
       }
     ]
   },
   'horizon-blue': {
     id: 'horizon-blue',
     title: 'Horizon Blue Healthcare',
     image: '/images/horizon.jpg',
     description: 'Healthcare web solutions',
     category: 'web',
     link: '/horizon-blue',
     projects: [
       {
         title: 'Patient Portal Redesign',
         description: 'Complete overhaul of the patient management system',
         technologies: ['Angular', 'Node.js', 'MongoDB'],
         images: ['/images/horizon/portal1.jpg', '/images/horizon/portal2.jpg'],
         role: 'Lead UI Developer',
         duration: '2019',
         challenges: ['HIPAA compliance', 'Legacy system integration'],
         solutions: ['Implemented secure authentication', 'Created migration tools']
       }
     ]
   },
   ownphones: {
     id: 'ownphones',
     title: 'OwnPhones Designer Collection',
     image: '/images/ownphones.jpg',
     description: 'Designer collection showcase',
     category: 'products',
     link: '/ownphones',
     projects: [
       {
         title: 'Custom Earphone Configurator',
         description: '3D customization platform for personalized earphones',
         technologies: ['Three.js', 'WebGL', 'React'],
         images: ['/images/ownphones/config1.jpg', '/images/ownphones/config2.jpg'],
         role: '3D Web Developer',
         duration: '2019',
         challenges: ['Real-time 3D rendering', 'Mobile performance'],
         solutions: ['Implemented LOD system', 'Optimized asset loading']
       }
     ]
   },
   vodka: {
     id: 'vodka',
     title: 'Vodka Branding',
     image: '/images/vodka.jpg',
     description: 'Elegant signature brands',
     category: 'products',
     link: '/vodka',
     projects: [
       {
         title: 'Premium Vodka Brand Identity',
         description: 'Brand development for luxury vodka products',
         technologies: ['Photoshop', 'Illustrator', 'InDesign'],
         images: ['/images/vodka/brand1.jpg', '/images/vodka/brand2.jpg'],
         role: 'Brand Designer',
         duration: '2019',
         challenges: ['Market differentiation', 'Premium positioning'],
         solutions: ['Developed unique bottle designs', 'Created cohesive brand story']
       }
     ]
   }
 };