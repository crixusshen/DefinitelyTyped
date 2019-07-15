/**
 * Initialize the unlimited refresh feature of Scroller components
 * @param selector Infinitely scrollable container selector, supports classes and ids
 */
export function initInfiniteScroll(selector: string): void;

/**
 * Event callback for infinite refresh
 * @param callback This event is triggered when the page scrolls to a certain distance from the bottom (configurable in data-distance)
 */
export function infiniteRefresh(callback: (e) => void): void;

/**
 * Mark infinite refresh complete
 * @param selector Selectors, which support classes and ids, are selectors for default values if not defined, and are not usually defined
 */
export function infiniteScrollDone(selector?: string): void;
