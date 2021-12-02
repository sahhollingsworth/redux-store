# E-Commerce Platform - Redux Store Refactor
This project is a refactor of existing code for an e-commerce platform to use Redux to manage application state.

Given part of a Web developers role is to immerse themselves in a new technology to solve a problem, with only that tool’s documentation for help, this project is intended as a practical run through of this type of experience.

## Summary
[Click here to use the refactored E-Commerce Platform.](https://redux-store-211115.herokuapp.com/)

[Demo of the refactored E-Commerce Platform](https://watch.screencastify.com/v/5HRax4dZ7uFAeuBVJTzp)

![GIF of Application functionality including adding, removing, and increasing quantity of products in car, product details page, logging in, and checkout handoff to Stripe](./images.shop-shop_demo.gif)

* The app uses a Redux store instead of the Context API
* The app's React front end uses a Redux provider to access the store
* The app determines changes to its global state by passing reducers to a Redux store instead of using the Context API
* The app extracts state data from the store using Redux instead of the Context API
* The app dispatches actions using Redux instead of the Context API

## Installation
Ensure you have Node.js installed locally to install packages to and from the public npm registry. Node.js installation documentation.

1. Clone the repository to your local machine.

2. Install application dependencies `npm install`.
Required when when you first set up the project for local development or use OR if any changes are made to the project's dependencies. More Node information here.

3. Start the application with `npm run develop`. This will open the app in a new tab in your default web browser. 

## Technologies
* [Mongo DB](https://www.mongodb.com/) - The NoSQL database used to support record storage.
* [React](https://reactjs.org/) - Javascript library used to generate all user interfaces.
* [Node](https://nodejs.org/en/) - Asynchronous event-driven JavaScript runtime environment that executes JavaScript code outside a web browser.
* [NPM](https://www.npmjs.com/) - Node package manager, used in conjunction with JS and Inquirer to support application logic and Command Line interface.
  * [Redux](https://www.npmjs.com/package/redux) - The state container for our JavaScript app.
  * [React-Redux](https://www.npmjs.com/package/react-redux) - The React UI bindings layer for Redux. Enables React components to read data from a Redux store, and dispatch actions to the store to update state.
  * [GraphQL](https://www.npmjs.com/package/graphql) - JavaScript reference implementation for GraphQL, a query language for APIs.
  * [@Apollo-client](https://www.npmjs.com/package/@apollo/client) - Enables UI components that fetch data via GraphQL.
  * [Apollo-server-express](https://www.npmjs.com/package/apollo-server-express) - Express integration of Apollo Server, an open-source GraphQL server that works with many Node.js HTTP server frameworks.
  * [Mongoose](https://www.npmjs.com/package/mongoose) - Mongoose is a MongoDB object modeling tool used for all models in this application.
  * [Expressjs](https://expressjs.com/) - Leveraged for API's, utility methods, and middleware.
  * [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
  * [Bcrypt](https://www.npmjs.com/package/bcrypt) - Used for password hashing.
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/javascript) - Core app logic.
* [CSS](https://devdocs.io/css/) - Used to style html elements on the page as needed beyond Bootstrap.
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) - Used to create elements on the DOM.
* [Git](https://git-scm.com/doc) - Version control system to track changes to source code.
* [GitHub](https://docs.github.com/en) - Hosts the code repository.

## Author
Sarah Hollingsworth
* [Github](https://github.com/sahhollingsworth)
* [LinkedIn](https://www.linkedin.com/in/sarahhollingsworth/)

## References
* Traversy Media's [Redux Crash Course with React](https://www.youtube.com/watch?v=93p3LxR9xfM)
* [Redux Fundamentals tutorial](https://redux.js.org/tutorials/fundamentals/part-1-overview)

## License
* Licensed under the [MIT](https://opensource.org/licenses/MIT) license.