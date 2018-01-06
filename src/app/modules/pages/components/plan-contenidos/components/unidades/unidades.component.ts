import { Component, OnInit } from '@angular/core';
import { TreeModel } from 'ng2-tree';
@Component({
  selector: 'pc-unidades',
  templateUrl: './unidades.component.html',
  styleUrls:['./unidades.component.css']
})
export class PCUnidadesComponent implements OnInit {

  constructor() { }
  // tree: TreeModel = {
  //   value: 'Aplican el álgebra de conjuntos en la resolución de problemas.',
  //   children: [{
  //     value: 'Teoria de Conjuntos',
  //   }, {
  //     value: 'Igualdad entre Conjuntos'
  //   },
  //   {
  //     value: 'Igualdad entre Conjuntos'
  //   }]
  // };
  ngOnInit() {
  }

}
