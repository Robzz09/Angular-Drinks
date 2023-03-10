import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../_service/api.service';

@Component({
  selector: 'app-drink-ingredients',
  templateUrl: './drink-ingredients.component.html',
  styleUrls: ['./drink-ingredients.component.scss']
})
export class DrinkIngredientsComponent implements OnInit{
  ingredient: any = [];
   drink: any;
  
  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute){}
 
  
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ingredient}) => {
      this.ingredient = ingredient;
    })
    const ingredientName = this.activatedRoute.snapshot.paramMap.get('ingredientName')!;
    this.apiService.getIngredient(ingredientName).subscribe((response: any) => {
      console.log(ingredientName);
      this.ingredient = response.ingredients[0]
    })

    this.apiService.getDrinksByIngredient(ingredientName).subscribe((response: any) => {
      console.log(response)
      this.drink = response.drinks;
    })
  }
  // getIngredient(drinkName: string){
  //   this.apiService.getIngredient(drinkName).subscribe({
  //     next: (ingredients: any) =>{
  //       return this.ingredient = ingredients;
  //     }
  //   })
  //   console.log(this.ingredient);
  // }
}
