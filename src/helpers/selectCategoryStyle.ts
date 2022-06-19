import IToastStyle from "types/IToastStyles";
import questionLogo from "@icons/question.png";
import warningLogo from "@icons/warning.png";
import errorLogo from "@icons/malware.png";
import successLogo from "@icons/check.png";

import * as toastStyles from "@constants/toastStyles";
import { ToastCategory } from "../types/enums/toastCategory";

type selectCategoryStyleType = (category: ToastCategory) => {
  style: IToastStyle;
  logo: string;
};

const selectCategoryStyle: selectCategoryStyleType = (category) => {
  switch (category) {
    case ToastCategory.Info:
      return { logo: questionLogo, style: toastStyles.infoToastStyle };
    case ToastCategory.Warning:
      return { logo: warningLogo, style: toastStyles.warningToastStyle };
    case ToastCategory.Error:
      return { logo: errorLogo, style: toastStyles.errorToastStyle };
    case ToastCategory.Success:
      return { logo: successLogo, style: toastStyles.successToastStyle };
    default:
      return { logo: successLogo, style: toastStyles.successToastStyle };
  }
};

export default selectCategoryStyle;
