import React, { useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";
import modifyImg from "../assets/modify.png";
import remove from "../assets/remove.png";
import checked from "../assets/checked.png";
import back from "../assets/back.png";

const TodoList = ({ todos, modify, deleteFunction }) => {
  console.log("todos", todos);
  const [modalView, setModalView] = useState(false);
  const [modalViewText, setModalViewText] = useState("");
  const [modalViewData, setModalViewData] = useState({});

  const [modalDeleteView, setModalDeleteView] = useState(false);
  const [modalDeleteViewData, setModalDeleteViewData] = useState({});

  const modalViewChange = (item) => {
    console.log("오픈", modalView, item);
    setModalView((e) => !e);
    setModalViewText(item.text);
    setModalViewData(item);
  };

  const modifyFunc = () => {
    // 실제 수정 작동 기능
    modify(modalViewText, modalViewData);

    // 모달 끄기
    setModalView(false);

    // 수정 텍스트 초기화
    setModalViewText("");
    setModalViewData({});
  };

  const modalDeleteViewChange = (item) => {
    console.log("오픈", modalDeleteView, item);
    setModalDeleteViewData(item);
    setModalDeleteView((e) => !e);
  };

  const deleteFunc = () => {
    deleteFunction(modalDeleteViewData);
    setModalDeleteView(false);
  };

  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <div className="TodoContents">
          {/* 체크버튼 */}
          <TodoItem todo={todo} />
          {/* 문구 */}
          <div style={{ margin: "auto", fontWeight: "bold" }}>{todo.text}</div>
          <div style={{ padding: "1em" }}>
            {/* 수정버튼 */}
            <img
              src={modifyImg}
              style={{ width: 30 }}
              onClick={() => modalViewChange(todo)}
            />
            {/* 삭제 */}
            <img
              src={remove}
              style={{ width: 30, marginLeft: 20 }}
              onClick={() => modalDeleteViewChange(todo)}
            />
          </div>
        </div>
      ))}

      {/* 수정 모달 */}
      {modalView ? (
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 10,
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "50%",
              height: "70%",
              backgroundColor: "white",
            }}
          >
            <div style={{ margin: 40 }}>
              <img
                src={back}
                style={{ width: 30 }}
                onClick={() => setModalView((e) => !e)}
              ></img>
              <div
                style={{
                  width: "80%",
                  height: "13rem",
                  borderWidth: 1,
                  borderStyle: "solid",
                  borderColor: "gray",
                  borderRadius: 15,
                  marginTop: 30,
                  padding: "10%",
                }}
              >
                <textarea
                  placeholder="여기에 입력하세요"
                  value={modalViewText}
                  onChange={(e) => setModalViewText(e.target.value)}
                  style={{ width: "100%", height: "100%", border: "none" }}
                ></textarea>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "4rem",
                  //   borderWidth: 1,
                  //   borderStyle: "solid",
                  //   borderColor: "gray",
                  borderRadius: 15,
                  marginTop: 30,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: 17,
                  background: "rgba(151, 71, 255, 0.6)",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
                onClick={() => modifyFunc()}
              >
                올리기
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* 삭제 모달 */}
      {modalDeleteView ? (
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 10,
            backgroundColor: "rgba(0,0,0,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "70%",
              height: "30%",
              backgroundColor: "white",
            }}
          >
            <div style={{ margin: 60 }}>
              <div
                style={{
                  textAlign: "center",
                  fontSize: 17,
                  fontWeight: "bold",
                }}
              >
                정말 삭제하시겠습니까?
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "30%",
                    height: "2.5rem",
                    //   borderWidth: 1,
                    //   borderStyle: "solid",
                    //   borderColor: "gray",
                    borderRadius: 15,
                    marginTop: 30,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: 17,
                    background: "rgba(151, 71, 255, 0.6)",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    marginRight: 20,
                  }}
                  onClick={() => deleteFunc()}
                >
                  Yes
                </div>
                <div
                  style={{
                    width: "30%",
                    height: "2.5rem",
                    //   borderWidth: 1,
                    //   borderStyle: "solid",
                    //   borderColor: "gray",
                    borderRadius: 15,
                    marginTop: 30,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: 17,
                    background: "rgba(151, 71, 255, 0.6)",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  }}
                  onClick={() => setModalDeleteView(false)}
                >
                  No
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default TodoList;
