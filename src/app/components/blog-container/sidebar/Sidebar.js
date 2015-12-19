import React from 'react';
import ReactDOM from 'react-dom';

export default React.createClass({
  render: function() {
    return(
      <div className="col-sm-3 col-sm-offset-1 blog-sidebar">      
      <div className="sidebar-module">
          <h4>Elsewhere</h4>
          <ol className="list-unstyled">
            <li><a href="#">GitHub</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Facebook</a></li>
          </ol>
        </div>
      </div>
    );
  }
});
