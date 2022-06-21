import { ToastCategory } from "./enums/toastCategory";

export interface IToast {
  id: string;
  category: ToastCategory;
  text: string;
}
