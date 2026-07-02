import { Component } from "@angular/core";
import { RecipeDetailsComponent } from "../../recipe-details/recipe-details.component";

@Component({
  selector: "app-macarrones",
  templateUrl: "./macarrones.component.html",
  styleUrls: ["../../recipe-details/recipe-details.scss"],
})
export class MacarronesComponent extends RecipeDetailsComponent {}
