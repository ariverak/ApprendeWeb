import {NgModule,ModuleWithProviders} from '@angular/core'; 
import {CommonModule} from '@angular/common'; 
import {FormsModule} from '@angular/forms'; 
import {HttpModule} from '@angular/http'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { themeComponents } from './components';
import { ThemeLayoutComponent } from './layout/theme.layout';

import {   NbActionsModule,
    NbCardModule,
    NbLayoutModule,
    NbMenuModule,
    NbRouteTabsetModule,
    NbSearchModule,
    NbSidebarModule,
    NbTabsetModule,
    NbThemeModule,
    NbUserModule,
    NbCheckboxModule,NbSidebarService,NbMenuService} from '@nebular/theme';
const NB_MODULES = [
    NbActionsModule,
    NbCardModule,
    NbLayoutModule,
    NbMenuModule,
    NbRouteTabsetModule,
    NbSearchModule,
    NbSidebarModule,
    NbTabsetModule,
    NbUserModule,
    NbCheckboxModule,
]


@NgModule({
    imports : [
        NbThemeModule.forRoot({name:"cosmic"}),
        NgbModule.forRoot(),
        CommonModule,
        FormsModule,
        HttpModule,
        ...NB_MODULES
    ],
    providers: [],
    declarations : [...themeComponents,ThemeLayoutComponent],
    exports : [...themeComponents,ThemeLayoutComponent]
})



export class ThemeModule{
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
          ngModule: ThemeModule,
          providers: [NbSidebarService,NbMenuService],
        };
      }
}