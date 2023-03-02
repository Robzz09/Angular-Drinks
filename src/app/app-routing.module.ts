import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PippingComponent } from './pipping/pipping.component';
import { MeterDetailComponent } from './meter/meter-detail.component';
import { HomeResolver } from './_resolver/home/home.resolver';
import { MeterResolver } from './_resolver/meter/meter.resolver';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './_interceptor/auth.interceptor';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, resolve:{meters: HomeResolver} },
  {path: 'pippo',component: PippingComponent},
  {
    path: 'meter/:id',
    component: MeterDetailComponent,
    resolve: { meters: MeterResolver },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [HomeResolver,MeterResolver,AuthInterceptor]
})
export class AppRoutingModule {}
