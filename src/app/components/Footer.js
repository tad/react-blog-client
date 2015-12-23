import React from 'react';
import ReactDOM from 'react-dom';

export default React.createClass({
  render: function() {
    return(
      <footer className="blog-footer">
        {this.props.footer}
        <p>
          <a href="#">Back to top</a>
        </p>
      </footer>
    );
  }
});
