import {NgModule} from '@angular/core'; 
import {CommonModule} from '@angular/common'; 
import {FormsModule} from '@angular/forms'; 
import {HttpModule} from '@angular/http'; 
import { NgbModule,NgbRadioGroup } from '@ng-bootstrap/ng-bootstrap';

import { pagesComponents } from './components';
import { PagesComponent } from './pages.component';
import { PlanContenidosService } from './services/plan-contenidos-services/plan-contenidos.service';
import {PagesRoutingModule} from './pages-routing.module'
import { ThemeModule } from '../theme/theme.module';
import { TreeModule } from 'ng2-tree';
import { NbThemeModule,NbCardModule,NbCheckboxModule,NbLayoutModule } from '@nebular/theme';
const NB_MODULES = [
  NbCardModule,NbCheckboxModule,NbLayoutModule
]

@NgModule({
    imports : [
        NbThemeModule.forRoot({name:"cosmic"}),
        NgbModule.forRoot(),
        ThemeModule.forRoot(),
        PagesRoutingModule,
        CommonModule,
        FormsModule,
        HttpModule,
        ...NB_MODULES
    ],
    declarations : [...pagesComponents,PagesComponent],
    providers: [PlanContenidosService,NgbRadioGroup],
    exports : []
})
export class PagesModule{}