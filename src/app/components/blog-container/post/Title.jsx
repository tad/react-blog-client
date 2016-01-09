import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';

export default React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired
  },
  rawMarkup: function() {
    var rawMarkup = marked(this.props.title.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },
  render: function() {
    return(
      <h2 className="blog-post-title" dangerouslySetInnerHTML={this.rawMarkup()} />
    );
  }
});
