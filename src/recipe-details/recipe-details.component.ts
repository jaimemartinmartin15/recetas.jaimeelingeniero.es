export class RecipeDetailsComponent {
  public toggleElement(event: MouseEvent): void {
    const liElement = (event.target as HTMLElement).closest("li")!;
    liElement.classList.toggle("completed");
  }
}
