import { render, screen } from '@testing-library/react';
import Message from '../components/Message';

test('renders message component with props', () => {
  const todos = [
    { id: 1, message: 'First Message' },
    { id: 2, message: 'Second Message' },
  ];

  render(<Message todos={todos} deleteMessage={() => {}} />);

  const firstMessage = screen.getByText('First Message');
  const secondMessage = screen.getByText('Second Message');
  expect(firstMessage).toBeInTheDocument();
  expect(secondMessage).toBeInTheDocument();

});
