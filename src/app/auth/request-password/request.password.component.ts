import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-request',
  templateUrl: './request.password.component.html',
})
export class RequestPasswordComponent {

  usuario: any = {};
  submitted: boolean;
  errors = [];
  messages = [];
  errorMessage= String; 
  constructor() {
    this.submitted = false;
  }
  
  requestPass(){
  
  }
}
