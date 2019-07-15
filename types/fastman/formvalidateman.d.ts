/**
 * Enable form validation
 * @param selector Selectors for Form Form elements, support for class and ID selectors
 * @param options Please check the validate parameter configuration for details:http://itest.dfzq.com.cn/document/fastman-v2/component/formvalidate.html
 */
export function validate(selector: string, options: {
  onKeyup?: boolean,
  firstInvalidFocus?: boolean,
  conditional?: {
    [key: string]: (_) => void
  },
  descriptions?: {
    [key: string]: {
      required?: string,
      conditional?: string,
      pattern?: string
    }
  },
  valid?: (e, options) => void
});

/**
 * This method is used to extend the validation of some input fields and can implement some validation rules with complex complex relations
 * @param validateRule See the validateExtend parameter configuration for details:http://itest.dfzq.com.cn/document/fastman-v2/component/formvalidate.html
 */
export function validateExtend(validateRule: {
  [key: string]: {
    required?: boolean,
    pattern?: RegExp,
    descriptions?: {
      required?: string,
      conditional?: string,
      pattern?: string
    },
    conditional?: {
      [key: string]: (_) => void
    }
  }
});
