import IToastStyle from "./IToastStyles";
import { ToastPosition } from "./enums/toastPosition";
import { ToastDuration } from "./enums/toastDuration";
import { ToastAnimation } from "./enums/toastAnimation";

interface IToastConfig {
  position: ToastPosition;
  animation: ToastAnimation;
  duration: ToastDuration;
  margin: number;
  infoStyle: IToastStyle;
  warningStyle: IToastStyle;
  errorStyle: IToastStyle;
  successStyle: IToastStyle;
}

export default IToastConfig;
