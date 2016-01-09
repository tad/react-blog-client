import React from 'react';
import ReactDOM from 'react-dom';
import actionCreators from '../../../../action_creators';
import {connect} from 'react-redux';

export const Bookstore = React.createClass({
  render: function() {
    return(
      <div>{this.props.bookstoreContent}</div>
    );
  }
});

function mapStateToProps(state) {
  return state;
}

export const BookstoreContainer = connect(
  mapStateToProps, actionCreators)(Bookstore);
