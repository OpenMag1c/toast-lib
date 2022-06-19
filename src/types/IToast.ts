import { ToastCategory } from "./enums/toastCategory";

interface IToast {
  id: string;
  category: ToastCategory;
  text: string;
}

export default IToast;
