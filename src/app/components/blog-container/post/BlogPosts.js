import React from 'react';
import ReactDOM from 'react-dom';
import Title from './Title';
import Meta from './Meta';
import Content from './Content';

export default React.createClass({
  render: function() {
    var blogPosts = this.props.blogPosts.map(function(post, index) {
      return <div className="blog-post" key={index}>
        <Title title={post.title} />
        <Meta meta={post.meta} />
        <Content content={post.content} />
      </div>
    });
    console.log("blogPosts: ", blogPosts);
    return(
      <div className="col-sm-8 blog-main">
        {blogPosts}
      </div>
    );
  }
});
