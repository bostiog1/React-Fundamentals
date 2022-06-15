import React from 'react';
import ReactDom from 'react-dom';
import { render, screen } from '@testing-library/react';
import App from './App';
import Enzyme, {mount, shallow, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
