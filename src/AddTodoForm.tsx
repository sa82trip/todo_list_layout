import React, { useState } from "react";

interface Props {
  addTodo: AddTodo;
  showOnlyIncompleted: ShowOnlyIncompleted;
}

export const AddTodoForm: React.FC<Props> = ({
  addTodo,
  showOnlyIncompleted,
}) => {
  const [text, setText] = useState("");

  return (
    <form>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder="write a Todo!!"
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          addTodo(text);
          setText(" ");
        }}
      >
        Add Todo
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          showOnlyIncompleted();
        }}
      >
        delete completed items
      </button>
    </form>
  );
};
