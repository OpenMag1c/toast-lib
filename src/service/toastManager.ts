import { defaultToastConfig } from "@constants/defaultToastConfig";
import IToastConfig from "types/IToastConfig";
import { IToastService, toastService } from "./toastService";

const ToastManager = (function () {
  let service: IToastService;

  function createToastService(config?: IToastConfig): IToastService {
    const object = {
      ...toastService,
      config: config || defaultToastConfig,
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

export default ToastManager;
