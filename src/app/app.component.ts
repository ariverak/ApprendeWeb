import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  title = 'app';
 
  constructor(private router:Router) {
  }
  ngOnInit(){
    this.router.navigate(["/web/plan-contenidos"]);
  }
}
