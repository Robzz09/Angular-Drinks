import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_service/api.service';
import { Meter } from '../_model/meter.model';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './meter-detail.component.html',
  /*
    styleUrls: ['./app.component.scss']
  */
})
export class MeterDetailComponent implements OnInit {
  title = 'Detail';
  meter: Partial<Meter> = {}; //l'oggetto meter può contenere le proprità di METER anche in modo parziale utilizzando PARTIAL davanti
  constructor(private apiService: ApiService,private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({meters})=>{
      this.meter = meters
    },(error)=>{
      console.log(error);
      
    })

  }

}
