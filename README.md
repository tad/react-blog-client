## React-based blogging client

## Notes:
December 26, 2015 - Added routing to the blog. It's now a single-page app
(so far). Currently, I've only added a placeholder for the About page, but
the concept is identical for any other page moving forward. If you grab today's
commit, click between About Me and Home in the navbar.

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
- Begin working in branches for each day's commit and create PR's.
- Figure out how to get the "carat" pointer thing in the navbar point to other tabs
- - add active class to the anchor element for above
- Build in placeholder pages for the other navbar pages
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
