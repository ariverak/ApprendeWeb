import { NgModule,ModuleWithProviders} from '@angular/core';

import { LoginComponent} from './components';


const COMPONENTS = [
  LoginComponent
];
@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    
  ],
  exports:[
    ...COMPONENTS
  ],
  providers: []
})
export class AuthModule { 
  
}
