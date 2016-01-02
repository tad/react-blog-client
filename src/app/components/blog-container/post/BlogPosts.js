import React from 'react';
import ReactDOM from 'react-dom';
import Title from './Title';
import Meta from './Meta';
import Content from './Content';

export default React.createClass({
  propTypes: {
    // Not sure how this works with immutable - needs research
    //blogPosts: React.PropTypes.array.isRequired,
  },
  render: function() {
    const { blogPosts } = this.props;
    return(
      <div className="col-sm-8 blog-main">
        {blogPosts.map((post, index) => (
          <div className="blog-post" key={index}>
            <Title title={post.title} />
            <Meta meta={post.meta} />
            <Content content={post.content} />
          </div>
        ))}
      </div>
    );
  }
});
