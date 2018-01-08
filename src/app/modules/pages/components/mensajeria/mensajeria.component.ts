import { Component, OnInit } from '@angular/core'
import { NbThemeService, NbMediaBreakpoint, NbMediaBreakpointsService } from '@nebular/theme';
import { MensajeriaService } from '../../services/mensajeria.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'pages-mensajeria',
  templateUrl: './mensajeria.component.html',
  styleUrls: ['./mensajeria.component.scss']
})
export class MensajeriaComponent implements OnInit {
  contacts: any[];
  recent: any[];
  picture:any = "assets/alumno_icon.png"
  constructor(private mensajeriaService:MensajeriaService,private modalService: NgbModal) {

     }

  ngOnInit() {
    this.mensajeriaService.getAlumnos().subscribe(result=>{
      this.contacts = result.map(element => {
          element.Nombre = `${element.Nombre} ${element.Apellido} (${element.Grado} ${element.Letra})`
          return element;
      });;
    });
  }

  showLargeModal() {
    const activeModal = this.modalService.open(ModalComponent, { size: 'lg', container: 'nb-layout' });
    activeModal.componentInstance.modalHeader = 'Large Modal';
  }
}
