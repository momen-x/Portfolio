interface IExperience {
  title: string;
  path: string;
  iconBg: string;
  date: string;
  points: string[];
}

const myExperience: IExperience[] = [
  {
    date: "May 2025",
    title: "Front End Developer",
    path: "/images/react.png", 
    iconBg: "#000",
    points: [
    //   "Developed responsive web applications using Next.js",
      "Built interactive UIs with React.js and TypeScript",
      "Styled components with Tailwind CSS for modern designs",
      "Implemented state management and API integrations",
    ],
  },
  {
    date: "Jan 2025",
    title: "Back End Developer",
    path: "/images/Next.jpg", 
    iconBg: "#000",
    points: [
      "Built RESTful APIs with Node.js and Express.js",
      "Designed and implemented MongoDB database schemas",
      "Created authentication and authorization systems",
      "Optimized server performance and response times",
    ],
  },
];

export default myExperience;
