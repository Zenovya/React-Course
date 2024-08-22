import { useEffect, useReducer } from "react";
import { todoReducer } from "../10-useReducer/todoReducer";


const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
}

export const useTodos = () => {

  const [todos, distpatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  const handleNewTodo = (newTodo) => {
    distpatch({
      type: "Add Todo",
      payload: newTodo,
    });
  }

  const handleDeleteTodo = (todoId) => {
    distpatch({
      type: "Delete Todo",
      payload: todoId,
    });
  }

  const handleToggleTodo = (todoId) => {
    distpatch({
      type: "Toggle Todo",
      payload: todoId,
    });
  }

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo => !todo.done).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  }
}
