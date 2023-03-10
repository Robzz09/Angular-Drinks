import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, Observable, of, tap } from 'rxjs';
import { Drink } from '../_model/drink.model';

@Injectable()
export class ApiService {
  private token = '';
  baseUrl = '/api';

  constructor(private http: HttpClient, private router: Router) {}
  searchCocktailByFirstLetter(firstLetter: string) {
    return this.http.get(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + firstLetter
    );
  }
  getCocktailById(id: string) {
    return this.http.get(
      'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id
    );
  }

  getCocktailByName(cocktail: string) {
    return this.http.get(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + cocktail
);
  }
  getDrinkDetail(id: string) {
    return this.http
      .get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id)
      .pipe(
        map((response: any) => {
          return response.drink as Drink;
        })
      );
  }
  getIngredient(ingredient: string): any {
    return this.http.get(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?i=' + ingredient
    );
  }
  // get drinks per ingredient
  getDrinksByIngredient(ingredient: string) {
    return this.http.get(
      'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + ingredient
    );
  }

  lookupDrinkById(id: string) {
    return this.http
      .get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id)
      .pipe(
        map((response: any) => {
          const drink: Drink = response.drinks[0] as Drink;
          drink.ingredients = [];
          drink.instructions = [];
          Object.keys(drink).forEach((key) => {
            const keyName = key as keyof typeof drink;
            if (key.startsWith('strIngredient') && drink[keyName]) {
              const index = key.replace('strIngredient', '');
              const keyMeasure = ('strMeasure' + index) as keyof typeof drink;
              console.log(index);
              drink.ingredients.push({
                name: drink[keyName],
                measure: drink[keyMeasure],
              });
            }
            if (key.startsWith('strInstructions') && drink[keyName]) {
              let lang = key.replace('strInstructions', '');
              if (!lang) {
                lang = 'EN';
              }
              drink.instructions[lang] = drink[keyName];
            }
          });
          return drink;
        })
      );
  }
}
