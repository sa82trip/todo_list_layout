import React, { useState } from "react";
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./AddTodoForm";

const outterDivStyle = {
  display: "flex",
  border: "solid black",
  justifyContent: "around",
  alignItems: "",
  // 이 부분은 이해가 아직 안됨
  flexDirection: "column" as "column",
};
// const outterDivStyle = {
//   display: "grid",
//   gridTemplateRows: "1fr 1fr 1fr",
//   rowGap: "10px",
// };

const initialTodos: Todo[] = [
  {
    text: "walk the dog",
    complete: true,
  },
  {
    text: "make todo list",
    complete: false,
  },
  {
    text: "exercise: pull up",
    complete: false,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };

  const showOnlyIncompleted: ShowOnlyIncompleted = () => {
    const incompletedItems = todos.filter((item) => !item.complete);
    setTodos(incompletedItems);
  };

  return (
    <>
      <div style={outterDivStyle}>
        <AddTodoForm
          addTodo={addTodo}
          showOnlyIncompleted={showOnlyIncompleted}
        />
        <TodoList todos={todos} toggleTodo={toggleTodo} />
      </div>
    </>
  );
}

export default App;
