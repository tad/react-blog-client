import React from 'react';
import ReactDOM from 'react-dom';
import actionCreators from '../../../../action_creators';
import {connect} from 'react-redux';

export const Categories = React.createClass({
  render: function() {
    return(
      <div>{this.props.categoriesContent}</div>
    );
  }
});

function mapStateToProps(state) {
  return state;
}

export const CategoriesContainer = connect(
  mapStateToProps, actionCreators)(Categories);
