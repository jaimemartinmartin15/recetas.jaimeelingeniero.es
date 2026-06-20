# app-schematics

This package contains schematics to run in this project:

- recipe-page
  
  Generates the components and updates the necessary files to add a new recipe.

## Development

Clone the repository:

```text
git clone https://github.com/jaimemartinmartin15/recetas.jaimeelingeniero.es.git
```

Install dependencies:

```text
cd app-schematics && npm i
```

Build:

```text
npm run build
```

```text
npm run build:watch
```

Clean build files:

```text
npm run clean
```

## Debugging

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with

```bash
schematics --help
```

It is recommended to open two terminals.

In the first one, in this folder, run `npm run build:watch` to build the schematic in watch mode.

In the second one, in the project root folder (parent of this folder), run `schematics ./app-schematics:recipe-page --dry-run=true --name=someRecipePage` to execute the schematic.
