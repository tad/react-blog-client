import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import Sidebar from '../../src/app/components/blog-container/sidebar/Sidebar';
import {expect} from 'chai';
import ReactDOM from 'react-dom';

const {renderIntoDocument, scryRenderedDOMComponentsWithTag, scryRenderedDOMComponentsWithClass}
  = ReactTestUtils;

const sidebarModules = [
  {
    insetModule: true,
    content:  <div><h1>Hello</h1></div>
  },
  {
    insetModule: false,
    content:  <div><h1>World</h1></div>
  }
];

const component = renderIntoDocument(<Sidebar sidebars={sidebarModules} />);
const sidebars = scryRenderedDOMComponentsWithTag(component, 'h1');

describe('Sidebar', () => {
  it('renders two modules in the sidebar', () => {
    expect(sidebars.length).to.equal(2);
  });

  it('renders the expected text content', () => {
    expect(sidebars[0].textContent).to.equal('Hello');
    expect(sidebars[1].textContent).to.equal('World');
  });

  it('properly renders modules marked as inset', () => {
    const insetModule = scryRenderedDOMComponentsWithClass(component, 'sidebar-module-inset');
    expect(insetModule.length).to.equal(1);
    expect(insetModule[0].textContent).to.equal('Hello');
  });

});
