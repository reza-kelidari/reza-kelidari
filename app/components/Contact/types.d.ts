/**
 * Declares how a contact info looks like
 */
export interface ContactInfoType {
  /**
   * Type of the contact info
   *
   * Example: `ایمیل`
   */
  name: string;

  /**
   * Contact address value
   *
   * Example: `re.kelidari@gmail.com`
   */
  value: string;

  /**
   * Path of icon of the contact way
   *
   * Example: `icons/email.svg`
   */
  icon: string;

  /**
   * Link of contact address
   *
   * Example: `mailto:re.kelidari@gmail.com`
   */
  link: string;
}
