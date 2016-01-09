import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';

export default React.createClass({
  propTypes: {
    //content: React.PropTypes.object.isRequired,
  },
  rawMarkup: function() {
    var rawMarkup = marked(this.props.content.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },
  render: function() {
    return(
      <div dangerouslySetInnerHTML={this.rawMarkup()} />
    );
  }
});
