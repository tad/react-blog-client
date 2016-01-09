import React from 'react';
import ReactDOM from 'react-dom';
import actionCreators from '../../../../action_creators';
import {connect} from 'react-redux';

export const Links = React.createClass({
  render: function() {
    return(
      <div>{this.props.linksContent}</div>
    );
  }
});

function mapStateToProps(state) {
  return state;
}

export const LinksContainer = connect(
  mapStateToProps, actionCreators)(Links);
