import { Component, OnInit } from '@angular/core';
import { TreeModel } from 'ng2-tree';
@Component({
  selector: 'pc-unidades',
  templateUrl: './unidades.component.html',
  styleUrls:['./unidades.component.css']
})
export class PCUnidadesComponent implements OnInit {

  currentUnidad:any;
  currentIndex:number = 0;
  unidades:any[] = [
    {number:1,title:"Energias"},
    {number:2,title:"El sistema solar"},
    {number:3,title:"Las Plantas"}
  ]
  constructor() { }

  ngOnInit() {
    this.currentUnidad = this.unidades[this.currentIndex];
  }
  contenidosBack(){
    this.currentIndex = --this.currentIndex;
    console.log(this.currentIndex);
    this.currentUnidad = this.unidades[this.currentIndex];
  }
  contenidosNext(){
    this.currentIndex = ++this.currentIndex;
    console.log(this.currentIndex);
    this.currentUnidad = this.unidades[this.currentIndex];
  }
}
