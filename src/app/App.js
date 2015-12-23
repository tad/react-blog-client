import React from 'react';
import ReactDOM from 'react-dom';
import Masthead from './components/Masthead'
import Footer from './components/Footer';
import Container from './components/blog-container/Container'

// TEMPORARY IMPORTS TO SIMULATE DYNAMIC CONTENT
import FooterContent from './components/blog-container/static/FooterContent';

ReactDOM.render(
  <div id="master">
    <Masthead />
    <Container />
    <Footer footer={FooterContent} />
  </div>,
  document.getElementById('app')
);
