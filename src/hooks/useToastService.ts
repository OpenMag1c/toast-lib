import { useRef } from "react";
import { IToastService } from "@service/toastService";
import IToastConfig from "types/IToastConfig";
import ToastManager from "@service/toastManager";
import { ToastCategory } from "types/enums/toastCategory";
import { createToast } from "../helpers/createToast";
import { getToastLifetime } from "../helpers/setToastLifetime";

export type useToastServiceType = (config?: IToastConfig) => {
  info: (text: string) => void;
  warning: (text: string) => void;
  error: (text: string) => void;
  success: (text: string) => void;
};

export const useToastService: useToastServiceType = (config) => {
  const service = useRef<IToastService>(ToastManager.getToastService(config));

  const setToastLifetime = (id: string) => {
    const {
      config: { duration },
    } = service.current;

    const lifetime = getToastLifetime(duration);
    if (lifetime) {
      setTimeout(() => {
        service.current.deleteToast(id);
      }, lifetime);
    }
  };

  const info = (text: string) => {
    const toast = createToast(text, ToastCategory.Info);
    service.current.addToast(toast);
    setToastLifetime(toast.id);
  };

  const warning = (text: string) => {
    const toast = createToast(text, ToastCategory.Warning);
    service.current?.addToast(toast);
    setToastLifetime(toast.id);
  };

  const error = (text: string) => {
    const toast = createToast(text, ToastCategory.Error);
    service.current?.addToast(toast);
    setToastLifetime(toast.id);
  };

  const success = (text: string) => {
    const toast = createToast(text, ToastCategory.Success);
    service.current?.addToast(toast);
    setToastLifetime(toast.id);
  };

  return { info, warning, error, success };
};
