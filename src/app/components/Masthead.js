import React from 'react';
import ReactDOM from 'react-dom';

export default React.createClass({
  propTypes: {
    // masthead: React.PropTypes.object.isRequired
  },
  render: function() {
    const { masthead } =  this.props;
    return(
      <nav className="blog-nav">
        {masthead.map((item, index) => (
          <a  className={item.default? "blog-nav-item active" : "blog-nav-item"}
              key={index} href={item.link}>{item.title}
          </a>
        ))}
      </nav>
    );
  }
});
