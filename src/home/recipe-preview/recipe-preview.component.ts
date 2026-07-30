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

  @HostBinding("style.color")
  get color() {
    return this.recipePreview.color;
  }

  @HostListener("click")
  public openRecipe() {
    this.router.navigate([this.recipePreview.name.replaceAll(" ", "-").toLowerCase()]);
  }

  public constructor(private readonly router: Router) {}
}
