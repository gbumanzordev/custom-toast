import { NgModule, ModuleWithProviders } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';

import { ToastComponent } from './components/toast/toast.component';
import { defaultToastConfig, TOAST_CONFIG_TOKEN } from './utils/toast-config';
import { SanitizePipe } from './utils/sanitize.pipe';

@NgModule({
  imports: [OverlayModule],
  declarations: [ToastComponent, SanitizePipe, SanitizePipe],
  entryComponents: [ToastComponent]
})
export class ToastModule {
  public static forRoot(config = defaultToastConfig): ModuleWithProviders {
    return {
      ngModule: ToastModule,
      providers: [
        {
          provide: TOAST_CONFIG_TOKEN,
          useValue: { ...defaultToastConfig, ...config },
        },
      ],
    };
  }
}
