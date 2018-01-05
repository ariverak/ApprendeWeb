import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServices } from '../../services/auth-services/auth.service';
import { Usuario } from '../../models/Usuario';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  //view properties
  user: any = {};  
  user2: any = {}; 
  returnUrl: string;
  errors = [];
  messages = []; 
  errorMessage: string="";
  //login properties
  Usuario:Usuario = new Usuario();
  error = '';
  loading :boolean = false;
  constructor(private router: Router,private authService:AuthServices) {

  }
  ngOnInit() {
   localStorage.removeItem("session");
  }

   login() {
    this.loading = true;
     this.authService.login(this.Usuario).subscribe( (result)=>{
      if(result){
         this.router.navigate(["web","home"]);
      }else{
        this.error = "credenciales incorrectas";
        this.loading = false;
      }
    },(err)=>{
      this.error = "Error inesperado";
        this.loading = false;
    });
  
  }

}
