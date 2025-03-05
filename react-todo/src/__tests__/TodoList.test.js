import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders TodoList component", () => {
  render(<TodoList />);
  expect(screen.getByText("Todo List")).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText("Add a new task");
  const button = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(button);

  expect(screen.getByText("New Task")).toBeInTheDocument();
});

test("toggles todo completion", () => {
  render(<TodoList />);
  const todo = screen.getByText("Learn React");

  fireEvent.click(todo);
  expect(todo).toHaveStyle("text-decoration: line-through");

  fireEvent.click(todo);
  expect(todo).toHaveStyle("text-decoration: none");
});

test("deletes a todo", () => {
  render(<TodoList />);
  const todo = screen.getByText("Learn React");
  const deleteButton = todo.nextSibling;

  fireEvent.click(deleteButton);
  expect(todo).not.toBeInTheDocument();
});
