import React from "react";
import { TodoListItem } from "./TodoListItem";

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
}
const ulStyle = {
  // border: "solid red",
  display: "flex",
  flexDirection: "column" as "column",
  listStyle: "none",
  paddingLeft: "0px",
};

const bottomText = {
  display: "flex",
  justifyContent: "space-between",
};

export const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {
  return (
    <>
      <ul style={ulStyle}>
        {todos.map((todo) => (
          <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
      <div style={bottomText}>
        {todos.length > 0 && (
          <h3 title="remaining todos!">1 is not done yet!</h3>
        )}
        <h4 title="remaining time of today">1 hour 1 minute left...</h4>
      </div>
    </>
  );
};
