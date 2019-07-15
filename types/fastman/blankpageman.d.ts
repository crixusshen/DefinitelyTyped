/**
 * Create a blank page component
 * @param options Check out the blankpage-config parameter configuration for details:http://itest.dfzq.com.cn/document/fastman-v2/component/blankpage.html
 */
export function blankPage(options: {
  title?: string;
  icon?: string;
  buttonText?: string;
  button?: boolean;
  type?: string;
  font?: string;
  container?: string;
  fontScale?: number;
  iconScale?: number;
}): blankPage.blankPageReturnType;

export namespace blankPage {
  interface blankPageReturnType {
    on(eventName: string, callback: (_) => void);
  }
}
