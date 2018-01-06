import { Component, OnInit } from '@angular/core';
import { PlanContenidosService } from '../../services/plan-contenidos-services/plan-contenidos.service';
declare var $ : any;
@Component({
  selector: 'pages-pc',
  templateUrl: './plan-contenidos.component.html',
  styleUrls :["./plan-contenidos.component.css"],
})
export class PlanContenidosComponent implements OnInit {
  cursos = [];
  asignaturas = [];
  noCursosMsg:string = "Cargando..";
  noAsignaturasMsg:string = "Cargando..";
  currentCurso:any;
  constructor(private planContenidosService:PlanContenidosService) { }

  ngOnInit() {
    this.planContenidosService.getCursos().subscribe(result=>{
        if(result){
          if(result.length > 0){
            this.noCursosMsg = "[Seleccione Curso]"
          }else
          this.noCursosMsg = "No tiene cursos asociados"
          this.cursos = result;
        }
    });
      $('.fc-event').draggable({
        revert: true,      // immediately snap back to original position
        revertDuration: 0  //
      });
  }
  changeCurso($event) {
    this.planContenidosService.getAsignaturas($event).subscribe(result=>{
      if(result){
        if(result.length > 0){
          this.noAsignaturasMsg = "[Seleccione Asignatura]"
        }else
        this.noAsignaturasMsg = "No tiene asignaturas asociadas"
        this.asignaturas = result;
      }
  });
  }
  changeAsignatura($event) {
    console.log($event);
  }
}
