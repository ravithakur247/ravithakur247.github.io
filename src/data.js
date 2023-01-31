// Skills icons - https://react-icons.github.io/react-icons/
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaGithubSquare,
  FaLinkedinIn,
  FaAws,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiJavascript,
  SiStyledcomponents,
  SiRedux,
  SiNestjs,
  SiTypescript,
  SiRedis,
  SiMongodb,
} from "react-icons/si";

import { GrGraphQl } from "react-icons/gr"
import { AiOutlineApi, AiOutlineConsoleSql } from "react-icons/ai";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "ravithakur247";

// Blog link icon (imported above)
export const Blog = <FaLinkedinIn />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I enjoy learning about technology and helping others use it to improve their lives and be more productive. I built this site with React, Bootstrap, Redux, and the GitHub REST API.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, there must be one icon imported above per skill below.
*/
export const skillData = [
  {
    id: 1,
    skill: <FaNodeJs className="display-4" />,
    name: "Node JS",
  },
  {
    id: 2,
    skill: <SiNestjs className="display-4" />,
    name: "Nest JS",
  },
  {
    id: 3,
    skill: <SiTypescript className="display-4" />,
    name: "TypeScript",
  },
  {
    id: 4,
    skill: <SiJavascript className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 5,
    skill: <AiOutlineApi className="display-4" />,
    name: "Rest",
  },
  {
    id: 6,
    skill: <GrGraphQl className="display-4" />,
    name: "GraphQl",
  },
  {
    id: 7,
    skill: <FaAws className="display-4" />,
    name: "AWS",
  },
  {
    id: 8,
    skill: <SiRedis className="display-4" />,
    name: "Redis",
  },
  {
    id: 9,
    skill: <AiOutlineConsoleSql className="display-4" />,
    name: "SQL",
  },
  {
    id: 10,
    skill: <SiMongodb className="display-4" />,
    name: "Mongo DB",
  },
  {
    id: 11,
    skill: <FaReact className="display-4" />,
    name: "React",
  },
  {
    id: 12,
    skill: <SiStyledcomponents className="display-4" />,
    name: "Styled Components",
  },
  {
    id: 13,
    skill: <SiRedux className="display-4" />,
    name: "Redux",
  },
  {
    id: 14,
    skill: <FaGitAlt className="display-4" />,
    name: "Git",
  },
  {
    id: 15,
    skill: <FaGithubSquare className="display-4" />,
    name: "GitHub",
  },
  {
    id: 16,
    skill: <FaHtml5 className="display-4" />,
    name: "HTML5",
  },
  {
    id: 17,
    skill: <FaCss3Alt className="display-4" />,
    name: "CSS3",
  },
  {
    id: 18,
    skill: <FaBootstrap className="display-4" />,
    name: "BootStrap",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["example-1", "example-2", "example-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 13-14)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/xknaoqzb";
