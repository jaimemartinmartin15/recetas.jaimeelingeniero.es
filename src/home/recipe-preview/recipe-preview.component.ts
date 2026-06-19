import { Component, HostBinding, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-preview',
  templateUrl: './recipe-preview.component.html',
  styleUrls: ['./recipe-preview.component.scss'],
})
export class RecipePreviewComponent {
  @Input()
  public link: string;

  @Input()
  public name: string;

  @Input()
  public timeToCook: string;
  
  @Input()
  @HostBinding('style.background-image')
  public sourceImage: string;

  @HostListener('click')
  public openRecipe() {
    this.router.navigate([this.link]);
  }

  public constructor(private readonly router: Router) {}
}
