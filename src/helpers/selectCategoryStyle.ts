import { IToastStyle } from "types/IToastStyles";

import { IToastConfig } from "types/IToastConfig";
import { ToastCategory } from "types/enums/toastCategory";
import { errorIcon, infoIcon, successIcon, warningIcon } from "@assets/icons";

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
      return { logo: infoIcon, style: config.infoStyle };
    case ToastCategory.Warning:
      return { logo: warningIcon, style: config.warningStyle };
    case ToastCategory.Error:
      return { logo: errorIcon, style: config.errorStyle };
    case ToastCategory.Success:
      return { logo: successIcon, style: config.successStyle };
    default:
      return { logo: successIcon, style: config.successStyle };
  }
};
