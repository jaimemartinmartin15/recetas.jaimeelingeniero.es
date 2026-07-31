import { Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";

export const routes: Routes = [
  {
    path: "sopa-maravilla",
    children: [
      { path: "", loadComponent: () => import("../recipes/sopa-maravilla/sopa-maravilla.component").then((m) => m.SopaMaravillaComponent) },
      { path: "**", redirectTo: "" },
    ],
  },
  { path: "", pathMatch: "full", component: HomeComponent },
  { path: "**", redirectTo: "" },
];
