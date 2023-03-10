import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from "../_service/api.service";
import {Drink} from "../_model/drink.model";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  /*
    styleUrls: ['./app.component.scss']
  */
})
export class HomeComponent implements OnInit {
  drinks: any[] = [];
  letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  firstLetter = '';
  @Input() cocktail!: string;
  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.changeFirstLetter('A');
  }
  changeFirstLetter(letter: string) {
    this.firstLetter = letter;
    this.apiService
      .searchCocktailByFirstLetter(this.firstLetter)
      .subscribe((response: any) => {
        this.drinks = response.drinks;
      });
  }
  searchThis(cocktail: any) {
    console.log(cocktail);
    this.apiService.getCocktailByName(cocktail)
      .subscribe( (response: any) => {
        console.log(response);
        this.drinks = response.drinks;
    })
  }
}
