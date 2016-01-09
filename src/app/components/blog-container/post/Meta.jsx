import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';

export default React.createClass({
  propTypes: {
    meta: React.PropTypes.string.isRequired,
  },
  rawMarkup: function() {
    var rawMarkup = marked(this.props.meta.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },
  render: function() {
    return(
      <p className="blog-post-meta" dangerouslySetInnerHTML={this.rawMarkup()} />
    );
  }
});
