import eCom from "@/public/assets/ecom.png";
import wikiApp from "@/public/assets/wikiApp.jpg";
import pizzaShop from "@/public/assets/pizzaShop.jpg";
import IPM from "@/public/assets/IPM.jpg";
import Todolist from "@/public/assets/toDoList.jpg";
import moviesList from "@/public/assets/moviesList.jpg";
import admin from "@/public/assets/Admin_dashPoard_e_commerce.png";

interface Tag {
  name: string;
  color: string;
}

export interface Project {
  name: string;
  description: string;
  tags: Tag[];
  image: string;
  source_code_link: string;
  project_link: string;
}

export const projects: Project[] = [
  {
    name: "work.project8Name",
    description: "work.project8Description",
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
    image: admin.src,
    source_code_link: "https://github.com/momen-x/e-commerce-Admin-dashboard-",
    project_link: "https://e-commerce-admin-dashboard-three.vercel.app",
  },
  {
    name: "work.project1Name",
    description: "work.project1Description",
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
    name: "work.project2Name",
    description: "work.project2Description",
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
    name: "work.project3Name",
    description: "work.project3Description",
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
    name: "work.project4Name",
    description: "work.project4Description",
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
    name: "work.project5Name",
    description: "work.project5Description",
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
    name: "work.project6Name",
    description: "work.project6Description",
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
 
];
