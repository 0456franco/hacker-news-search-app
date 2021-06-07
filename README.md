# RtsLabsAssesment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.3.

- Using Bootstrap 5, Angular Material, & Sentry.

## Live Demo

You can find the live demo deployed using netlify here: https://eloquent-shaw-2e45c7.netlify.app/ 

## Notes

There were a couple of things to consider at the time of making this app. I will go through the list and explain the thought process behind each decision.

1. Not using the Algolia Instant Search package.

- The reason why I chose not to use this package was because it meant that I would have to downgrade my version of Angular because of compability issues as seen below:
https://www.algolia.com/doc/guides/building-search-ui/installation/angular/

![alt text](https://github.com/0456franco/hacker-news-search-app/blob/main/readme-assets/out-dated-instant-search.png?raw=true)

![alt text](https://github.com/0456franco/hacker-news-search-app/blob/main/readme-assets/algolia_version.png?raw=true)

2. Not limitting what input users can input into the search bar.

- The reason I did not set any validators on the search input is because the best search engines like Google do not set validation on their search box. In this case
it will be best left off to the back-end to handle dangerous requests.

## Unit Testing

- I wrote a couple of unit tests using Jasmine and Karma.

## Bootstrap 5 Docs.

You can find Bootstrap 5 docs. here: https://getbootstrap.com/docs/5.0/getting-started/introduction/

## Angular Mat Guides

You can find Angular Material Guides here: https://material.angular.io/guides

## Sentry Angular SDK

You can find Sentry Angular SDK docs. here: https://docs.sentry.io/platforms/javascript/guides/angular/

## Sentry Error Capturing

This project uses Sentry to caputre errors.

Front End Error Display
![alt text](https://github.com/0456franco/hacker-news-search-app/blob/main/readme-assets/error_dialog.png?raw=true)

Sentry Error Capture
![alt text](https://github.com/0456franco/hacker-news-search-app/blob/main/readme-assets/error_sentry.png?raw=true)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
