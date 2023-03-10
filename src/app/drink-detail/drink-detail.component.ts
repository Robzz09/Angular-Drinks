import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../_service/api.service';
import { Drink } from '../_model/drink.model';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-drink',
  templateUrl: './drink-detail.component.html',
  /*
    styleUrls: ['./app.component.scss']
  */
})
export class DrinkDetailComponent implements OnInit {
  title = 'Detail';
  drink!: Drink;
  @Input() ingredient: any
  constructor(private apiService: ApiService,private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    this.activatedRoute.data.subscribe(({drink})=>{
      this.drink = drink
    },(error)=>{
      console.log(error);
      
    })

  }

}
