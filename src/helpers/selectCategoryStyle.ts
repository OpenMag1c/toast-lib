import { IToastStyle } from "types/IToastStyles";
import questionLogo from "@icons/question.svg";
import warningLogo from "@icons/warning.svg";
import errorLogo from "@icons/malware.svg";
import successLogo from "@icons/check.svg";
import { IToastConfig } from "types/IToastConfig";
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
