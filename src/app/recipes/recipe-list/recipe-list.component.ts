import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Poop", "A big steamy pile of poop", "https://upload.wikimedia.org/wikipedia/commons/3/3f/Poop_vector_design.jpg"),
    new Recipe("Another Poop", "A big steamy pile of poop", "https://upload.wikimedia.org/wikipedia/commons/3/3f/Poop_vector_design.jpg"),
  ];
  @Output() recipeEmit = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeEmit.emit(recipe);
  }

}
