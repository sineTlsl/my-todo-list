import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "../../style/font.css";
import { updateTodo } from "../../redux/slices/todoItemsSlice.js";

const TodoEditContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "IBM Plex Sans KR";
  background: #fff;
  border-radius: 20px;
  gap: 1rem;
`;

const TodoTaskBox = styled.div`
  padding: 0 3rem;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  gap: 10px;

  .row {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 2rem;
  }
`;

const TodoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;
`;

const TodoInput = styled.input`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  font-family: "IBM Plex Sans KR";
  border: none;
  border-radius: 10px;
  border: 1px solid black;
  padding: 0 0.5rem;

  &:hover {
    border-bottom: 1px solid black;
  }
  &:focus {
    background: none;
    /* color: #363636; */
    font-weight: 500;
    border: 1px solid red;
  }
`;

const Selected = styled.input.attrs(() => ({
  type: "radio",
}))`
  border: 1.5px solid gray;
  border-radius: 50%;
  accent-color: gray;
  margin: 0;

  :hover {
    cursor: pointer;
  }
  :checked {
    background: gray;
    border: none;
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const RadioBox = styled.div`
  font-weight: 400;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

const SubmitBtn = styled.button`
  width: 20%;
  height: 40px;
  background: ${(props) => props.bg};
  border: none;
  border-radius: 15px;
  color: #fff;
  font-weight: 600;
  letter-spacing: 0.1rem;

  :hover {
    cursor: pointer;
  }
`;

const TodoEditModal = ({ todo, isEditing, setIsEditing }) => {
  let [title, setTitle] = useState(todo.title);
  let [date, setDate] = useState(todo.date || "");
  let [time, setTime] = useState(todo.time || "");
  let [description, setDescription] = useState(todo.description || "");
  let [selected, setSelected] = useState(todo.process);

  const dispatch = useDispatch();

  const onSelected = (e) => {
    setSelected(e.target.value);
  };

  return (
    <TodoEditContainer>
      <TodoTaskBox>
        Task
        <TodoInput
          type="text"
          value={title}
          height={"40px"}
          width={"100%"}
          onChange={(e) => setTitle(e.target.value)}
        />
      </TodoTaskBox>
      <TodoTaskBox>
        <TodoBox>
          Date
          <TodoInput
            type="text"
            value={date}
            height={"38px"}
            width={"20%"}
            onChange={(e) => setDate(e.target.value)}
          />
        </TodoBox>
        <TodoBox>
          Time
          <TodoInput
            type="text"
            value={time}
            height={"38px"}
            width={"20%"}
            onChange={(e) => setTime(e.target.value)}
          />
        </TodoBox>
      </TodoTaskBox>
      <TodoTaskBox>
        Process
        <fieldset className="row">
          <RadioBox>
            <Selected
              type="radio"
              name="TODO"
              value="TODO"
              checked={selected === "TODO" ? true : false}
              onChange={onSelected}
            />
            <label htmlFor="radio">TODO</label>
          </RadioBox>
          <RadioBox>
            <Selected
              type="radio"
              name="DOING"
              value="DOING"
              checked={selected === "DOING" ? true : false}
              onChange={onSelected}
            />
            <label htmlFor="radio">DOING</label>
          </RadioBox>
          <RadioBox>
            <Selected
              type="radio"
              name="DONE"
              value="DONE"
              checked={selected === "DONE" ? true : false}
              onChange={onSelected}
            />
            <label htmlFor="radio">DONE</label>
          </RadioBox>
        </fieldset>
      </TodoTaskBox>
      <TodoTaskBox>
        Description
        <TodoInput
          type="text"
          value={description}
          height={"80px"}
          width={"100%"}
          onChange={(e) => setDescription(e.target.value)}
        />
      </TodoTaskBox>
      <ButtonBox>
        <SubmitBtn
          bg={"#AAAAAA"}
          onClick={() => {
            setIsEditing(!isEditing);
          }}
        >
          CANCEL
        </SubmitBtn>
        <SubmitBtn
          bg={"#565555"}
          onClick={() => {
            dispatch(
              updateTodo({
                id: todo.id,
                title: title,
                date: date,
                time: time,
                description: description,
                process: selected,
              })
            );
            setIsEditing(!isEditing);
          }}
        >
          OK
        </SubmitBtn>
      </ButtonBox>
    </TodoEditContainer>
  );
};

export default TodoEditModal;
