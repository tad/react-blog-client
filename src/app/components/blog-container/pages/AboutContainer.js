import React from 'react';
import ReactDOM from 'react-dom';
import actionCreators from '../../../../action_creators';
import {connect} from 'react-redux';

export const About = React.createClass({
  render: function() {
    return(
      <div>{this.props.aboutContent}</div>
    );
  }
});

function mapStateToProps(state) {
  return state;
}

export const AboutContainer = connect(
  mapStateToProps, actionCreators)(About);
