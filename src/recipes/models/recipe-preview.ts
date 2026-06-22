export interface RecipePreview {
  /**
   * Name of the recipe. Acts as id, thus must be unique.
   */
  name: string;

  /**
   * Time to cook the recipe in minutes.
   */
  timeToCook: number;

  /**
   * Url to the assets image. Example: '/assets/name/name.png'.
   * Name is the name of this recipe in kebab-case.
   */
  image: string;

  /**
   * Difficulty of this recipe.
   */
  difficulty: "easy" | "medium" | "difficult";
}
