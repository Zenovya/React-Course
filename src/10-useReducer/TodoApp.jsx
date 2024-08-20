import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const initialState = [
  // {
  //   id: new Date().getTime(),
  //   description: "Buy bread",
  //   done: false,
  // },
];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
}

const TodoApp = () => {
  const [todos, dispatchTodos] = useReducer(todoReducer, initialState, init);


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  const handleNewTodo = (newTodo) => {
    dispatchTodos({
      type: "Add Todo",
      payload: newTodo,
    });
  }

  const handleDeleteTodo = (todoId) => {
    dispatchTodos({
      type: "Delete Todo",
      payload: todoId,
    });
  }

  const handleToggleTodo = (todoId) => {
    dispatchTodos({
      type: "Toggle Todo",
      payload: todoId,
    });
  }

  return (
    <>
      <h1> Todo App ({todos.length}) | Pendientes: {2}</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo}/>
        </div>
        <div className="col-5">
          <TodoForm onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};

export default TodoApp;
