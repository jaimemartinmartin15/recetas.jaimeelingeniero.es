import { Component } from '@angular/core';
import { RecipePreviewComponent } from './recipe-preview/recipe-preview.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [RecipePreviewComponent],
})
export class HomeComponent {}
