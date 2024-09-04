import { iconBasePath } from "@/Static/Skills";
import { SkillType } from "../Skills/types";

/**
 * Represents shape of a template
 */
export interface TemplateType {
  /**
   * Project name
   */
  name: string;

  /**
   * Path of project's image
   */
  imagePath: string;

  /**
   * List of tools used for devloping the
   * project
   */
  tools: SkillType[];

  /**
   * URL of project's demo page
   */
  demo: string;

  /**
   * URL of project's github page
   */
  github: string;
}
