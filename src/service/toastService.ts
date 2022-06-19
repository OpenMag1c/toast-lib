import IToastConfig from "types/IToastConfig";
import IToast from "types/IToast";
import defaultToastConfig from "../constants/toastDefault";

export type toastCallType = (text: string) => void;

export type toastActionType = (toasts: IToast[]) => void;

export interface IToastService {
  config: IToastConfig;
  toasts: IToast[];
  observers: toastActionType[];
  subscribe: (fn: toastActionType) => void;
  unsubscribe: (fn: toastActionType) => void;
  addToast: (toast: IToast) => void;
  deleteToast: (id: string) => void;
}

export const toastService: IToastService = {
  config: defaultToastConfig,
  toasts: [],
  observers: [],

  addToast(toast) {
    this.toasts.push(toast);
    this.observers.forEach((subscriber) => subscriber(this.toasts));
  },

  deleteToast(id) {
    this.toasts = this.toasts.filter((toast) => toast.id !== id);
    this.observers.forEach((subscriber) => subscriber(this.toasts));
  },

  subscribe(fn) {
    this.observers.push(fn);
  },

  unsubscribe(fn) {
    this.observers = this.observers.filter((subscriber) => subscriber !== fn);
  },
};
