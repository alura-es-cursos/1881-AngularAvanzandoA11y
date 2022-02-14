import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { FormModule } from '../form/form.module';
import { FocusTrapDirective } from '../../directives/focusTrap/focus-trap.directive';
import { FocusBackDirective } from '../../directives/focusBack/focus-back.directive';

@NgModule({
  declarations: [ModalComponent, FocusTrapDirective, FocusBackDirective],
  imports: [CommonModule, FormModule],
  exports: [ModalComponent],
})
export class ModalModule {}
