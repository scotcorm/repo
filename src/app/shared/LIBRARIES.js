import corm from '../assets/img/corm.png';
import lsu from '../assets/img/lsu.png';
import nucamp from '../assets/img/nucamp-logo.png';
import uw from '../assets/img/uw-logo.png';

export const LIBRARIES = [
  {
    id: 0,
    name: 'LSU',
    image: lsu,
    studied: 'English Literature',
    featured: false,
    description: 'English Literature with a focus on Shakespeare',
  },
  {
    id: 1,
    name: 'LSU',
    image: lsu,
    studied: 'History',
    featured: false,
    description: 'History with a focus on European and Asian History',
  },
  {
    id: 2,
    name: 'UW',
    image: uw,
    studied: 'Library and Information Science',
    featured: false,
    description: 'MLIS with a focus on Data Curation',
  },
  {
    id: 3,
    name: 'nucamp',
    image: nucamp,
    studied: 'Full stack web development',
    featured: true,
    description: 'Focused on sharing information using the MERN stack',
  },
];
