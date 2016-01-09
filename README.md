## React-based blogging client

## Notes:
Streak Day 26
January 9, 2016 - Fixed linting. Renamed react components to have .jxs extensions.

Currently only generating static content while I experiment and build out the
react components and design that I want to move forward with.

Once I figure out how things will look, and the granularity of my components
I will move forward with tests and dynamic behavior.

## Instruction
- run npm install
- run webpack
- run grunt
- run webpack-dev-server
- visit http://localhost:8080 in your browser

## TODO:
- Nav Pages and sidebar contents should be read from markdown, same as blog posts
- Separate tests out into smaller individual tests
- Write tests for blogPosts component
- mapStateToProps methods need to be refined.
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
