import { Component, HostBinding, OnInit } from '@angular/core';
import { ModalConfig } from './modal-config';
import { fade } from '../../animations/fade';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [fade],
})
export class ModalComponent implements OnInit {
  @HostBinding('@fade') fade = true;
  constructor() {}

  ngOnInit(): void {}

  modalConfig!: ModalConfig;
}
