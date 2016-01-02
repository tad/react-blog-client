## React-based blogging client

## Notes:
Streak Day 19
January 2, 2016
I've now wired in a redux store and have pushed all of my static content (I think)
into my redux store and have started fixing up the react components to get their
property from the redux state using the react-redux connect function.

Currently only generating static content while I experiment and build out the
react components and design that I want to move forward with.

Once I figure out how things will look, and the granularity of my components
I will move forward with tests and dynamic behavior.

## Instructions
- run npm install
- run webpack
- run grunt
- run webpack-dev-server
- visit http://localhost:8080 in your browser

## TODO:
- Finish adding rest of pages to redux.
- Imports are starting to look REALLY ugly. Need to figure out how to properly fix
- Figure out what else needs to be done to publish minimally viable blog
- - Begin working on immutable data store and associated logic with tests
- Begin working in branches for each day's commit and create PR's
- Figure out how to get the "carat" pointer thing in the navbar point to other tabs
- - add active class to the anchor element for above
- Extend navbar to have icon links to github, stackoverflow, etc.
- Make everything work properly in mobile sizes
- Add PropTypes to components

## Coded using
- ES6
- React
- Redux

## Testing
- Mocha
- Chai

## Backend
Will connect to my node-blog-server project.
