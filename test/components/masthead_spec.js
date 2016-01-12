// import {React, renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate} from 'react-addons-test-utils';
import React from 'react/addons';
import Masthead from '../../src/app/components/Masthead';
import {expect} from 'chai';
import ReactDOM from 'react-dom';
import {List} from 'immutable';

const {renderIntoDocument, scryRenderedDOMComponentsWithTag, scryRenderedDOMComponentsWithClass, Simulate} = React.addons.TestUtils;

const mastHeadItems = [
  {
    link: '#',
    title: 'Home',
    default: true
  },
  {
    link: '#/categories',
    title: 'Categories',
    default: false
  }];

  const component = renderIntoDocument(<Masthead masthead={mastHeadItems} />);

describe('Masthead', () => {
  it('renders two items in the masthead', () => {
    const mastHeadLinks = scryRenderedDOMComponentsWithTag(component, 'a');
    expect(mastHeadLinks.length).to.equal(2);
  });
  it('contains the expected text content', () => {
    const mastHeadLinks = scryRenderedDOMComponentsWithTag(component, 'a');
    expect(mastHeadLinks[0].textContent).to.equal('Home');
    expect(mastHeadLinks[1].textContent).to.equal('Categories');
  });

  it('properly styles the active masthead link', () => {
    const activeLink = scryRenderedDOMComponentsWithClass(component, 'blog-nav-item active');
    expect(activeLink.length).to.equal(1);
    expect(activeLink[0].textContent).to.equal('Home');
  });
});
