import { Component } from "@angular/core";
import { RecipeDetailsComponent } from "../../recipe-details/recipe-details.component";

@Component({
  selector: 'app-<%= dasherize(name) %>',
  templateUrl: './<%= dasherize(name) %>.component.html',
  styleUrls: ['../../recipe-details/recipe-details.scss'],
})
export class <%= classify(name) %>Component extends RecipeDetailsComponent {}
