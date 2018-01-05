import {NgModule} from '@angular/core'
import {RouterModule,Routes} from '@angular/router'

//components
import {LoginComponent} from './components/login/login.component'
import {AuthComponent} from './auth.component'
import {RequestPasswordComponent} from './components/request-password/request.password.component'
import {ResetPasswordComponent} from './components/reset-password/reset-password.component'

const authRoutes:Routes = [
    {
        path:'auth',
        component : AuthComponent,
        children: [
            {path: "login",component : LoginComponent},
            {path: "recuperar",component : RequestPasswordComponent},
            {path: "reset",component : ResetPasswordComponent}
        ]
    }

]

@NgModule({
    imports: [
        RouterModule.forChild(authRoutes)
    ],
    exports : [RouterModule]
})
export class AuthRoutingModule {}