import { Component, Input, OnInit, ComponentRef } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() component!: ComponentRef<ModalComponent>;

  constructor() {}

  ngOnInit(): void {}

  cerrarComponente(): void {
    console.log('Cerrar componente');
    this.component.destroy();
  }
}
