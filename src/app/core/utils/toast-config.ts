import { InjectionToken, TemplateRef } from '@angular/core';

export class ToastData {
  type: ToastType;
  heading?: string;
  bottomLine?: string;
  template?: TemplateRef<any>;
  templateContext?: {};
}

export type ToastType = 'warning' | 'info' | 'success';

export interface ToastConfig {
  position?: {
    top: number;
    left: number;
  };
  animation?: {
    fadeOut: number;
    fadeIn: number;
  };
}

export const defaultToastConfig: ToastConfig = {
  position: {
    top: 0,
    left: 0,
  },
  animation: {
    fadeOut: 500,
    fadeIn: 300,
  },
};

export const TOAST_CONFIG_TOKEN = new InjectionToken('toast-config');
