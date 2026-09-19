# Recetas

This project is an Angular application deployed in AWS S3 under domain [recetas.jaimeelingeniero.es](https://recetas.jaimeelingeniero.es)

[![Build And Deploy](https://github.com/jaimemartinmartin15/recetas.jaimeelingeniero.es/actions/workflows/build-and-publish.yml/badge.svg)](https://github.com/jaimemartinmartin15/recetas.jaimeelingeniero.es/actions/workflows/build-and-publish.yml)

## Development

Clone the repository:

```text
git clone https://github.com/jaimemartinmartin15/recetas.jaimeelingeniero.es.git
```

Install dependencies:

```text
npm i
```

**Note**: To download certain dependencies (scoped with _@jaimemartinmartin15_) from GPR (GitHub Package Registry), you  require a valid personal access token. If obtaining one is not possible, remove the dependency from the [package.json](./package.json). In this situation, work without creating icons and remove any component or module import that cannot be resolved.

Run the application in **localhost**:

```text
npm start
```

Run the application in **private IP address**:

```text
npm run start:public
```

## Generate new recipes

Execute this commands in the project root folder:

Make sure the schematic is built:

```text
cd ./app-schematics && npm run build
```

Run the schematic to generate the files and folders.

```text
ng g ./app-schematics:recipe-page <recipe-name>
```

## Deploy

After doing the changes in your branch, increase the [package.json](./package.json) version and then run `npm i` to update the package-lock.json

Update also [CHANGELOG.md](./CHANGELOG.md) file.

Then merge the changes in `main` branch and create a tag with the same version than in the package.json

When pushing the tag to the remote, it will trigger the workflow **build-and-publish.yml** automatically to deploy it.

## Workflows

### build-and-publish.yml

Builds and deploys the application to the server.