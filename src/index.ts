import styled from "styled-components";

export { styled };
export { Toast, ToastContainer, ErrorBoundary } from "./components";
export type { IToast, IToastConfig, IToastStyle } from "./types";
export {
  ToastAnimation,
  ToastCategory,
  ToastDuration,
  ToastPosition,
} from "./types/enums";
export { ToastManager, toastService } from "./service";
export type { IToastService, toastActionType, toastCallType } from "./service";
export { useToastService } from "./hooks";
export type { useToastServiceType } from "./hooks";
export {
  createToast,
  getToastAnimation,
  getToastLifetime,
  selectCategoryStyle,
} from "./helpers";
export type { getToastAnimationType } from "./helpers";
export {
  defaultToastConfig,
  errorToastStyle,
  infoToastStyle,
  successToastStyle,
  warningToastStyle,
} from "./constants";
export * from "./assets/icons/check.png";
export * from "./assets/icons/close.png";
export * from "./assets/icons/malware.png";
export * from "./assets/icons/question.png";
export * from "./assets/icons/warning.png";
