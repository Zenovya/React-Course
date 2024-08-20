import { useReducer } from "react";
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

const TodoApp = () => {
  const [todos, dispatchTodos] = useReducer(todoReducer, initialState);

  const handleNewTodo = (newTodo) => {
    dispatchTodos({
      type: "Add Todo",
      payload: newTodo,
    });
  }

  return (
    <>
      <h1> Todo App ({10}) | Pendientes: {2}</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} />
        </div>
        <div className="col-5">
          <TodoForm onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};

export default TodoApp;
