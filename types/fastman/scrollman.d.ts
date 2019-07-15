/**
 * Initializes the Scroller component
 * @param selector Selectors that support classes and ids
 * @param type Scroll mode, support configuration as "auto", "native", "js"
 */
export function initScroller(selector: string, type?: {
  type: "auto" | "native" | "js"
}): void;

/**
 * In js mode, local and global scrolling refresh
 * @param selector Selectors that support classes and ids
 */
export function refreshScroller(selector?: string): void;

/**
 * How far to scroll the top, which is set to 0 by default if topNumber is not defined
 * @param selector Selectors that support classes and ids
 * @param topNumber The default position to scroll to the top, px
 */
export function scrollTop(selector: string, topNumber?: number): void;

/**
 * Initializes the drop-down refresh feature of the Scroller component
 * @param selector Selectors that support classes and ids
 */
export function initPullDownRefresh(selector: string): void;

/**
 * Drop-down refreshed event callback
 * @param callback Pull-down refresh event callbacks, which are automatically triggered when the user state is released and the margin distance (default 44px, data-ptr-distance) is satisfied
 */
export function pullDownRefresh(callback: (e) => void): void;

/**
 * Mark drop-down refresh completed
 * @param selector Selectors that support classes and ids
 */
export function pullDownRefreshDone(selector?: string): void;
