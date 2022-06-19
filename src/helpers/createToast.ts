import { ToastCategory } from "types/enums/toastCategory";
import IToast from "types/IToast";
import { v4 as uuidv4 } from "uuid";

export const createToast = (text: string, category: ToastCategory): IToast => ({
  text,
  category,
  id: uuidv4(),
});
