import { ComponentRef } from '@angular/core';
import { ModalComponent } from './modal.component';

export interface ModalConfig {
  title: String;
  component: ComponentRef<ModalComponent>;
}
