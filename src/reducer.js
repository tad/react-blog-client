import {List} from 'immutable';
// import action_creators from './action_creators'

// TEMPORARY IMPORTS TO SIMULATE DYNAMIC CONTENT
import sidebar1 from './static/Sidebar1';
import sidebar2 from './static/Sidebar2';
import sidebar3 from './static/Sidebar3';
import post1 from './static/Post1';
import post2 from './static/Post2';

const initialState = {
  blogTitle: 'My React Redux Blog',
  blogDescription: 'My React-based Blog',
  sidebars: List.of(sidebar1, sidebar2, sidebar3),
  blogPosts: List.of(post1, post2)
};

function myBlog(state, action) {
  if (typeof state === 'undefined')
    return initialState;

  return state;
}

export default myBlog;
