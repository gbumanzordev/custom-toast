import { Component} from '@angular/core';
import { ToastService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'modal-notification';
  private count = 1;

  constructor(private toastService: ToastService) { }

  showToast() {
    this.toastService.show({
      heading: `¡Cuenta creada con éxito!`,
      bottomLine: 'Hemos enviado una invitación a <b>Roberto</b>',
      type: 'success',
    });

    this.count += 1;
  }
}
