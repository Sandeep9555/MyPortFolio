import portfolioImg01 from "../images/portfolioImg01.png";
import portfolioImg02 from "../images/portfolioImg02.png";
import portfolioImg04 from "../images/portfolioImg04.png";
import portfolioImg05 from "../images/portfolioImg05.png";
import portfolioImg07 from "../images/portfolioImg07.png";
import portfolioImg08 from "../images/portfolioImg08.png";
import portfolioImg09 from "../images/portfolioImg09";
import portfolioImg11 from "../images/portfolioImg11.png";
import portfolioImg21 from "../images/portfolioImg21.png";

const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg21,
    category: "Web Development",
    title: "HexaCode",
    description:
      "Developed a real-time communication platform using React, Express, and Socket.Integrated live code editing capabilities with CodeMirror,Implemented user avatars with react-avatar and toast notifications with react-hot-toast.",
    technologies: [
      "Nextjs",
      "Tailwind css",
      "Code Mirror",
      "Socket Chat",
      "ExpressJs",
    ],
    siteUrl: "https://github.com/Sandeep9555/Hexacode",
  },
  {
    id: "02",
    imgUrl: portfolioImg01,
    category: "Wellness-WayFinder",
    title: "Wellness-WayFinder",
    description:
      "Wellness Wayfinder: Developed an interactive wellness application using React, Express, and MongoDB.Implemented personalized wellness plans and progress tracking features.Integrated real-time chat support and user engagement tools with Socket.IO.Utilized Material-UI for a responsive and modern user interface design",
    technologies: ["Nextjs", "Tailwind css", "AWS S3", "MongoDB", "Stripe API"],
    siteUrl: "https://github.com/SmashSidak-1508/wellness-wayfinder",
  },
  {
    id: "03",
    imgUrl: portfolioImg08,
    category: "Web Development",
    title: "Wellness-visuals",
    description:
      " Built an interactive fitness application using React, Express, and MongoDB Designed a user-friendly interface with Material-UI, offering personalized workout plans and tracking. Integrated interactive dashboards for visualizing user progress and performance metrics. Implemented responsive design principles to ensure accessibility across devices and screen sizes.",
    technologies: ["MaterialUi", "TailWindCss", "React"],
    siteUrl: "https://github.com/Sandeep9555/wellnesswayfinder-visuals",
  },
  {
    id: "04",
    imgUrl: portfolioImg09,
    category: "Web Development",
    title: "Api Manager",
    description:
      " Developed a desktop application using Java and AWT for managing APIs.Implemented features for creating, testing, and monitoring API endpoints.Designed an intuitive graphical user interface with AWT, providing easy navigation and management.Integrated functionality for secure API key management and usage tracking..",
    technologies: ["Python"],
    siteUrl:" https://github.com/Sandeep9555/ApiManager",
  },
  {
    id: "05",
    imgUrl: portfolioImg07,
    category: "Web Development",
    title: "TO DO App",
    description:
      "Developed a JavaScript-based To-Do App that helps users keep track of their activities and responsibilities. This project enables easy task entry, editing, and removal, enhancing productivity and helping users stay organized in their daily lives.",
    technologies: ["React", "Redux", "Router"],
    siteUrl: "https://github.com/Sandeep9555/TodoReduxTollkitApp",
  },
  {
    id: "06",
    imgUrl: portfolioImg04,
    category: "Web Development",
    title: "FoodCart",
    description:
      "FoodCart: Developed a full-stack e-commerce platform using React, Express, Node.js, and MongoDB.Implemented features for browsing, searching, and purchasing food items with a user-friendly interface.Integrated secure payment processing and user authentication for a seamless shopping experience.Designed a responsive layout using Material-UI, ensuring accessibility across devices.",
    technologies: ["Reactjs", "Socket.io", "Expressjs", "Node.js"],
    siteUrl: "https://github.com/Sandeep9555/FoodCart",
  },
  {
    id: "07",
    imgUrl: portfolioImg02,
    category: "Web Development",
    title: "ToursNTravel Web Application",
    description: "Developed a mern stack tours booking web application",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB", "Expressjs"],
    siteUrl: "https://github.com/friekyCoder/toursNtravel",
  },
  
  {
    id: "12",
    imgUrl: portfolioImg11,
    category: "Web Development",
    title: "NQueen Visualizer",
    description:
      "Developed an educational Python application for the N-Queens problem, enabling users to experiment with different board sizes and solve N-Queens puzzles through an intuitive visualization. ",
    technologies: ["Python"],
    siteUrl: "https://github.com/friekyCoder/Nqueen_Visualizer",
  },
  

];

export default portfolios;
