import { Component, OnInit } from '@angular/core';
import { FoodService } from './../food.service';
import { Food } from './../food.model';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],
})
export class FoodListComponent implements OnInit {
  foods: Food[];

  constructor(public foodService: FoodService) {}

  ngOnInit(): void {
    this.foodService.getFoods().subscribe((foods: Food[]) => {
      this.foods = foods;
    });
  }
}
