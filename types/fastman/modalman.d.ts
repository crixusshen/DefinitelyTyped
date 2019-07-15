/// <reference types="zepto" />

/**
 * Open the modal window
 *
 * @param dom A zepto object
 */
export function openModal(dom: ZeptoCollection): void;

/**
 * Close the modal window
 *
 * @param dom A zepto object
 */
export function closeModal(dom: ZeptoCollection): void;

/**
 * The module defaults to configuration properties, through which the container node to the modal can be obtained
 */
export const defaults: {
  modalStack: boolean,
  modalButtonOk: string,
  modalButtonCancel: string,
  modalPreloaderTitle: string,
  modalContainer: HTMLElement | string,
  modalTitle: string,
  actionsCloseByOutside: boolean
};
