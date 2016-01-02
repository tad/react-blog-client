import {List} from 'immutable';
import React from 'react';
// import action_creators from './action_creators'

// TEMPORARY IMPORTS TO SIMULATE DYNAMIC CONTENT
import sidebar1 from './static/Sidebar1';
import sidebar2 from './static/Sidebar2';
import sidebar3 from './static/Sidebar3';
import post1 from './static/Post1';
import post2 from './static/Post2';
import aboutContent from './static/AboutContent';
import categoriesContent from './static/CategoriesContent';
import bookstoreContent from './static/BookstoreContent';
import linksContent from './static/LinksContent';
import footerContent from './static/FooterContent';
import mastheadContent from './static/MastheadContent';
import blogMeta from './static/BlogMeta';

const initialState = {
  blogTitle: blogMeta.blogTitle,
  blogDescription: blogMeta.blogDescription,
  sidebars: List.of(sidebar1, sidebar2, sidebar3),
  blogPosts: List.of(post1, post2),
  mastheadContent: mastheadContent,
  footerContent: footerContent,
  aboutContent: aboutContent,
  categoriesContent: categoriesContent,
  bookstoreContent: bookstoreContent,
  linksContent: linksContent
};

function myBlog(state, action) {
  if (typeof state === 'undefined')
    return initialState;

  return state;
}

export default myBlog;
