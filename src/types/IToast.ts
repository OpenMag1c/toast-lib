import { ToastCategory } from "./enums/toastCategory";

export interface IToast {
  id: string;
  isDelete: boolean;
  category: ToastCategory;
  text: string;
}
