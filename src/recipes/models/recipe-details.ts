export interface Ingredients {
  /**
   * Name of the ingredient
   */
  name: string;

  /**
   * Amount to use in this recipe for one person.
   */
  amount?: number;

  /**
   * Unit of the amount, i.e. ml, kg, pieces, ...
   */
  unit?: string;
}

export interface Step {
  description: string;
}

export interface RecipeDetails {
  name: string; // acts as id

  /**
   * List of ingredients of this recipe
   */
  ingredients: Ingredients[];

  /**
   * Steps to cook the recipe
   */
  steps: Step[];
}
