import React from 'react';
import ReactDOM from 'react-dom';
import Masthead from './Masthead'
import Footer from './Footer';
import Blog from './blog-container/Blog';
import {connect} from 'react-redux';
import actionCreators from '../../action_creators';

export const Main = React.createClass({
  render: function() {
    return(
      <div id="master">
        <div className="blog-masthead">
          <div className="container">
            <Masthead masthead={this.props.mastheadContent} />
          </div>
        </div>
        <div>
          {this.props.children}
        </div>
        <Footer footer={this.props.footerContent} />
      </div>
    );
  }
});

function mapStateToProps(state) {
  return state;
}

export const MainContainer = connect(
  mapStateToProps, actionCreators)(Main);
