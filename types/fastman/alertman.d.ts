/**
 * Open an alert box
 * @param text Alert text
 * @param title Alert modal title
 * @param onClick In Alert modal, a callback function is executed when the user clicks the "Ok" button
 * @param allowClose If yes, the close button appears in the upper right corner
 */
export default function alert(text: string, title?: string, onClick?: () => void, allowClose?: boolean): void;

/**
 * Open an alert box
 * @param text Alert text
 * @param onClick In Alert modal, a callback function is executed when the user clicks the "Ok" button
 * @param allowClose If yes, the close button appears in the upper right corner
 */
export default function alert(text: string, onClick?: () => void, allowClose?: boolean): void;

/**
 * Open an alert box
 * @param text Alert text
 * @param allowClose If yes, the close button appears in the upper right corner
 */
export default function alert(text: string, allowClose?: boolean): void;

/**
 * Open an alert box
 * @param options See options parameters for details:http://itest.dfzq.com.cn/document/fastman-v2/component/alert.html
 */
export default function alert(options: {
  text: string;
  title?: string;
  onClick?: () => void;
  allowClose?: boolean;
}): void;
