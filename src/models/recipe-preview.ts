export interface RecipePreview {
  /**
   * Name of the recipe. Acts as id, thus must be unique.
   */
  name: string;

  /**
   * Url to the assets image. Example: '/assets/name/name.png'.
   * Name is the name of this recipe in kebab-case.
   */
  image: string;

  /**
   * A color for the border of the preview
   */
  color: string;
}
