import React, { useState } from "react";
import "./App.css";
import Template from "./components/Template";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "나만의 애플케이션만들기",
      checked: true,
    },
    {
      id: 2,
      text: "소그룹 회의",
      checked: true,
    },
    {
      id: 3,
      text: "블로깅",
      checked: true,
    },
  ]);
  return (
    <Template todoLength={todos.length}>
      <TodoList todos={todos} />
    </Template>
  );
};

export default App;
