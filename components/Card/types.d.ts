/**
 * Represents shape of Card component's props
 */
export interface CardProps {
  children: ReactNode;

  /**
   * Title of Card component
   */
  title: string[];

  /**
   * Does it always vertical?
   */
  vertical?: true;

  /**
   * HTML Attribute
   */
  id?: string;
}
