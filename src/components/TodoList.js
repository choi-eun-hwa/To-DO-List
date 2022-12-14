import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";
import modify from "../assets/modify.png";
import remove from "../assets/remove.png";

const TodoList = ({ todos }) => {
  console.log("todos", todos);
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <div className="TodoContents">
          {/* 체크버튼 */}
          <TodoItem />
          {/* 문구 */}
          <div style={{ margin: "auto", fontWeight: "bold" }}>{todo.text}</div>
          <div style={{ padding: "1em" }}>
            {/* 수정버튼 */}
            <img src={modify} style={{ width: 30 }} />
            {/* 삭제 */}
            <img src={remove} style={{ width: 30, marginLeft: 20 }} />
          </div>
        </div>
      ))}
    </div>
  );
};
export default TodoList;
