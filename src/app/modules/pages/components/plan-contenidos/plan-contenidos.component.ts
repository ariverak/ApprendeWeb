import { Component, OnInit } from '@angular/core';
import { PlanContenidosService } from '../../services/plan-contenidos-services/plan-contenidos.service';

@Component({
  selector: 'pages-pc',
  templateUrl: './plan-contenidos.component.html',
  styleUrls :["./plan-contenidos.component.css"]
})
export class PlanContenidosComponent implements OnInit {
  cursos = [];
  asignaturas = [];
  currentCurso:any;
  constructor(private planContenidosService:PlanContenidosService) { }

  ngOnInit() {
    this.planContenidosService.getCursos().subscribe(result=>{
        if(result){
          this.cursos = result;
        }
    });
  }
  changeCurso($event) {
    this.planContenidosService.getAsignaturas($event).subscribe(result=>{
      if(result){
        this.asignaturas = result;
      }
  });
  }
  changeAsignatura($event) {
    console.log($event);
  }
}
