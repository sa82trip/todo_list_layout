import React from "react";
import "./TodoListItem.css";

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}
const listStyle = {
  display: "flex",
  justifyContent: "space-between",
  margin: "5px",
  flexWrap: "wrap" as "wrap",
  borderBottom: "solid black",
};

const spanStyle = {
  color: "red",
};
const randomTime = () => {
  let currentTime = new Date();
  const stringifiedCurrentTime = `${currentTime.getHours()}:${currentTime.getMinutes()}`;
  return stringifiedCurrentTime;
};

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <li style={listStyle}>
      <label
        title="click to checek!"
        style={{ textDecoration: todo.complete ? "line-through" : undefined }}
      >
        <input
          type="checkbox"
          checked={todo.complete}
          onClick={() => {
            toggleTodo(todo);
            randomTime();
          }}
        />
        <span>{`${todo.text} `}</span>
      </label>

      <span style={spanStyle} title="click if you want to delete">
        ✖
      </span>
      <span title="Start time and End time">
        {todo.complete
          ? `S: ${todo.createdDate}  --  E: ${randomTime()}`
          : `S: ${todo.createdDate}`}
      </span>
    </li>
  );
};
