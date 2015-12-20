import React from 'react';
import ReactDOM from 'react-dom';

// Placeholder for now until we begin reading in from external service
export default React.createClass({
  render: function() {
    return(
      <div className="sidebar-module">
        <h4>Elsewhere</h4>
        <ol className="list-unstyled">
          <li><a href="#">GitHub</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Facebook</a></li>
        </ol>
      </div>
    );
  }
});
