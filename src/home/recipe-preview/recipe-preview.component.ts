import { Component, HostBinding, HostListener, Input } from "@angular/core";
import { Router } from "@angular/router";
import { RecipePreview } from "../../models/recipe-preview";

@Component({
  selector: "app-recipe-preview",
  templateUrl: "./recipe-preview.component.html",
  styleUrls: ["./recipe-preview.component.scss"],
})
export class RecipePreviewComponent {
  @Input()
  public recipePreview: RecipePreview;

  @HostBinding("attr.easy")
  get difficultyEasy() {
    return this.recipePreview.difficulty === "easy" || null;
  }

  @HostBinding("attr.medium")
  get difficultyMedium() {
    return this.recipePreview.difficulty === "medium" || null;
  }

  @HostBinding("attr.difficult")
  get difficultyDifficult() {
    return this.recipePreview.difficulty === "difficult" || null;
  }

  @HostListener("click")
  public openRecipe() {
    this.router.navigate([this.recipePreview.name.replaceAll(" ", "-").toLowerCase()]);
  }

  public constructor(private readonly router: Router) {}
}
