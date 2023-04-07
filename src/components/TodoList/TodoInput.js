import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo } from "../../redux/slices/todoItemsSlice.js";
import "../../style/font.css";

const TodoInputContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 45px;
  padding: 0.5rem 3rem 1rem 1rem;
`;

const TodoInputAdd = styled.input`
  height: 35px;
  width: 40%;
  background: #ab9896;
  font-family: "IBM Plex Sans KR";
  border: none;
  margin-right: 1rem;
  border-radius: 5px;

  &::placeholder {
    color: #fff;
  }
  &:hover {
    border: 1px solid black;
  }
  &:focus {
    background: none;
    color: #363636;
    font-weight: 500;
    border: 1px solid red;
  }
`;

const AddBtn = styled.button`
  height: 35px;
  width: 100px;
  font-family: "IBM Plex Sans KR";
  font-weight: 600;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 7px 7px 23px -12px #a6535a;
  border-radius: 24px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 5px -1px,
    rgba(0, 0, 0, 0.14) 0 6px 10px 0, rgba(0, 0, 0, 0.12) 0 1px 18px 0;
  box-sizing: border-box;

  &:hover {
    background: #615555;
    border: none;
    color: #fff;
  }
  &:active {
    background: #3d3636;
    color: #fff;
  }
`;

const TodoInput = () => {
  let [todoValue, setTodoValue] = useState("");

  const dispatch = useDispatch();

  return (
    <TodoInputContainer>
      <TodoInputAdd
        type="text"
        placeholder="Add to TODO"
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
      />
      <AddBtn
        onClick={() => {
          dispatch(addTodo(todoValue));
          setTodoValue("");
        }}
      >
        ADD
      </AddBtn>
    </TodoInputContainer>
  );
};

export default TodoInput;
