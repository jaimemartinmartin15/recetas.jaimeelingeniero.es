// core/services/recipe.service.ts
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { MACARRONES_DETAILS } from "../recipes/macarrones/macarrones-details";
import { MACARRONES_PREVIEW } from "../recipes/macarrones/macarrones-preview";
import { RecipeDetails } from "../recipes/models/recipe-details";
import { RecipePreview } from "../recipes/models/recipe-preview";
import { MOUSE_DE_CHOCOLATE_DETAILS } from "../recipes/mouse-de-chocolate/mouse-de-chocolate-details";
import { MOUSE_DE_CHOCOLATE_PREVIEW } from "../recipes/mouse-de-chocolate/mouse-de-chocolate-preview";
import { SANDWITCH_DETAILS } from "../recipes/sandwitch/sandwitch-details";
import { SANDWITCH_PREVIEW } from "../recipes/sandwitch/sandwitch-preview";

@Injectable({ providedIn: "root" })
export class RecipeService {
  getPreviews(): Observable<RecipePreview[]> {
    return of([MACARRONES_PREVIEW, SANDWITCH_PREVIEW, MOUSE_DE_CHOCOLATE_PREVIEW]);
  }

  getRecipeDetails(name: string): Observable<RecipeDetails | undefined> {
    const RECIPE_DETAILS = [MACARRONES_DETAILS, SANDWITCH_DETAILS, MOUSE_DE_CHOCOLATE_DETAILS];
    return of(RECIPE_DETAILS.find((r) => r.name.replaceAll(" ", "-").toLowerCase() === name));
  }
}
