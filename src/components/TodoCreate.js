// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
// import { AwesomeButton } from "react-awesome-button";
// import "react-awesome-button/dist/styles.css";
import './TodoCreate.css';

const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  /* background: #f8f9fa; */
  background: #f3f3f3;
  padding-left: 32px;
  padding-top: 20px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 40%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
  margin-right: 20px;
`;

// eslint-disable-next-line react/prop-types
function TodoCreate({ insert }) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');

  const onToggle = () => setOpen(!open);

  useEffect(() => {
    console.log(text);
  }, [text]);

  const insertPress = (e) => {
    e.preventDefault();
    insert(text);
  };

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm>
            <Input
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus
              placeholder="할 일을 입력 후, 확인 를 누르세요"
              onChange={(e) => setText(e.target.value)}
            />
            {/* <AwesomeButton
              type="secondary"
              //   onPress={(e, r) => {
              //     insertPress(e);
              //   }}
              onPress={insertPress}
            >
              Insert
            </AwesomeButton> */}
            {/* <button onClick={insertPress}>insert</button> */}
            <div className="frame">
              <button className="custom-btn btn-8" onClick={insertPress}>
                <span style={{ fontWeight: 'bold', fontSize: 18 }}>확인</span>
              </button>
            </div>
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default TodoCreate;
