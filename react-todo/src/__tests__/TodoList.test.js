import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("يجب أن يتم عرض المهام الأولية", () => {
  render(<TodoList />);
  expect(screen.getByText("تعلم React")).toBeInTheDocument();
  expect(screen.getByText("ممارسة الاختبار في React")).toBeInTheDocument();
});

test("يجب أن يكون المستخدم قادرًا على إضافة مهمة جديدة", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText("أدخل مهمة جديدة");
  const button = screen.getByText("إضافة");

  fireEvent.change(input, { target: { value: "مهمة جديدة" } });
  fireEvent.click(button);

  expect(screen.getByText("مهمة جديدة")).toBeInTheDocument();
});

test("يجب أن يتمكن المستخدم من تبديل حالة المهمة بين مكتملة وغير مكتملة", () => {
  render(<TodoList />);
  const todoItem = screen.getByText("تعلم React");

  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle("text-decoration: line-through");

  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle("text-decoration: none");
});

test("يجب أن يتمكن المستخدم من حذف المهمة", () => {
  render(<TodoList />);
  const todoItem = screen.getByText("تعلم React");
  const deleteButton = todoItem.nextSibling;

  fireEvent.click(deleteButton);
  expect(todoItem).not.toBeInTheDocument();
});
