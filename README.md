# SpaceXprograms
SpaceXprograms is an angular app which fetches data through the spaceX api's and displays the data in the spaceXPrograms dashboard by applying filters on it.
Users have option to apply filters like date, launches - success or fail, landing- success or fail etc.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Stack
Angular CLI - 9
Angular Universal v11.0.0
HTML and CSS 3
REST Api's - spaceX

## External Resources
Sitemap - xml-sitemaps.com

## Approach
The main page is rendered on server side through Angular Universal. Data from the source api's is stored in an Observable of a Service which handles data storage and is returned when requested by the component.
The data is then subscribed in the component and is visualized in the component's View.
Sidebar component is used to take parameters for filtering and ContentComponent displays the filtered output on the dashboard.

## Installation
Run `npm install` from CLI and it will install dependencies required to run the program.

## Build:ssr (Server side Rendered Code)
Run `ng build --prod && ng run spaceXprograms:server:production` from Angular CLI to get the build with pre-rendered code

## Run server side rendered code locally
Run `npm run spaceXprograms:serve-ssr` to run the server side rendered code in your browser locally.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
"# spacex-programs" 
