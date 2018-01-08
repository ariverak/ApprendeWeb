import { Component, OnInit } from '@angular/core'
import { NbThemeService, NbMediaBreakpoint, NbMediaBreakpointsService } from '@nebular/theme';
import { MensajeriaService } from '../../services/mensajeria.service';

@Component({
  selector: 'pages-mensajeria',
  templateUrl: './mensajeria.component.html',
  styleUrls: ['./mensajeria.component.scss']
})
export class MensajeriaComponent implements OnInit {
  contacts: any[];
  recent: any[];
  picture:any = "assets/alumno_icon.png"
  constructor(private mensajeriaService:MensajeriaService) {

     }

  ngOnInit() {
    this.mensajeriaService.getAlumnos().subscribe(result=>{
      this.contacts = result.map(element => {
          element.Nombre = `${element.Nombre} ${element.Apellido} (${element.Grado} ${element.Letra})`
          return element;
      });;
    });
  }

}
