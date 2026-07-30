import { Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";

export const routes: Routes = [
  {
    path: "sopa-maravilla",
    loadComponent: () => import("../recipes/sopa-maravilla/sopa-maravilla.component").then((m) => m.SopaMaravillaComponent),
  },
  // {
  //   path: "sandwitch",
  //   loadComponent: () => import("../recipes/sandwitch/sandwitch.component").then((m) => m.SandwitchComponent),
  // },
  // {
  //   path: "macarrones",
  //   loadComponent: () => import("../recipes/macarrones/macarrones.component").then((m) => m.MacarronesComponent),
  // },
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
