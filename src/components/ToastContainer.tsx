import React, { FC, useState, useEffect, useCallback } from "react";

import { Toast } from "@components/Toast";
import { IToast } from "types/IToast";
import { IToastService, toastActionType } from "@service/toastService";
import { ToastManager } from "@service/toastManager";
import { IToastConfig } from "types/IToastConfig";
import { defaultToastConfig } from "@constants/defaultToastConfig";
import { ErrorBoundary } from "./ErrorBoundary";

export interface ToastListProps {
  toasts?: IToast[];
  config?: IToastConfig;
}

export const ToastContainer: FC<ToastListProps> = () => {
  const [service] = useState<IToastService>(() =>
    ToastManager.getToastService()
  );
  const [config, setConfig] = useState<IToastConfig>(defaultToastConfig);
  const [toasts, setToasts] = useState<IToast[]>([]);

  useEffect(() => {
    const onAdd: toastActionType = (data) => {
      setToasts([...data]);
    };

    const onDelete: toastActionType = (data, id) => {
      setToasts((prevToasts) =>
        prevToasts.map((toast) =>
          toast.id === id ? { ...toast, isDelete: true } : toast
        )
      );
      setTimeout(
        () =>
          setToasts((prevToasts) =>
            prevToasts.filter((toast) => !toast.isDelete)
          ),
        500
      );
    };

    setConfig(service.config);
    service.subscribeAdd(onAdd);
    service.subscribeDelete(onDelete);

    return () => {
      service.unsubscribeAdd(onAdd);
      service.unsubscribeDelete(onDelete);
    };
  }, [service, toasts]);

  const deleteToast = useCallback(
    (id: string) => () => {
      service.deleteToast(id);
    },
    [service]
  );

  return (
    <ErrorBoundary>
      <Toast toastList={toasts} config={config} deleteToast={deleteToast} />
    </ErrorBoundary>
  );
};
