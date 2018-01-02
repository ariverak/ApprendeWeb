import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { routing,appRoutingProviders } from './app.routing';
import { NbThemeModule } from '@nebular/theme';
import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    routing,
    BrowserModule,
    AuthModule,
    PagesModule,
    CommonModule,
    FormsModule,
    NgbModule.forRoot(),
    NbThemeModule.forRoot({ name: 'cosmic' })
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
