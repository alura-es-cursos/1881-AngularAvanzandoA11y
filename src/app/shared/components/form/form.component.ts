import { Component, Input, OnInit, ComponentRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() component!: ComponentRef<ModalComponent>;
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  cerrarComponente(): void {
    console.log('Cerrar componente');
    this.component.destroy();
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }
    console.log('Enviar el formulario');
    console.log(this.form.value);
  }
}
