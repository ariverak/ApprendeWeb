import {NgModule} from '@angular/core'
import {RouterModule,Routes} from '@angular/router'

//components
import {HomeComponent} from './components/home/home.component'
import {PlanContenidosComponent} from './components/plan-contenidos/plan-contenidos.component'
import {PagesComponent} from './pages.component'
import { MensajeriaComponent } from './components/mensajeria/mensajeria.component';

const pagesRoutes:Routes = [
    {
        path:'web',
        component : PagesComponent,
        children: [
            {path: "home",component : HomeComponent},
            {path: "plan-contenidos",component : PlanContenidosComponent},
            {path: "mensajeria",component : MensajeriaComponent}
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(pagesRoutes)
    ],
    exports : [RouterModule]
})
export class PagesRoutingModule {}