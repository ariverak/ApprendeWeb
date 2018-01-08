import {NgModule} from '@angular/core'; 
import {CommonModule} from '@angular/common'; 
import {FormsModule} from '@angular/forms'; 
import {HttpModule} from '@angular/http'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { pagesComponents,ModalComponent } from './components';
import { CKEditorModule } from 'ng2-ckeditor';
import { PagesComponent } from './pages.component';
import { pagesServices } from './services/';
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
        CKEditorModule,
        PagesRoutingModule,
        CommonModule,
        FormsModule,
        HttpModule,
        ...NB_MODULES
    ],
    declarations : [...pagesComponents,PagesComponent,ModalComponent],
    entryComponents: [
        ModalComponent,
      ],
    providers: [...pagesServices],
    exports : []
})
export class PagesModule{}