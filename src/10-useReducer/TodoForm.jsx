import PropTypes from "prop-types";
// import { useState } from "react";
import { useForm } from "../hooks/useForm";

const TodoForm = ({ onNewTodo }) => {
  const { formState, description, handleInputChange, handleResetForm } =
    useForm({
      description: "",
    });

  const onSumbit = (e) => {
    e.preventDefault();

    if (!description.trim().length > 0) return;

    onNewTodo({
      id: new Date().getTime(),
      ...formState,
      done: false,
    });
    handleResetForm();
  };

  return (
    <>
      <h5>Add Todo</h5>
      <hr />
      <form onSubmit={onSumbit}>
        <input
          type="text"
          name="description"
          value={description}
          placeholder="Description"
          className="form-control"
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-outline-primary mt-1">
          {">"}Add{"<"}
        </button>
      </form>
    </>
  );
};

TodoForm.propTypes = {
  onNewTodo: PropTypes.func.isRequired,
};

export default TodoForm;
