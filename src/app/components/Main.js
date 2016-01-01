import React from 'react';
import ReactDOM from 'react-dom';
import Masthead from './Masthead'
import Footer from './Footer';
import Blog from './blog-container/Blog'

// TEMPORARY IMPORTS TO SIMULATE DYNAMIC CONTENT
import FooterContent from '../../static/FooterContent';
import MastheadContent from '../../static/MastheadContent';


export default React.createClass({
  render: function() {
    return(
      <div id="master">
        <Masthead masthead={MastheadContent} />
        <div>
          {this.props.children}
        </div>
        <Footer footer={FooterContent} />
      </div>
    );
  }
});
