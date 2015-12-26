import React from 'react';
import ReactDOM from 'react-dom';
import Masthead from './Masthead'
import Footer from './Footer';
import Container from './blog-container/Container'

// TEMPORARY IMPORTS TO SIMULATE DYNAMIC CONTENT
import FooterContent from './blog-container/static/FooterContent';
import MastheadContent from './blog-container/static/MastheadContent';


export default React.createClass({
  render: function() {
    console.log("PONG!!!");
    return(
      <div id="master">
        <Masthead masthead={MastheadContent} />
        <div>
          {this.props.children || <Container /> }
        </div>
        <Footer footer={FooterContent} />
      </div>
    );
  }
});
