// src/__tests__/TodoList.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('renders TodoList and adds todos', () => {
  render(<TodoList />);
  
  // تحقق من وجود todos
  expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
  
  // أضف todo جديد
  fireEvent.change(screen.getByPlaceholderText('Add new todo'), { target: { value: 'New Todo' } });
  fireEvent.click(screen.getByText(/Add/i));
  
  expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
});

test('toggles todo completion', () => {
  render(<TodoList />);
  
  // التبديل بين الإكمال وعدم الإكمال
  const todoItem = screen.getByText(/Learn React/i);
  fireEvent.click(todoItem);
  
  expect(todoItem).toHaveStyle('text-decoration: line-through');
});

test('deletes a todo', () => {
  render(<TodoList />);
  
  // حذف todo
  const deleteButton = screen.getByText(/Delete/i);
  fireEvent.click(deleteButton);
  
  expect(screen.queryByText(/Learn React/i)).not.toBeInTheDocument();
});
