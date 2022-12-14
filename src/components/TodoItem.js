import React from "react";
import "./TodoItem.css";
// import TodoList from "TodoList";
import * as Icon from "react-icons/fi";
import Checkbox from "react-custom-checkbox";

const TodoItem = ({ todo }) => {
  const { id, text, checked } = todo;
  console.log("todo2", todo);
  return (
    <div className="TodoItem">
      <div className={`content ${checked ? "checked" : ""}`}>
        {/* <div>{text}</div> */}

        {/* 체크박스 */}
        <Checkbox
          checked={checked}
          icon={
            <img
              src={require("../assets/checkedImage.png")}
              style={{ width: 24 }}
              alt=""
            />
          }
          borderColor="#ECECEC"
          borderRadius={10}
          size={18}
        />
      </div>
    </div>
  );
};
export default TodoItem;
