import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('renders initial todo list', () => {
  render(<TodoList />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Build a project')).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText('Add a new task');
  const button = screen.getByText('Add Todo');
  
  fireEvent.change(input, { target: { value: 'New Task' } });
  fireEvent.click(button);
  
  expect(screen.getByText('New Task')).toBeInTheDocument();
});
