import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  user: any = {};  
  user2: any = {}; 
  returnUrl: string;
  errors = [];
  messages = []; 
  errorMessage: string="";
  idusuario:string;

  constructor(private router: Router,
              private route: ActivatedRoute
            ) {
  }
  
  ngOnInit() {

  }

  login() {
    this.router.navigate(["web","home"]);
  }

}
