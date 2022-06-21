import { ToastDuration } from "types/enums/toastDuration";

export const getToastLifetime = (duration: ToastDuration) => {
  switch (duration) {
    case ToastDuration.Quick:
      return 3000;
    case ToastDuration.Medium:
      return 5000;
    case ToastDuration.Slow:
      return 10000;
    default:
      return null;
  }
};
