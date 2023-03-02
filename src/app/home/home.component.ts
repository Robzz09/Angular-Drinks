import {Component, OnInit} from '@angular/core';
import {ApiService} from "../_service/api.service";
import {Meter} from "../_model/meter.model";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  /*
    styleUrls: ['./app.component.scss']
  */
})
export class HomeComponent implements OnInit {
  title = 'Home';
  meters: Meter[] = [];
  select!: Meter;
  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(({meters})=>{
      this.meters = meters
    })}

    onDeleteMeter(meterId: number){
      
    }
    onSelectMeter(meter: Meter){
      this.select = meter;
    }

  getMeters() {
    this.apiService.getMeterList().subscribe(meters => {
    this.meters = meters;
    })
  }

  getMeterId() {
    this.apiService.getMeterList().subscribe(meters => {
      this.meters = meters;
    })
  }
}
