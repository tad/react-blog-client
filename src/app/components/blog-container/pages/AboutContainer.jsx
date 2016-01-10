import React from 'react';
import ReactDOM from 'react-dom';
import actionCreators from '../../../../action_creators';
import {connect} from 'react-redux';
import marked from 'marked';

export const About = React.createClass({
  rawMarkup: function() {
    var rawMarkup = marked(this.props.aboutContent.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },
  render: function() {
    return(
      <div dangerouslySetInnerHTML={this.rawMarkup()} />
    );
  }
});

function mapStateToProps(state) {
  return state;
}

export const AboutContainer = connect(
  mapStateToProps, actionCreators)(About);
