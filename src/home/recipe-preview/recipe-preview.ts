export interface RecipePreview {
  /**
   * Name of the recipe. Acts as id, thus must be unique.
   * Used as segment of the url for the details (replace spaces with dash and all lowercase).
   */
  name: string;

  /**
   * Url to the assets image. Example: '/assets/name/name.png'.
   * Name is the name of this recipe in kebab-case.
   */
  image: string;
}
