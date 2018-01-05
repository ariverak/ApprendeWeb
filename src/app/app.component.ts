import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  title = 'Apprende';
 
  constructor(private router:Router) {
  }
  ngOnInit(){
    var session = localStorage.getItem("session");
    if(session){
      this.router.navigate(["/web/home"]);
    }else{
    this.router.navigate(["/auth/login"]);
    }
  }
}
