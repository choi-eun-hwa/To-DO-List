import React, { useState } from "react";
import "./App.css";
import TodoTemplate from "./components/TodoTemplate";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import TodoHead from "./components/TodoHead";

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
      text: "블로깅하기",
      checked: true,
    },
  ]);

  // 배열 추가
  const insert = (item) => {
    const obj = {
      id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
      text: item,
      checked: true,
    };
    setTodos((e) => [...e, obj]);
  };

  // 변경
  const modify = (text, data) => {
    const arr = [];
    todos.map((item) => {
      if (item.id != data.id) {
        arr.push(item);
      } else {
        arr.push({
          id: item.id,
          text: text,
          checked: item.checked,
        });
      }
    });
    setTodos(arr);
  };

  // 삭제
  const deleteFunction = (data) => {
    const arr = [];
    todos.map((item) => {
      if (item.id != data.id) {
        arr.push(item);
      }
    });
    setTodos(arr);
  };

  return (
    <>
      {/* <Template todoLength={todos.length}> */}
      <TodoHead />
      <TodoList todos={todos} modify={modify} deleteFunction={deleteFunction} />
      <TodoCreate insert={insert} />
      {/* </Template> */}
    </>
  );
};

export default App;
