export default passGuard;

/**
 * Create a password control component
 * @param options See the passGuard parameter configuration for details:http://itest.dfzq.com.cn/document/fastman-v2/component/passguard.html
 */
declare function passGuard(options: {
  id?: string,
  keyboardType?: number,
  inputMaxLength?: number,
  mixPromise?: (_) => Promise<any>,
  onShow?: (_) => void,
  onHide?: (_) => void,
  onPressing?: (_) => void,
  onPressed?: (_) => void,
  onFocus?: (_) => void,
  onSubmit?: (input) => void
}): passGuard.passGuardReturnType;

/**
 * Define the passGuard instance function
 */
declare namespace passGuard {
  interface passGuardReturnType {
    /**
     * Output the password entry
     */
    getOutput();

    /**
     * Get password length
     */
    getLength();

    /**
     * Clear the password
     */
    clearPass();
  }
}
