import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS,HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { routing,appRoutingProviders } from './app.routing';
import { NbThemeModule } from '@nebular/theme';
import { AuthHttpInterceptor } from './services/http.interceptor';
import { AuthModule } from './modules/auth/auth.module';
import { PagesModule } from './modules/pages/pages.module';

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
    HttpClientModule,
    NgbModule.forRoot(),
    NbThemeModule.forRoot({ name: 'cosmic' })
  ],
  providers: [appRoutingProviders,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
