import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import BlogPosts from '../../src/app/components/blog-container/post/BlogPosts';
import {expect} from 'chai';
import ReactDOM from 'react-dom';

const {renderIntoDocument, scryRenderedDOMComponentsWithTag, scryRenderedDOMComponentsWithClass}
  = ReactTestUtils;

const posts = [{
  title: '*Sample blog post*',
  meta: '*Some meta*',
  content: 'Hello'
},
{
  title: '~~Sample blog post~~',
  meta: 'December 27, 2015 by [Tad](#)',
  content: "World"
}
];

const component = renderIntoDocument(<BlogPosts blogPosts={posts} />);

describe('BlogPosts', () => {
  it('renders two blog posts', () => {
    const posts = scryRenderedDOMComponentsWithClass(component, 'blog-post');
    expect(posts.length).to.equal(2);
  });

  it('renders each post with a title, meta and a content', () => {
    const titles = scryRenderedDOMComponentsWithClass(component, 'blog-post-title');
    const metas = scryRenderedDOMComponentsWithClass(component, 'blog-post-meta');
    const contents = scryRenderedDOMComponentsWithClass(component, 'blog-post-content');
    expect(titles.length).to.equal(2);
    expect(metas.length).to.equal(2);
    expect(contents.length).to.equal(2);
  });

  it('renders the expected text content', () => {
    const titles = scryRenderedDOMComponentsWithClass(component, 'blog-post-title');
    const metas = scryRenderedDOMComponentsWithClass(component, 'blog-post-meta');
    const contents = scryRenderedDOMComponentsWithClass(component, 'blog-post-content');

    expect(titles[0].textContent).to.equal('Sample blog post\n');
    expect(contents[0].textContent).to.equal('Hello\n');
  });

});
