import {Injectable, Injector} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
//import { Usuario } from '../../models/Usuario';
@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {

    constructor() {
    }
    intercept(req:HttpRequest<any>,next:HttpHandler){
        let token = this.getAccessToken();
        if(token){
            req = req.clone({
                setHeaders: {
                  Authorization: `Bearer ${token}`
                }
              });
        }
        return next.handle(req);
    }
    getAccessToken():string{
        let session = localStorage.getItem("session");
        if(session){
           let token = JSON.parse(session).access_token;  
           return  (token)? token : null;   
        }else{
            return null;
        }
     }
}
