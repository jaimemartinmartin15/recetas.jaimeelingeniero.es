import { Component, OnInit, signal, WritableSignal } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RecipeDetails } from "../recipes/models/recipe-details";
import { RecipeService } from "../services/recipes.service";

@Component({
  selector: "app-recipe-details",
  templateUrl: "./recipe-details.component.html",
  styleUrls: ["./recipe-details.component.scss"],
})
export class RecipeDetailsComponent implements OnInit {
  public recipeDetails = signal<RecipeDetails | undefined>(undefined);

  public constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly recipeService: RecipeService,
  ) {}

  public ngOnInit() {
    const recipeName = this.activatedRoute.snapshot.paramMap.get("recipeName")!;
    this.recipeService.getRecipeDetails(recipeName).subscribe((response) => {
      if (response === undefined) {
        this.router.navigate([""]);
        return;
      }

      this.recipeDetails.set(response);
    });
  }
}
