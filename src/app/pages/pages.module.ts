import {NgModule} from '@angular/core'; 
import {CommonModule} from '@angular/common'; 
import {FormsModule} from '@angular/forms'; 
import {HttpModule} from '@angular/http'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { pagesComponents } from './components';
import { PagesComponent } from './pages.component';
import {PagesRoutingModule} from './pages-routing.module'

import { ThemeModule } from '../theme/theme.module';

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
    declarations : [...pagesComponents,PagesComponent]
})
export class PagesModule{}