import { strings } from '@angular-devkit/core';
import { Rule, SchematicContext, Tree, apply, mergeWith, move, template, url } from '@angular-devkit/schematics';
import { Schema } from './schema';
import { classify, dasherize } from '@angular-devkit/core/src/utils/strings';

const APP_ROUTING_MODULE = './src/app/app.routes.ts';
const HOME_COMPONENT = './src/home/home.component.ts';

export function recipePage({ name }: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    // create the new files
    const sourceTemplates = url('./files');
    const sourceParametrizedTemplates = apply(sourceTemplates, [
      template({
        name,
        ...strings,
      }),
      move(`src/recipes`),
    ]);

    // add new path to the component in the routing module
    let appRoutingModule: string = tree.read(APP_ROUTING_MODULE)!.toString();
    let indexToInsert = appRoutingModule.indexOf('// schematic placeholder to enter more routes');
    appRoutingModule = `${appRoutingModule.slice(0, indexToInsert)}{
    path: '${dasherize(name)}',
    children: [
      {
        path: '',
        loadComponent: () => import('../recipes/${dasherize(name)}/${dasherize(name)}.component').then((m) => m.${classify(name)}Component),
        data: {
          headTags: {
            metaDescription: 'TODO', // TODO add description
            metaKeywords: ['todo1', 'todo2'], // TODO add key words
            linkRelCanonical: 'https://recetas.jaimeelingeniero.es/${dasherize(name)}',
          } as HeadTags,
        },
      },
      { path: '**', redirectTo: '' },
    ],
  },
  ${appRoutingModule.slice(indexToInsert)}`;

    tree.overwrite(APP_ROUTING_MODULE, appRoutingModule);

    // add the recipe to the home component
    let homeComponent: string = tree.read(HOME_COMPONENT)!.toString();
    indexToInsert = homeComponent.indexOf('// schematic placeholder to enter more recipes');
    homeComponent = `${homeComponent.slice(0, indexToInsert)}{ name: "${name.replace(/-/g, ' ').replace(/^./, (char) => char.toUpperCase())}", image: "/assets/${dasherize(name)}/images/preview.svg" },
  ${homeComponent.slice(indexToInsert)}`;

    tree.overwrite(HOME_COMPONENT, homeComponent);

    return mergeWith(sourceParametrizedTemplates);
  };
}
