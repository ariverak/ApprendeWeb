import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'mensajeria-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  
    constructor(private activeModal: NgbActiveModal) { }
    closeModal() {
        this.activeModal.close();
      }
}