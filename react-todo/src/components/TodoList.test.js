import React from 'react';  // أضف هذا الاستيراد
import '@testing-library/jest-dom'; // استيراد jest-dom
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList', () => {
  test('renders the TodoList component', () => {
    render(<TodoList />);
    expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/Add a new todo/i);
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(screen.getByText(/Add/i));
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles todo completion', () => {
    render(<TodoList />);
    const todoText = screen.getByText('Learn React');
    fireEvent.click(todoText);
    expect(todoText).toHaveStyle('text-decoration: line-through');
    fireEvent.click(todoText);
    expect(todoText).not.toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText(/Delete/i)[0];
    fireEvent.click(deleteButton);
    expect(screen.queryByText('Learn React')).toBeNull();
  });
});
