import PropTypes from "prop-types";

const ListItem = ({ todo }) => {
  const { id, description } = todo;

  return (
    <li key={id} className="list-group-item d-flex justify-content-between">
      <span className="align-self-center">{description}</span>
      <button className="btn btn-sm btn-close"></button>
    </li>
  );
};

ListItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }),
};

export default ListItem;
