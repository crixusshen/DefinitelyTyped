/**
 * Start a Picker multi-column selector
 * @param selector Trigger selectors for controls, support classes and ID selectors, such as #singleSelect
 * @param options See options parameters for details:http://itest.dfzq.com.cn/document/fastman-v2/component/picker.html
 */
export default function picker(selector: string, options: {
  cols: colsType[],
  toolbarTemplate?: string,
  value?: string[],
  rotateEffect?: boolean,
  inputReadOnly?: boolean,
  cssClass?: string,
  onChange?: (Picker, value, displayValue) => void,
  onOpen?: (Picker) => void,
  onClose?: (Picker) => void,
  formatValue?: (Picker, value, displayValue) => void,
  updateValue?: boolean
});

export interface colsType {
  values: string[];
  textAlign?: string;
  displayValues?: string[];
}
