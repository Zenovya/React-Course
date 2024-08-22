import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { useTodos } from "../hooks/useTodos";

const TodoApp = () => {
  const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleNewTodo, handleToggleTodo } = useTodos();

  return (
    <>
      <h1> Todo App ({todosCount}) | Pendientes: {pendingTodosCount}</h1>
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
