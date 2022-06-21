import { IToastConfig } from "types/IToastConfig";
import { IToast } from "types/IToast";
import { defaultToastConfig } from "@constants/defaultToastConfig";

export type toastCallType = (text: string) => void;
export type toastActionType = (toasts: IToast[], id?: string) => void;

export interface IToastService {
  config: IToastConfig;
  toasts: IToast[];
  observersAdd: toastActionType[];
  observersDelete: toastActionType[];
  subscribeAdd: (fn: toastActionType) => void;
  unsubscribeAdd: (fn: toastActionType) => void;
  subscribeDelete: (fn: toastActionType) => void;
  unsubscribeDelete: (fn: toastActionType) => void;
  addToast: (toast: IToast) => void;
  deleteToast: (id: string) => void;
}

export const toastService: IToastService = {
  config: defaultToastConfig,
  toasts: [],
  observersAdd: [],
  observersDelete: [],

  addToast(toast) {
    this.toasts.push(toast);
    this.observersAdd.forEach((subscriber) => subscriber(this.toasts));
  },

  deleteToast(id) {
    this.toasts = this.toasts.filter((toast) => toast.id !== id);
    this.observersDelete.forEach((subscriber) => subscriber(this.toasts, id));
  },

  subscribeAdd(fn) {
    this.observersAdd.push(fn);
  },

  unsubscribeAdd(fn) {
    this.observersAdd = this.observersAdd.filter(
      (subscriber) => subscriber !== fn
    );
  },

  subscribeDelete(fn) {
    this.observersDelete.push(fn);
  },

  unsubscribeDelete(fn) {
    this.observersDelete = this.observersDelete.filter(
      (subscriber) => subscriber !== fn
    );
  },
};
