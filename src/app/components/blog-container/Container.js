import React from 'react';
import ReactDOM from 'react-dom';
import BlogHeader from './header/BlogHeader';
import Sidebar from './sidebar/Sidebar';

// TEMPORARY IMPORTS TO SIMULATE DYNAMIC CONTENT
import sidebar1 from './Sidebar/Sidebar1';
import sidebar2 from './Sidebar/Sidebar2';
import sidebar3 from './Sidebar/Sidebar3';

export default React.createClass({
  getInitialState: function() {
    return {
      sidebars: [sidebar1, sidebar2, sidebar3]
    };
  },
  render: function() {
    return(
      <div className="container">
        <BlogHeader />
        <div className="row">
          <div className="col-sm-8 blog-main">
            <h1>Hello, React World!</h1>
          </div>
          <Sidebar sidebars={this.state.sidebars} />
        </div>
      </div>
    );
  }
});
