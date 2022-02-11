import { Component, OnInit } from '@angular/core';
import { ModalConfig } from './modal-config';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  modalConfig!: ModalConfig;
}
