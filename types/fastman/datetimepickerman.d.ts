/**
 * Start a Picker multi-column selector
 * @param selector Trigger selectors for controls, support classes and ID selectors, such as #singleSelect
 * @param options See options parameters for details:http://itest.dfzq.com.cn/document/fastman-v2/component/picker.html
 * @param needTime Whether the time selection column needs to be displayed, defaults to true
 */
export default function datetimepicker(selector: string, options?: {
  // cols: colsType[];
  toolbarTemplate?: string;
  value?: string[];
  rotateEffect?: boolean;
  inputReadOnly?: boolean;
  cssClass?: string;
  // onChange?: (Picker, value, displayValue) => void;
  onOpen?: (Picker) => void;
  onClose?: (Picker) => void;
  formatValue?: (Picker, value, displayValue) => void;
  updateValue?: boolean;
}, needTime?: boolean);

/**
 * Start a Picker multi-column selector
 * @param selector Trigger selectors for controls, support classes and ID selectors, such as #singleSelect
 * @param needTime Whether the time selection column needs to be displayed, defaults to true
 */
export default function datetimepicker(selector: string, needTime?: boolean);
