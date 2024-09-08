import { iconBasePath } from "@/Static/Skills";
import { SkillType } from "../Skills/types";

/**
 * Declares how should link object looks like
 */
interface LinkType {
  /**
   * Name of link destination
   */
  name: string;

  /**
   * Path of link's icon
   */
  icon: string;

  /**
   * Link address
   */
  href: string;
}

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
   * List of links related to project
   */
  links: LinkType[];

  /**
   * Small decription of project
   */
  desc: string;
}
