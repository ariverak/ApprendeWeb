import {NgModule} from '@angular/core'
import {RouterModule,Routes} from '@angular/router'

//components
import {HomeComponent} from './components/home/home.component'
import {PagesComponent} from './pages.component'

const pagesRoutes:Routes = [
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
        RouterModule.forChild(pagesRoutes)
    ],
    exports : [RouterModule]
})
export class PagesRoutingModule {}