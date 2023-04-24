# Interview Scheduler
 The Interview Scheduler is a Single Page Application (SPA) built with React. It allows users to book, edit, and cancel interview appointmnets.

## Scheduler Pictures

!["Desktop version"](https://github.com/marcelaamf/scheduler/blob/master/Docs/Screenshot%202023-04-24%20at%202.27.02%20PM.png?raw=true)
!["Desktop version"](https://github.com/marcelaamf/scheduler/blob/master/Docs/Screenshot%202023-04-24%20at%202.27.29%20PM.png?raw=true)

## Getting Started
The project requires the Interview Scheduler API. Please fork the repository from:  
https://github.com/lighthouse-labs/scheduler-api

Follow the intructions provided on the README file to set up the PostgreSQL database required for the project. 

## Setup

Install dependencies with `npm install`.

 Dependencies:
  - axios
  - classnames
  - normalize.css
  - react
  - react-dom
  - react-scripts

DevDependencies:
  - @babel/core
  - @storybook/addon-actions
  - @storybook/addon-backgrounds
  - @storybook/addon-links
  - @storybook/addons
  - @storybook/react
  - @testing-library/jest-dom
  - @testing-library/react
  - @testing-library/react-hooks
  - babel-loade
  - prop-types
  - react-test-renderer
  - sass

## Running Scheduler-API
From the Scheduler-API root directory:

```sh
npm start
```
## Running Webpack Development Server
From the Scheduler root directory:

```sh
npm start
```

## Testing
The project used multiple testing frameworks:

- Static testing with the prop-types package.
- Unit testing with Storybook.
- Unit testing and integration testing with Jest and the Testing library.
- End to end testing with Cypress.

### Running Jest Test Framework

```sh
npm test
```
### Running Storybook Visual Testbed

```sh
npm run storybook
```
### Running Cypress

```sh
npm run cypress
```
