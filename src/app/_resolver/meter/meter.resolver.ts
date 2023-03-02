import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Meter } from '../../_model/meter.model';
import { ApiService } from '../../_service/api.service';

@Injectable({
  providedIn: 'root'
})
export class MeterResolver implements Resolve<Meter> {
  constructor(private service: ApiService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Meter> | Promise<Meter> {
    return this.service.getDevicesMeMeter(route.paramMap.get('id')!);
  }
}
