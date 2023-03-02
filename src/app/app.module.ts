import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import { PippingComponent } from './pipping/pipping.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {ApiService} from "./_service/api.service";
import {MeterDetailComponent} from "./meter/meter-detail.component";
import { MeterResolver } from './_resolver/meter/meter.resolver';
import { HomeResolver } from './_resolver/home/home.resolver';
import { BlockUIModule } from 'ng-block-ui';
import { BlockUIHttpModule } from 'ng-block-ui/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthInterceptor } from './_interceptor/auth.interceptor';
import { ErrorInterceptor } from './_interceptor/error.interceptor';
import { MeterBadgeComponent } from './_shared/meter-badge/meter-badge.component';
import { MeterListComponent } from './_shared/meter-list/meter-list.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PippingComponent,
    MeterDetailComponent,
    MeterBadgeComponent,
    MeterListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BlockUIModule.forRoot(),
    BlockUIHttpModule.forRoot(),
    NgbModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
