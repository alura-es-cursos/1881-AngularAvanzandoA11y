import { Component, ComponentRef, ViewChild } from '@angular/core';
import { ComponentLoaderDirective } from './shared/directives/componentLoader/component-loader.directive';
import { ModalComponent } from './shared/components/modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(ComponentLoaderDirective)
  componentLoader!: ComponentLoaderDirective;

  component!: ComponentRef<ModalComponent>;

  mostrarModal(): void {
    this.component =
      this.componentLoader.viewContainerRef.createComponent(ModalComponent);
    console.log(this.component);

    this.component.instance.modalConfig = {
      title: 'Formulario de registro',
      component: this.component,
    };
  }
}
