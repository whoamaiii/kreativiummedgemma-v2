/**
 * Shared environment helpers
 */
export const POC_MODE: boolean = (
  (import.meta as any)?.env?.MODE === 'poc' ||
  (import.meta as any)?.env?.VITE_POC_MODE === 'true'
);

export const IS_PROD: boolean = (import.meta as any)?.env?.PROD === true;


