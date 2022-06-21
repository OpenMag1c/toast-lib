import React, { FC, useState, useEffect, useRef } from "react";

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
  const serviceRef = useRef<IToastService>();
  const [config, setConfig] = useState<IToastConfig>(defaultToastConfig);
  const [toasts, setToasts] = useState<IToast[]>([]);
  const [toastDeleteId, setToastDeleteId] = useState<string>();

  useEffect(() => {
    const onAdd: toastActionType = (data) => {
      setToasts([...data]);
    };

    const onDelete: toastActionType = (data, id) => {
      setToastDeleteId(id);
      setTimeout(() => setToasts([...data]), 500);
    };

    serviceRef.current = ToastManager.getToastService();
    setConfig(serviceRef.current.config);
    serviceRef.current.subscribeAdd(onAdd);
    serviceRef.current.subscribeDelete(onDelete);

    return () => {
      serviceRef.current?.unsubscribeAdd(onAdd);
      serviceRef.current?.unsubscribeDelete(onDelete);
    };
  }, []);

  const deleteToast = (id: string) => () => {
    serviceRef.current?.deleteToast(id);
  };

  return (
    <ErrorBoundary>
      <Toast
        toastList={toasts}
        config={config}
        deleteToast={deleteToast}
        toastDeleteId={toastDeleteId}
      />
    </ErrorBoundary>
  );
};
