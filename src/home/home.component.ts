import { Component } from "@angular/core";
import { RecipeService } from "../services/recipes.service";
import { RecipePreviewComponent } from "./recipe-preview/recipe-preview.component";
import { RecipePreview } from "../models/recipe-preview";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  imports: [RecipePreviewComponent],
})
export class HomeComponent {
  public recipePreviews: RecipePreview[] = [];

  public constructor(private readonly recipeService: RecipeService) {}

  public ngOnInit() {
    return this.recipeService.getPreviews().subscribe((response) => (this.recipePreviews = response));
  }
}
