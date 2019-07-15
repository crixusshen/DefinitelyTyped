/**
 * File upload
 * @param file Input :file, or the path directly to the image
 * @param options See uploadman parameter configuration for details:http://itest.dfzq.com.cn/document/fastman-v2/component/fileupload.html
 */
export function upload(
  file: File,
  options?: {
    width?: number,
    height?: number,
    quality?: number,
    fieldName?: string
  }
): Promise<any>;
