import eCom from "@/public/assets/eCom.jpg";
import wikiApp from "@/public/assets/wikiApp.jpg";
import pizzaShop from "@/public/assets/pizzaShop.jpg";
import IPM from "@/public/assets/IPM.jpg";
import Todolist from "@/public/assets/toDoList.jpg";
import prayTime from "@/public/assets/prayTime.jpg";
import moviesList from "@/public/assets/moviesList.jpg";

export const projects = [
  {
    name: "E-commerce",
    description:
      "A full-stack e-commerce platform featuring user authentication, product catalog, shopping cart, and secure checkout functionality with MongoDB integration.",
    tags: [
      {
        name: "Next js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: eCom.src,
    source_code_link: "https://github.com/momen-x/full_Stack_eCom",
    project_link: "https://full-stack-e-com-five.vercel.app",
  },
  {
    name: "Pizza Shop",
    description:
      "An online pizza ordering system with customizable menu options, real-time order tracking, and seamless payment integration built with PostgreSQL database.",
    tags: [
      {
        name: "Next js",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: pizzaShop.src,
    source_code_link: "https://github.com/momen-x/Pizza_Shop",
    project_link: "https://pizza-shop-phi-sable.vercel.app",
  },
  {
    name: "Wiki App",
    description:
      "A collaborative knowledge-sharing platform where users can create articles, comment on posts, and contribute to a community-driven encyclopedia with PostgreSQL backend.",
    tags: [
      {
        name: "Next js",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: wikiApp.src,
    source_code_link: "https://github.com/momen-x/Wiki_app",
    project_link: "https://wiki-app-seven.vercel.app",
  },
  {
    name: "Product Management",
    description:
      "A comprehensive inventory management system for tracking products, managing stock levels, and organizing product data with full CRUD operations and PostgreSQL storage.",
    tags: [
      {
        name: "Next js",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: IPM.src,
    source_code_link: "https://github.com/momen-x/Wiki_app",
    project_link: "https://management-qvxfhgshf-momen-xs-projects.vercel.app",
  },
  {
    name: "To Do List",
    description:
      "A task management application that helps users organize daily activities, set priorities, track progress, and manage tasks efficiently with local storage persistence.",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
    ],
    image: Todolist.src,
    source_code_link: "https://github.com/momen-x/to-do-by-reactjs",
    project_link: "https://super-crumble-77f8db.netlify.app",
  },
  {
    name: "Movies List",
    description:
      "A movie discovery application featuring a browsable catalog of films, detailed movie information, ratings, and search functionality powered by an external API.",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
    ],
    image: moviesList.src,
    source_code_link: "https://github.com/momen-x/display-movies",
    project_link: "https://shiny-stroopwafel-4c4cd9.netlify.app",
  },

  {
    name: "Pray Time",
    description:
      "An Islamic prayer times application that displays accurate prayer schedules based on location, with notifications and daily reminders for Muslims worldwide.",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
    ],
    image: prayTime.src,
    source_code_link: "https://github.com/momen-x/pray-timing",
    project_link: "https://superb-alpaca-92ead5.netlify.app",
  },
];
