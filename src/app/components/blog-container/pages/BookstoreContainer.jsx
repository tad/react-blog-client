import React from 'react';
import ReactDOM from 'react-dom';
import actionCreators from '../../../../action_creators';
import {connect} from 'react-redux';
import marked from 'marked';

export const Bookstore = React.createClass({
  rawMarkup: function() {
    var rawMarkup = marked(this.props.bookstoreContent.toString(), {sanitize: true});
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

export const BookstoreContainer = connect(
  mapStateToProps, actionCreators)(Bookstore);
