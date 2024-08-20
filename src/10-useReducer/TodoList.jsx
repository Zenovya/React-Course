import PropTypes from "prop-types";

import ListItem from "./ListItem";

const TodoList = ({ todos = [] }) => {
  return (
    <ul className="list-group">
      {
        todos.map(todo => (
          <ListItem key={todo.id} todo={todo} />
        ))
      }
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
}

export default TodoList;
