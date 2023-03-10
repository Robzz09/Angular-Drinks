import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DrinkDetailComponent } from './drink-detail/drink-detail.component';
import { DrinkResolver } from './_resolver/drink.resolver';
import { DrinkIngredientsComponent } from './drink-ingredients/drink-ingredients.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }, // resolve:{meters: HomeResolver}
  {
    path: 'drink/:idDrink',
    component: DrinkDetailComponent,
   resolve: {drink: DrinkResolver}
  },
  {path: 'ingredient/:ingredientName', component: DrinkIngredientsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [DrinkResolver]
})
export class AppRoutingModule {}
