import React from 'react';
import ReactDOM from 'react-dom';
import Masthead from './components/Masthead'
import Footer from './components/Footer';
import Container from './components/blog-container/Container'

ReactDOM.render(
  <div id="master">
    <Masthead />
    <Container />
    <Footer />
  </div>,
  document.getElementById('app')
);
