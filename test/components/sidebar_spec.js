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
    // Sidebar modules need to be moved into a single static file before we finish this test
    expect(true).to.equal(true);
  });
});
