import { Component } from "@angular/core";
import { RecipePreview } from "./recipe-preview/recipe-preview";
import { RecipePreviewComponent } from "./recipe-preview/recipe-preview.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  imports: [RecipePreviewComponent],
})
export class HomeComponent {
  public recipePreviews: RecipePreview[] = [
    { name: "Sopa maravilla", image: "/assets/sopa-maravilla/images/preview.svg" },
    // schematic placeholder to enter more recipes
  ];
}
