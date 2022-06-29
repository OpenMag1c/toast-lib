import { defaultToastConfig } from "@constants/defaultToastConfig";
import { IToastConfig } from "types/IToastConfig";
import { IToastService, toastService } from "./toastService";

export const ToastManager = (function () {
  let service: IToastService;

  function createToastService(config?: IToastConfig): IToastService {
    const object = {
      ...toastService,
      config: { ...defaultToastConfig, ...config },
    } as IToastService;
    return object;
  }

  return {
    getToastService(config?: IToastConfig): IToastService {
      if (!service || config) {
        service = createToastService(config);
      }
      return service;
    },
  };
})();
