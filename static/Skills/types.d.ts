/**
 * Represents shape of an skill
 */
export interface SkillType {
  /**
   * Name of the skill
   */
  name: string;

  /**
   * Name of skill's icon
   */
  iconName: string;
}

/**
 * List of skill types
 */
export enum SkillList {
  NextJS = "NextJS",
  ReactJS = "ReactJS",
  TypeScript = "TypeScript",
  Redux = "Redux",
  Sass = "Sass",
  API = "API",
  Bootstrap = "Bootstrap",
  Firebase = "Firebase",
  JavaScriptES6 = "JavaScriptES6",
  CSS3 = "CSS3",
  HTML5 = "HTML5",
}

/**
 * Declares how skills list looks like
 */
export type SkillsListType = { [key in SkillList]: SkillType };
