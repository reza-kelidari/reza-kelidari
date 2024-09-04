import { SkillType } from "./types";

/**
 * Base path of icons
 */
const iconsBasePath: string = "icons/";

/**
 * List of skills
 */
const skills: SkillType[] = [
  { name: "Next.js", icon: iconsBasePath + "next-js.svg" },
  { name: "React.js", icon: iconsBasePath + "react-js.svg" },
  { name: "Type Script", icon: iconsBasePath + "type-script.svg" },
  { name: "Redux", icon: iconsBasePath + "redux.svg" },
  { name: "Sass", icon: iconsBasePath + "sass.svg" },
  { name: "API", icon: iconsBasePath + "api.svg" },
  { name: "Bootstrap", icon: iconsBasePath + "bootstrap.svg" },
  { name: "Firebase", icon: iconsBasePath + "firebase.svg" },
  { name: "Java Script ES6", icon: iconsBasePath + "js.svg" },
  { name: "CSS 3", icon: iconsBasePath + "css.svg" },
  { name: "HTML 5", icon: iconsBasePath + "html.svg" },
];

/**
 * Returns list of my skills for rendering in
 * Home page
 *
 * @returns {Promise<Response>}
 */
export async function GET(): Promise<Response> {
  return Response.json(skills);
}
