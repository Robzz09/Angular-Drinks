import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {ApiService} from "./_service/api.service";
import {DrinkDetailComponent} from "./drink-detail/drink-detail.component";
import { BlockUIModule } from 'ng-block-ui';
import { BlockUIHttpModule } from 'ng-block-ui/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DrinksPageComponent } from './drinks-page/drinks-page.component';
import { DrinkIngredientsComponent } from './drink-ingredients/drink-ingredients.component';
import { NavbarComponent } from './_shared/navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DrinkDetailComponent,
    DrinksPageComponent,
    DrinkIngredientsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BlockUIModule.forRoot(),
    BlockUIHttpModule.forRoot(),
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
