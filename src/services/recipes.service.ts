import { Injectable } from "@angular/core";
import { from, Observable, of } from "rxjs";
import { MACARRONES_PREVIEW } from "../recipes/macarrones/macarrones-preview";
import { RecipeDetails } from "../recipes/models/recipe-details";
import { RecipePreview } from "../recipes/models/recipe-preview";
import { MOUSE_DE_CHOCOLATE_PREVIEW } from "../recipes/mouse-de-chocolate/mouse-de-chocolate-preview";
import { SANDWITCH_PREVIEW } from "../recipes/sandwitch/sandwitch-preview";

@Injectable({ providedIn: "root" })
export class RecipeService {
  getPreviews(): Observable<RecipePreview[]> {
    return of([MACARRONES_PREVIEW, SANDWITCH_PREVIEW, MOUSE_DE_CHOCOLATE_PREVIEW]);
  }

  getRecipeDetails(name: string): Observable<RecipeDetails | undefined> {
    const RECIPE_DETAILS_MAPPING: Record<string, () => Promise<any>> = {
      macarrones: () => import("../recipes/macarrones/macarrones-details").then((m) => m.MACARRONES_DETAILS),
      sandwitch: () => import("../recipes/sandwitch/sandwitch-details").then((m) => m.SANDWITCH_DETAILS),
      "mouse-de-chocolate": () => import("../recipes/mouse-de-chocolate/mouse-de-chocolate-details").then((m) => m.MOUSE_DE_CHOCOLATE_DETAILS),
    };

    const loader = RECIPE_DETAILS_MAPPING[name];
    if (!loader) return of(undefined);
    return from(loader());
  }
}
