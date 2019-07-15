/**
 * Open a cascade selector
 * @param selector Trigger control selectors, support for class and ID selectors
 * @param options See options parameters for details:http://itest.dfzq.com.cn/document/fastman-v2/component/picker.html
 */
export default function cascadePicker(selector: string, options: {
  data: dataType[];
  cols?: colsType[];
  toolbarTemplate?: string;
  value?: string[];
  rotateEffect?: boolean;
  inputReadOnly?: boolean;
  cssClass?: string;
  onChange?: (Picker, value, displayValue) => void;
  onOpen?: (Picker) => void;
  onClose?: (Picker) => void;
  formatValue?: (Picker, value, displayValue) => void;
  updateValue?: boolean;
});

export interface colsType {
  values: string[];
  textAlign?: string;
  displayValues?: string[];
}

export interface dataType {
  name: string | number;
  value: string | number;
  sub?: dataType[];
}
