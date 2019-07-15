/**
 * Define a TAB event
 *
 * @param tabId The ID attribute corresponding to the TAB
 * @param func The callback function that is triggered when the TAB is clicked
 */
export function tabEvent(tabId: string, func: (_) => void): void;

/**
 * Switch the TAB
 *
 * @param tabId The ID attribute corresponding to the TAB
 */
export function tabSwitch(tabId: string): void;
