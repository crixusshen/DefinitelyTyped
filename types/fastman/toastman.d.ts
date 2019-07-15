/**
 * Open a toast pop-up
 * @param text toast content
 * @param duration Toast displays the time, 2000 milliseconds by default
 * @param extraclass The toast root node is attached with a class and highly customized attribute
 */
export function toast(text: string, duration?: number, extraclass?: string): ZeptoCollection;

/**
 * Open a toast pop-up
 * @param text toast content
 * @param extraclass The toast root node is attached with a class and highly customized attribute
 */
export function toast(text: string, extraclass?: string): ZeptoCollection;

/**
 * Open a toast pop-up
 * @param options See options parameters for details:http://itest.dfzq.com.cn/document/fastman-v2/component/toast.html
 */
export function toast(options: {
    text: string,
    duration?: number,
    extraclass?: string
  }): ZeptoCollection;

/**
 * Close a toast pop-up
 * @param instance An instance object generated when toast is created
 */
export function closeToast(instance: ZeptoCollection): void;
