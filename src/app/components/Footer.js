import React from 'react';
import ReactDOM from 'react-dom';

export default React.createClass({
  render: function() {
    return(
      <footer className="blog-footer">
        <p>
          <span>Based on a blog template built for </span>
          <a href="http://getbootstrap.com">Bootstrap</a>
           <span> by </span>
          <a href="https://twitter.com/mdo">@mdo</a>
          .
        </p>
        <p>
          <a href="#">Back to top</a>
        </p>
      </footer>
    );
  }
});
