/**
 * Open an actionSheet
 * @param btns Please check the specific configuration:http://itest.dfzq.com.cn/document/fastman-v2/component/actionsheet.html
 */
export default function actionSheet(btns: actionSheetItemsType[]);

export interface actionSheetItemType {
  text: string;
  label?: boolean;
  color?: string;
  bold?: boolean;
  close?: boolean;
  disabled?: boolean;
  onClick?: (_) => void;
}

export interface actionSheetItemsType extends Array<actionSheetItemType> {}
