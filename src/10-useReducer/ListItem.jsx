import PropTypes from "prop-types";

const ListItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  const { id, description, done } = todo;

  return (
    <li key={id} className="list-group-item" onDoubleClick={() => onToggleTodo(id)}>
      <div className="row col d-flex justify-content-end">
        <button
          className="btn btn-sm btn-close"
          onClick={() => onDeleteTodo(id)}
        ></button>
      </div>
      <div className="row col">
        <div className="col-sm-12 col-md-6">
          <h4
            className={`align-self-center text-break ${done ? "text-decoration-line-through" : ""}`}
          >
            {description}
          </h4>
        </div>
      </div>
    </li>
  );
};

ListItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }),
  onDeleteTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
};

export default ListItem;
