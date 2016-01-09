// import {React, renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate} from 'react-addons-test-utils';
import React from 'react/addons';
import Sidebar from '../../src/app/components/blog-container/sidebar/Sidebar';
import {expect} from 'chai';
import ReactDOM from 'react-dom';
import {List} from 'immutable';

const {renderIntoDocument, scryRenderedDOMComponentsWithTag,
  scryRenderedDOMComponentsWithClass, Simulate} = React.addons.TestUtils;

describe('Sidebar', () => {
  it('renders two modules in the sidebar', () => {
    const sidebarModules = [
      {
        insetModule: true,
        content:  <div><h1>Hello</h1></div>
      },
      {
        insetModule: false,
        content:  <div><h1>World</h1></div>
      }];

    const component = renderIntoDocument(<Sidebar sidebars={sidebarModules} />);
    const sidebars = scryRenderedDOMComponentsWithTag(component, 'h1');
    const insetModule = scryRenderedDOMComponentsWithClass(component, 'sidebar-module-inset');

    expect(sidebars.length).to.equal(2);
    expect(sidebars[0].textContent).to.equal('Hello');
    expect(sidebars[1].textContent).to.equal('World');
    expect(insetModule.length).to.equal(1);
    expect(insetModule[0].textContent).to.equal('Hello');

  });
});
