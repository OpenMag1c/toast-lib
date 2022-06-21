import IToastStyle from "types/IToastStyles";
import questionLogo from "@icons/question.png";
import warningLogo from "@icons/warning.png";
import errorLogo from "@icons/malware.png";
import successLogo from "@icons/check.png";
import IToastConfig from "types/IToastConfig";
import { ToastCategory } from "types/enums/toastCategory";

type selectCategoryStyleType = (
  category: ToastCategory,
  config: IToastConfig
) => {
  style: IToastStyle;
  logo: string;
};

export const selectCategoryStyle: selectCategoryStyleType = (
  category,
  config
) => {
  switch (category) {
    case ToastCategory.Info:
      return { logo: questionLogo, style: config.infoStyle };
    case ToastCategory.Warning:
      return { logo: warningLogo, style: config.warningStyle };
    case ToastCategory.Error:
      return { logo: errorLogo, style: config.errorStyle };
    case ToastCategory.Success:
      return { logo: successLogo, style: config.successStyle };
    default:
      return { logo: successLogo, style: config.successStyle };
  }
};
