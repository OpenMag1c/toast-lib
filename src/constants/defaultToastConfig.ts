import { ToastAnimation } from "types/enums/toastAnimation";
import { ToastDuration } from "types/enums/toastDuration";
import { ToastPosition } from "types/enums/toastPosition";
import IToastConfig from "types/IToastConfig";
import {
  errorToastStyle,
  infoToastStyle,
  successToastStyle,
  warningToastStyle,
} from "./toastStyles";

export const defaultToastConfig: IToastConfig = {
  duration: ToastDuration.Medium,
  position: ToastPosition.BottomRight,
  animation: ToastAnimation.Movement,
  margin: 10,
  infoStyle: infoToastStyle,
  warningStyle: warningToastStyle,
  errorStyle: errorToastStyle,
  successStyle: successToastStyle,
};
