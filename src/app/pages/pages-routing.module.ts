import {NgModule} from '@angular/core'
import {RouterModule,Routes} from '@angular/router'

//components
import {HomeComponent} from './components/home/home.component'
import {PagesComponent} from './pages.component'

const authRoutes:Routes = [
    {
        path:'web',
        component : PagesComponent,
        children: [
            {path: "home",component : HomeComponent}
        ]
    }

]

@NgModule({
    imports: [
        RouterModule.forChild(authRoutes)
    ],
    exports : [RouterModule]
})
export class PagesRoutingModule {}