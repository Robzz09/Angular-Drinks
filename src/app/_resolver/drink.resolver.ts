import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Drink } from "../_model/drink.model";
import { ApiService } from "../_service/api.service";

@Injectable({ providedIn: 'root' })
export class DrinkResolver implements Resolve<Drink> {

  constructor(private service: ApiService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Drink> | Promise<Drink> {
    return this.service.lookupDrinkById(route.paramMap.get('idDrink')!);
  }
}