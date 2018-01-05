import {Injectable,Injector} from '@angular/core'
import {HttpClient,HttpHeaders,HttpResponse} from '@angular/common/http'
import {Observable} from 'rxjs/Observable'
import {Router} from '@angular/router'
import {Usuario} from '../../models/Usuario'
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthServices{
    private apiUrl:string = "http://201.217.241.114:3002/api/";

    constructor(private http:HttpClient,private router:Router,
        private inj:Injector) {

    }

      login(Usuario:Usuario):Observable<boolean>{
        console.log(Usuario);
        let body = JSON.stringify({nick: Usuario.nick,clave: Usuario.password});
        let headers = new HttpHeaders({"Content-Type":"application/json"});
        let options = {headers : headers}
        return this.http.post(this.getUrl("usuarios/authenticate"),body,options)
        .map(this.getDatos).catch(this.error);
        }

        logout():void{
           localStorage.removeItem("session");
            this.router.navigate(["/"]);
        }
       

        private error(error: any) {
            let msg = (error.message) ? error.message : 'Error desconocido';
            console.error(msg);
            return Observable.throw(msg);
        }

    private getDatos(data:HttpResponse<any>){
        var response:any = data;
        if(response.success){
        var obj = {name:response.name,photo:response.photo,access_token:response.access_token }
        let items = JSON.stringify(obj)
        localStorage.setItem("session",items);
            return true;
        }else{

            return false;
        }
    }

    private getUrl(model:string){
        return this.apiUrl+model;
    }
}