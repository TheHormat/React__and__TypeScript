import React from 'react';
import { render } from '@testing-library/react';
import Message from '../components/Message';

test('renders message component with correct props', () => {
  const { getByText } = render(<Message todos="Sample Message" />);
  const messageTodos = getByText('Sample Message');
  expect(messageTodos).toBeInTheDocument();
});
