interface Todo {
  text: string;
  complete: boolean;
  createdDate: String;
}

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (text: string) => void;

type ShowOnlyIncompleted = () => void;
