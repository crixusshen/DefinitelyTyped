/**
 * Open a tooltip box
 * @param options See options parameters for details:http://itest.dfzq.com.cn/document/fastman-v2/component/tip.html
 */
export function tip(options: {
  content: string,
  stayTime?: number,
  // type?: string,
  extraclass?: string
}): ZeptoCollection;

/**
 * Close a tooltip box
 * @param instance A zepto object
 */
export function closeTip(instance: ZeptoCollection);
