import { RecipeDetails } from "../models/recipe-details";

export const MACARRONES_DETAILS: RecipeDetails = {
  name: "Macarrones",
  ingredients: [
    { name: "Pasta tiburón", amount: 60, unit: "g" },
    { name: "Sal", amount: 3, unit: "sacudidas del salero" },
    { name: "Agua", amount: 500, unit: "mililitros" },
    { name: "Atún", amount: 1, unit: "lata" },
    { name: "Tomate frito", amount: 33, unit: "% del bote" },
  ],
  steps: [
    { description: "Llena una cazuela con 500 ml de agua." },
    { description: "Ponla a calentar al máximo hasta que cueza." },
    { description: "Cuando empieze a hervir, verter la pasta y la sal." },
    { description: "Bajar el fuego al 6.5 y dejar cocer durante 12 minutos." },
    { description: "Al acabar el tiempo de cocción, volcar la pasta en un escurridor." },
    { description: "Añadir una lata de atún." },
    { description: "Añadir tomate frito." },
  ],
};
