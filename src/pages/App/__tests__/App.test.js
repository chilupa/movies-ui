import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('should render App component', () => {
    const { getByText } = render(<App />);
    expect(getByText(/Movies/)).toBeInTheDocument();
  });
});
