import { Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { MacarronesComponent } from "../recipes/macarrones/macarrones.component";

export const routes: Routes = [
  {
    path: "macarrones",
    component: MacarronesComponent,
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
