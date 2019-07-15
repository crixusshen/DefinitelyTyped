/**
 * Open a confirm box
 * @param text Confirm text
 * @param title Confirm modal title
 * @param onOkClick In Confirm modal, the callback function is executed when the user clicks the "Ok" button at the bottom right
 * @param onCancelClick In Confirm modal, the callback function is executed when the user clicks the "Cancel" button at the bottom left
 * @param okText Bottom right "Ok" button copy
 * @param cancelText Copy button "Cancel" at the bottom left
 */
export default function confirm(text: string, title?: string, onOkClick?: (_) => void, onCancelClick?: (_) => void, okText?: string, cancelText?: string): void;

/**
 * Open a confirm box
 * @param text Confirm text
 * @param onOkClick In Confirm modal, the callback function is executed when the user clicks the "Ok" button at the bottom right
 * @param onCancelClick In Confirm modal, the callback function is executed when the user clicks the "Cancel" button at the bottom left
 * @param okText Bottom right "Ok" button copy
 * @param cancelText Copy button "Cancel" at the bottom left
 */
export default function confirm(text: string, onOkClick?: (_) => void, onCancelClick?: (_) => void, okText?: string, cancelText?: string): void;

/**
 * Open a confirm box
 * @param options See options parameters for details:http://itest.dfzq.com.cn/document/fastman-v2/component/confirm.html
 */
export default function confirm(options: {
  text: string;
  title?: string;
  onOkClick?: (_) => void;
  onCancelClick?: (_) => void;
  okText?: string;
  cancelText?: string;
}): void;
