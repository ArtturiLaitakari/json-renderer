import React from 'react';
import { render } from '@testing-library/react';

import renderHTML from './renderHTML';

test('renders a simple div element', () => {
  const element = {
    type: 'div',
    props: { className: 'container' },
    children: ['Hello World']
  };

  const { getByText } = render(renderHTML(element));

  expect(getByText('Hello World')).toBeInTheDocument();
});

test('renders nested elements', () => {
  const element = {
    type: 'div',
    props: { className: 'container' },
    children: [
      {
        type: 'h1',
        props: { className: 'title' },
        children: ['Title']
      },
      {
        type: 'p',
        props: { className: 'description' },
        children: ['Description text']
      }
    ]
  };

  const { getByText } = render(renderHTML(element));

  expect(getByText('Title')).toBeInTheDocument();
  expect(getByText('Description text')).toBeInTheDocument();
});
