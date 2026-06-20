import { strings } from "@angular-devkit/core";
import { Rule, SchematicContext, Tree, apply, mergeWith, move, template, url } from "@angular-devkit/schematics";
import { Schema } from "./schema";
import { classify, dasherize } from "@angular-devkit/core/src/utils/strings";

const APP_ROUTING_MODULE = "./src/app/app.routes.ts";
const HOME_COMPONENT = "./src/home/home.component.html";

export function recipePage({ name }: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    // create the new files
    const sourceTemplates = url("./files");
    const sourceParametrizedTemplates = apply(sourceTemplates, [
      template({
        name,
        ...strings,
      }),
      move(`src/recipes`),
    ]);

    // add new path to the component in the routing module
    let appRoutingModule: string = tree.read(APP_ROUTING_MODULE)!.toString();
    let indexToInsert = appRoutingModule.indexOf(`path: ""`) - 7; // insert the last one before the default
    appRoutingModule = `${appRoutingModule.slice(0, indexToInsert)}{
    path: "${dasherize(name)}",
    loadComponent: () => import("../recipes/${dasherize(name)}/${dasherize(name)}").then((m) => m.${classify(name)}Component),
  },
  ${appRoutingModule.slice(indexToInsert)}`;
    tree.overwrite(APP_ROUTING_MODULE, appRoutingModule);

    // add the recipe to the home component
    let homeComponent: string = tree.read(HOME_COMPONENT)!.toString();
    homeComponent = `  <app-recipe-preview
    easy
    [name]="'${name}'"
    [timeToCook]="'xx min'"
    [link]="'${dasherize(name)}'"
    [sourceImage]="'url(/assets/${dasherize(name)}.png)'"
  ></app-recipe-preview>

${homeComponent}`;
    tree.overwrite(HOME_COMPONENT, homeComponent);

    return mergeWith(sourceParametrizedTemplates);
  };
}
