import { Component, HostListener } from "@angular/core";

@Component({
  template: "",
})
export class RecipeDetailsComponent {
  @HostListener("click", ["$event"])
  public toggleListElement(event: MouseEvent) {
    const liElement = (event.target as HTMLElement).closest("li");
    liElement?.classList.toggle("completed");
  }
}
