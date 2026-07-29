import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { RecipePreview } from "../models/recipe-preview";
import { MACARRONES_PREVIEW } from "../recipes/macarrones/macarrones-preview";
import { MOUSE_DE_CHOCOLATE_PREVIEW } from "../recipes/mouse-de-chocolate/mouse-de-chocolate-preview";
import { SANDWITCH_PREVIEW } from "../recipes/sandwitch/sandwitch-preview";
import { SOPA_MARAVILLA_PREVIEW } from "../recipes/sopa-maravilla/sopa-maravilla-preview";

@Injectable({ providedIn: "root" })
export class RecipeService {
  getPreviews(): Observable<RecipePreview[]> {
    return of([SOPA_MARAVILLA_PREVIEW, MACARRONES_PREVIEW, SANDWITCH_PREVIEW, MOUSE_DE_CHOCOLATE_PREVIEW]);
  }
}
