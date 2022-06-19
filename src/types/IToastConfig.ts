import IToastStyle from "./IToastStyles";
import { ToastPosition } from "./enums/toastPosition";
import { ToastDuration } from "./enums/toastDuration";

interface IToastConfig {
  position: ToastPosition;
  duration: ToastDuration;
  margin: number;
  infoStyle: IToastStyle;
  warningStyle: IToastStyle;
  errorStyle: IToastStyle;
  successStyle: IToastStyle;
}

export default IToastConfig;
