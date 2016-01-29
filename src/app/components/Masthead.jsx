import React from 'react';
import ReactDOM from 'react-dom';
import MastheadItem from './MastheadItem';
import rx from 'rx';

const Observable = rx.Observable;

export default React.createClass({
  propTypes: {
    // masthead: React.PropTypes.object.isRequired
  },
  componentDidMount(){
    const navItems = document.getElementsByClassName('blog-nav');
    let itemsClick = Observable.fromEvent(navItems, 'click');
    itemsClick.forEach(click => {
      document.querySelectorAll('.active')[0].className = 'blog-nav-item';
      click.target.className = 'blog-nav-item active';
    });
  },
  render: function() {
    const { masthead } =  this.props;
    return(
      <nav className="blog-nav">
        {masthead.map((item, index) => (
          <MastheadItem item={item} key={index} />
        ))}
      </nav>
    );
  }
});
