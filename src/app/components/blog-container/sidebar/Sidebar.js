import React from 'react';
import ReactDOM from 'react-dom';

export default React.createClass({
  render: function() {
    // Content will eventually come from some external storage
    var sideBarContent =
    <div className="sidebar-content">
      <div className="sidebar-module sidebar-module-inset">
        <h4>About</h4>
        <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
      </div>
      <div className="sidebar-module">
        <h4>Archives</h4>
        <ol className="list-unstyled">
          <li><a href="#">March 2014</a></li>
          <li><a href="#">February 2014</a></li>
          <li><a href="#">January 2014</a></li>
          <li><a href="#">December 2013</a></li>
          <li><a href="#">November 2013</a></li>
          <li><a href="#">October 2013</a></li>
          <li><a href="#">September 2013</a></li>
          <li><a href="#">August 2013</a></li>
          <li><a href="#">July 2013</a></li>
          <li><a href="#">June 2013</a></li>
          <li><a href="#">May 2013</a></li>
          <li><a href="#">April 2013</a></li>
        </ol>
      </div>
      <div className="sidebar-module">
        <h4>Elsewhere</h4>
        <ol className="list-unstyled">
          <li><a href="#">GitHub</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Facebook</a></li>
        </ol>
      </div>
    </div>
    ;
    return(
      <div className="col-sm-3 col-sm-offset-1 blog-sidebar">
        {sideBarContent}
      </div>
    );
  }
});
