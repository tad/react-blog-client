// TEMPORARY MODULE TO SIMULATE DYNAMIC Content
import React from 'react';
import ReactDOM from 'react-dom';

let posts = [{
  title: '*Sample blog post*',
  meta: 'December 21, 2015 by [Tad](#)',
  content: '## My Sample Markdown Blog Post\nThis blog post was created using Markdown markup and then converted into HTML.This blog post shows a few different types of content thats supported and styled with Bootstrap. Basic typography, images, and code are all supported.\n***\nCum sociis natoque penatibus et magnis [dis parturient montes](#), nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.\n>Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolorid nibh ultricies vehicula ut id elit. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.\n\n## Heading\nVivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n### Sub-heading\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\n```Example code block```\n\nAenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.\n### Sub-heading\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.\n* List item one\n* List item two\n* List item three\n\nDonec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.\n1. Ordered item one\n2. Ordered item two\n3. Ordered item three\n\nCras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.'
},
{
  title: '~~Sample blog post~~',
  meta: 'December 27, 2015 by [Tad](#)',
  content: "### My Sample Markdown Blog Post\nHere is another line.\n#### Sub-sub-heading"
}
];

export default posts;
