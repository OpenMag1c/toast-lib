import React, { FC, useState, useEffect, useRef } from "react";

import { Toast } from "@components/Toast";
import IToast from "types/IToast";
import { IToastService } from "@service/toastService";
import ToastManager from "@service/toastManager";

export interface ToastListProps {
  toasts?: IToast[];
}

export const ToastContainer: FC<ToastListProps> = () => {
  const serviceRef = useRef<IToastService>();
  const [toasts, setToasts] = useState<IToast[]>([]);

  useEffect(() => {
    let service = serviceRef.current;
    const fn = (data: IToast[]) => {
      console.log(data);
      setToasts([...data]);
    };
    service = ToastManager.getToastService();
    service.subscribe(fn);

    return () => {
      service?.unsubscribe(fn);
    };
  }, []);

  return <Toast toastList={toasts} />;
};
