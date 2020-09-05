import React, { useState } from "react";
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./AddTodoForm";
import "./App.css";

const containerDiv = {
  // border: "solid black",
  display: "flex",
  flexDirection: "row" as "row",
  // 예를 들어 브라우저 높이값이 900px일때 1vh는 9px이라는 뜻
  // height: "40vh",
};

const innerDivStyle = {
  // border: "red solid",
  margin: "auto",
};

const initialTodos: Todo[] = [
  {
    text: "study interactive web",
    complete: true,
    createdDate: "21:28",
  },
  {
    text: "make todo list",
    complete: false,
    createdDate: "21:31",
  },
  {
    text: "exercise: pull up",
    complete: false,
    createdDate: "21:33",
  },
  {
    text: "study flex of css",
    complete: false,
    createdDate: "21:40",
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
          createdDate: "23:59",
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = {
      text,
      complete: false,
      createdDate: "23:59",
    };
    setTodos([...todos, newTodo]);
  };

  const showOnlyIncompleted: ShowOnlyIncompleted = () => {
    const incompletedItems = todos.filter((item) => !item.complete);
    setTodos(incompletedItems);
  };

  return (
    <>
      <div style={containerDiv}>
        <div style={innerDivStyle}>
          <h1 className="title_of_app">Easy Todo</h1>
          <AddTodoForm
            addTodo={addTodo}
            showOnlyIncompleted={showOnlyIncompleted}
          />
          <TodoList todos={todos} toggleTodo={toggleTodo} />
        </div>
      </div>
    </>
  );
}

export default App;
