import React from 'react';
import ReactDOM from 'react-dom';

export default React.createClass({
  propTypes: {
    // footer: React.PropTypes.object.isRequired
  },
  render: function() {
    const {item, index} = this.props;
    return(
      <a  className={item.default? "blog-nav-item active" : "blog-nav-item"}
          key={index} href={item.link}>{item.title}
      </a>
    );
  }
});
