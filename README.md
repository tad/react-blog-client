## React-based blogging client

## Notes:
Streak Day 30!! /CELEBRATE
January 13, 2016
- Added tests for BlogPosts component
- Now that I'm 30 days into this, it's time to figure out how to begin publishing. I don't have any publishing functionality built in yet, but that doesn't mean that I can't go live while I work on that. I just need to decide *how* I'm going to do things starting off.
- I'm also running up against the wall of my (limited) knowledge of react and redux. I will be doing intensive studying on the subjects in the weeks ahead.

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

## Weekend project
- Figure how to refactor out the code in the content pages that convert Markdown. Lots of common code there. I think I can create a parent class with the rawMarkup method.

## TODO:
- Create separate mastheadlink component so it can have behavior (for switching active page indication)
- Refactor out common code between Nav pages - shouldn't need so much code.
- Is there a more 'proper' or less 'dangerous' way to read markdown into HTML in react?
- mapStateToProps methods need to be refined.
- Imports are starting to look REALLY ugly. Need to figure out how to properly fix
- Figure out what else needs to be done to publish minimally viable blog
- - Begin working on immutable data store and associated logic with tests
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
