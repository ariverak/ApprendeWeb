import {NgModule} from '@angular/core'; 
import {CommonModule} from '@angular/common'; 
import {FormsModule} from '@angular/forms'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { authComponents } from './components';
import { AuthComponent } from './auth.component';
import {AuthRoutingModule} from './auth-routing.module'

import { AuthServices }   from './services/';
import { HttpClientModule } from '@angular/common/http';

import { NbThemeModule,NbCardModule,NbCheckboxModule,NbLayoutModule } from '@nebular/theme';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

const NB_MODULES = [
  NbCardModule,NbCheckboxModule,NbLayoutModule
]

@NgModule({
    imports : [
        NbThemeModule.forRoot({name:"default"}),
        NgbModule.forRoot(),
        AuthRoutingModule,
        CommonModule,
        FormsModule,
        HttpClientModule,
        ...NB_MODULES
    ],
    declarations : [...authComponents,AuthComponent],
    providers:[AuthServices]
    
})
export class AuthModule{
    // static forRoot():ModuleWithProviders{
    //     return {
    //         ngModule : AuthModule,
    //         providers:[
    //             AuthServices,
    //             {
    //             provide: HTTP_INTERCEPTORS,
    //             useClass: AuthHttpInterceptor,
    //             multi: true
    //           }]
    //     }
    // }
}