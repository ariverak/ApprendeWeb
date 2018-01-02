import {NgModule} from '@angular/core'; 
import {CommonModule} from '@angular/common'; 
import {FormsModule} from '@angular/forms'; 
import {HttpModule} from '@angular/http'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//componentes
import { RequestPasswordComponent } from './request-password/request.password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { authComponents } from './';
import {AuthRoutingModule} from './auth-routing.module'

import { NbThemeModule,NbCardModule,NbCheckboxModule,NbLayoutModule } from '@nebular/theme';
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
        HttpModule,
        ...NB_MODULES
    ],
    declarations : [...authComponents]
})
export class AuthModule{}