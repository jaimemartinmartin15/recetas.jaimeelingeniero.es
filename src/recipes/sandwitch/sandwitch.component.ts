import { Component } from "@angular/core";
import { RecipeDetailsComponent } from "../../recipe-details/recipe-details.component";

@Component({
  selector: "app-sandwitch",
  templateUrl: "./sandwitch.component.html",
  styleUrls: ["../../recipe-details/recipe-details.scss"],
})
export class SandwitchComponent extends RecipeDetailsComponent {}
