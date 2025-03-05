import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders initial todo list", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a project")).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  
  const input = screen.getByTestId("todo-input");
  const addButton = screen.getByTestId("add-btn");

  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(addButton);

  expect(screen.getByText("New Task")).toBeInTheDocument();
});

test("toggles a todo", () => {
  render(<TodoList />);
  
  const todoItem = screen.getByText("Learn React");
  fireEvent.click(todoItem);

  expect(todoItem).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo", () => {
  render(<TodoList />);
  
  const deleteButton = screen.getByTestId("delete-btn-1");
  fireEvent.click(deleteButton);

  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
