import React, { useState } from "react";

interface Props {
  addTodo: AddTodo;
  showOnlyIncompleted: ShowOnlyIncompleted;
}

const inputStyle = {
  backgroundColor: "pink",
  color: "purple",
  width: "25%",
  border: "dot red",
  margin: "20px 0px 0px 25px ",
};

export const AddTodoForm: React.FC<Props> = ({
  addTodo,
  showOnlyIncompleted,
}) => {
  const [text, setText] = useState("");

  return (
    <form>
      <input
        style={inputStyle}
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
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
