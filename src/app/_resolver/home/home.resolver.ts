import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/app/_service/api.service';
import { Meter } from '../../_model/meter.model';
@Injectable({
  providedIn: 'root'
})
export class HomeResolver implements Resolve<Meter[]> {
  constructor(private service: ApiService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Meter[]>  {
    return this.service.getMeterList();
  }
}
