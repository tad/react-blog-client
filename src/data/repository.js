import {List} from 'immutable';

// TEMPORARY IMPORTS TO SIMULATE DYNAMIC CONTENT
import sidebar1 from '../static/Sidebar1';
import sidebar2 from '../static/Sidebar2';
import sidebar3 from '../static/Sidebar3';
import blogPosts from '../static/BlogPosts';
import aboutContent from '../static/AboutContent';
import categoriesContent from '../static/CategoriesContent';
import bookstoreContent from '../static/BookstoreContent';
import linksContent from '../static/LinksContent';
import footerContent from '../static/FooterContent';
import blogMeta from '../static/BlogMeta';

const initialState = {
  blogTitle: blogMeta.blogTitle,
  blogDescription: blogMeta.blogDescription,
  sidebars: List.of(sidebar1, sidebar2, sidebar3),
  blogPosts: blogPosts,
  mastheadContent: blogMeta.mastheadLinks,
  footerContent: footerContent,
  aboutContent: aboutContent,
  categoriesContent: categoriesContent,
  bookstoreContent: bookstoreContent,
  linksContent: linksContent
};

function Repository() {
  return {
    getInitialState: function() {
      return initialState;
    }
  }
}

export default Repository;
