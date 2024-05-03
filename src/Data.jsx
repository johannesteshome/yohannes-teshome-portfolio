import Project1 from './assets/depUI.png';
import Project2 from './assets/ticktime-banner.png';
import Project3 from './assets/dashtrack.jpg';
import Project4 from './assets/project4.jpeg';
import Project5 from './assets/project5.jpg';
import Project6 from './assets/project6.jpg';

import Testimonial1 from './assets/testimonial1.jpg';
import Testimonial2 from './assets/testimonial2.jpg';
import Testimonial3 from './assets/testimonial3.jpg';
import Testimonial4 from './assets/testimonial4.jpg';
import Testimonial5 from './assets/testimonial5.jpg';

export const links = [
  {
    name: 'Home',
    path: 'home',
  },
  {
    name: 'Services',
    path: 'services',
  },
  {
    name: 'Skills',
    path: 'skills',
  },
  {
    name: 'Works',
    path: 'work',
  },
  {
    name: 'Resume',
    path: 'resume',
  },
  // {
  //   name: 'Testimonials',
  //   path: 'testimonial',
  // },
  // {
  //   name: 'Pricing',
  //   path: 'pricing',
  // },
  // {
  //   name: 'Blog',
  //   path: 'blog',
  // },
  {
    name: 'Contact',
    path: 'contact',
  },
];

export const services = [
  {
    id: 1,
    name: "Full-stack Web Development",
    title: "Web Design & Developemnt",
    description:
      "Web designers craft the overall vision & plan for a website layout. They create a website from the ground up.  ",
  },
  {
    id: 2,
    name: " UI/UX Design ",
    title: " Web & Mobile Apps Design ",
    description:
      " Designing the user interface and user experience for mobile and web applications. ",
  },
  {
    id: 3,
    name: " Data Analytics ",
    title: " Python Scripting ",
    description:
      " Python scripting for data analytics, data analysis and data visualization. ",
  },
  {
    id: 4,
    name: " Desktop App Development ",
    title: " Windows Desktop App ",
    description:
      "Creating desktop applications for Windows with tools such as JavaFX and Electron JS.",
  }
];

export const skills = [
  {
    id: 1,
    name: 'JavaScript',
    percentage: 75,
    description:
      'Advanced skills of JavaScript. I have primarily used JavaScript for web development with web frameworks such as React, Vue, and Angular.',
  },

  {
    id: 2,
    name: 'React',
    percentage: 75,
    description:
      'My go-to and most used JavaScript framework for web development. I have build most of my projects with React being my front-end choice.',
  },

  {
    id: 3,
    name: 'NodeJS',
    percentage: 90,
    description:
      'For backend development, I use NodeJS with frameworks such as expressjs, and sequelize along with MongoDB as the database.',
  },

  {
    id: 4,
    name: 'Python',
    percentage: 75,
    description:
      'I use Python for most of my Data Science projects. I have used it for web scraping, data analysis and also data structures and algorithms in LeetCode.',
  },

  {
    id: 5,
    name: 'TailwindCSS',
    percentage: 70,
    description:
      'I use TailwindCSS for most of my web development projects. I have used it for building responsive websites.',
  },

  {
    id: 6,
    name: 'Figma',
    percentage: 80,
    description:
      'My first choice in UI/UX design. To build website and App designs and prototypes before the actual development begins.',
  },
];

export const projects = [
  {
    id: 1,
    img: Project1,
    category: 'UI UX Design',
    title: 'University Depratment UI',
    description:
      'User Interface design done for our university software engineering department using AdobeXD.',
  },
  {
    id: 2,
    img: Project2,
    category: 'Development',
    title: 'Ticktime',
    description:
      'A simple web application to track attendance for teachers and students. This project was built using MERN tech stack and tailwind as the CSS framework.',
  },
  {
    id: 3,
    img: Project3,
    category: 'Development',
    title: 'Dashtrack',
    description:
      'A task management system that allows team to create and manage project. This project was built with MERN stack along with socket.io for live chat among team members, calendar view and more.',
  },
  // {
  //   id: 4,
  //   img: Project4,
  //   category: 'Photography',
  //   title: 'Mozar',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  // },
  // {
  //   id: 5,
  //   img: Project5,
  //   category: 'Development',
  //   title: 'Stay Fit',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  // },
  // {
  //   id: 6,
  //   img: Project6,
  //   category: 'Branding',
  //   title: 'Kana',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  // },
];

export const cv = [
  {
    id: 1,
    title: 'Addis Ababa Science & Technology Univeristy',
    subtitle: 'Software Engineering',
    date: '2019 - 2024',
    description:
      'With relevant Coursework such as Data Structures and Algorithms, Machine Learning, Operating Systems, and Distributed Systems',
    category: 'education',
  },

  {
    id: 2,
    title: 'Africa 2 Silicon Valley',
    subtitle: 'Coding Academy',
    date: '2022 - 2024',
    description:
      'A2SV upskills potential African students, connects them with top tech companies and creates digital solutions to urgent systems with 50+ students at top-tech companies such as Google, Bloomberg, Databricks, LinkedIn, and Square.',
    category: 'education',
  },

  {
    id: 3,
    title: 'ALX Ethiopia',
    subtitle: 'Online Coding School',
    date: '2023 - 2024',
    description:
      'Learnt about Data Science, Machine Learning, and Artificial Intelligence through their online learning program.',
    category: 'education',
  },

  {
    id: 4,
    title: 'Front-end Web Developer',
    subtitle: 'Eskalate',
    date: '2024 - PRESENT',
    description:
      'Worked as a front-end web developer using ReactJS and NEXT in a project.',
    category: 'experience',
  },

  {
    id: 5,
    title: 'UI / UX Designer',
    subtitle: 'Africa 2 Silicon Valley',
    date: '2024',
    description:
      'Had a training in UI/UX design and product design while interning at Africa 2 Silicon Valley.',
    category: 'experience',
  },

  // {
  //   id: 6,
  //   title: 'Plugins Developer',
  //   subtitle: 'Fiverr.com',
  //   date: '2016 - 2018',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //   category: 'experience',
  // },
];

export const testimonials = [
  {
    id: 1,
    img: Testimonial1,
    name: 'Barbara Wilson',
    author: 'CEO Company',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    img: Testimonial2,
    name: 'Charlie Smith',
    author: 'Designer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    img: Testimonial3,
    name: 'Roy Wang',
    author: 'Manager GYM',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 4,
    img: Testimonial4,
    name: 'Jennifer Smith',
    author: 'CEO & Founder',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 5,
    img: Testimonial5,
    name: 'Paul Freeman',
    author: 'Photographer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];
