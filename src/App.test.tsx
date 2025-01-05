import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
      type: "div",
      props: {
        className: "container"
      },
      children: [
        {
          type: "header",
          props: {
            className: "navbar"
          },
          children: [
            {
              type: "h1",
              props: {
                className: "logo"
              },
              children: ["JSON renderer App"]
            },
            {
              type: "nav",
              props: {
                className: "nav-links"
              },
              children: [
                {
                  type: "a",
                  props: {
                    href: "#home"
                  },
                  children: ["Home"]
                },
                {
                  type: "a",
                  props: {
                    href: "#about"
                  },
                  children: ["About"]
                },
                {
                  type: "a",
                  props: {
                    href: "#contact"
                  },
                  children: ["Contact"]
                }
              ]
            }
          ]
        }
      ]
    })
  })
);

test('renders App component with JSON data', async () => {
  render(<App />);

  expect(screen.getByText('Loading...')).toBeInTheDocument();

  await waitFor(() => expect(screen.getByText('JSON renderer App')).toBeInTheDocument());
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('About')).toBeInTheDocument();
  expect(screen.getByText('Contact')).toBeInTheDocument();
});
