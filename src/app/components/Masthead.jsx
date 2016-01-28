import React from 'react';
import ReactDOM from 'react-dom';
import MastheadItem from './MastheadItem';

export default React.createClass({
  propTypes: {
    // masthead: React.PropTypes.object.isRequired
  },
  render: function() {
    const { masthead } =  this.props;
    return(
      <nav className="blog-nav">
        {masthead.map((item, index) => (
          <MastheadItem item={item} key={index} />
        ))}
      </nav>
    );
  }
});
