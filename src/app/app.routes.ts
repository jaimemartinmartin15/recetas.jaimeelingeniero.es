import { Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { RecipeDetailsComponent } from "../recipe-details/recipe-details.component";

export const routes: Routes = [
  {
    path: ":recipeName",
    component: RecipeDetailsComponent,
  },
  {
    path: "",
    pathMatch: "full",
    component: HomeComponent,
  },
  {
    path: "**",
    redirectTo: "",
  },
];
