import { Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";

export const routes: Routes = [
  {
    path: "macarrones",
    loadComponent: () => import("../recipes/lunch/macarrones/macarrones").then((m) => m.MacarronesComponent),
  },
  {
    path: "mouse-de-chocolate",
    loadComponent: () => import("../recipes/desserts/mouse-de-chocolate/mouse-de-chocolate").then((m) => m.MouseDeChocolateComponent),
  },
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "**",
    redirectTo: "",
  },
];
