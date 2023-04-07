import { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import "../../style/font.css";
import { removeTodo, processTodo } from "../../redux/slices/todoItemsSlice.js";
import TodoEditModal from "./TodoEditModal";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";

const TodoContainer = styled.div`
  width: 100%;
  height: 100%;
  /* height: 330px; */
  display: flex;
  position: relative;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const TodoItems = styled.div`
  position: absolute;
  overflow-y: scroll;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 0 2.5rem 0;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const TodoRadiusBox = styled.div`
  width: 95%;
  height: 50px;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 15px;
  padding: 5px 15px;
  font-size: 14px;
  font-family: "IBM Plex Sans KR";
`;

const TodoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;

  .todo_left {
    display: flex;
    align-items: center;
  }
  .todo_leftIcon {
    padding-right: 0.5rem;
    cursor: pointer;
  }
  .todo_rightIcon {
    display: flex;
    gap: 1rem;
    cursor: pointer;
  }
  .todo_done {
    color: gray;
    text-decoration-line: line-through;
    text-decoration-color: gray;
  }
`;

const Todo = ({ todoTabName, isEditing, setIsEditing }) => {
  let [currentTodo, setCurrentTodo] = useState({});

  let todoItems = useSelector((state) => state.todoItems);
  const dispatch = useDispatch();

  return (
    <TodoContainer>
      {!isEditing ? (
        <TodoItems>
          {todoItems.map((todo, idx) => {
            return todoTabName === todo.process || todoTabName === "All" ? (
              <TodoRadiusBox key={idx}>
                <TodoBox>
                  <div
                    className={
                      todo.process === "DONE"
                        ? "todo_left todo_done"
                        : "todo_left"
                    }
                  >
                    <div className="todo_leftIcon">
                      {todo.process === "DONE" ? (
                        <FontAwesomeIcon
                          icon={faSquareCheck}
                          size="xl"
                          onClick={() => dispatch(processTodo(todo.id))}
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faSquare}
                          size="xl"
                          onClick={() => dispatch(processTodo(todo.id))}
                        />
                      )}
                    </div>
                    {todo.title}
                  </div>
                  <div className="todo_rightIcon">
                    <FontAwesomeIcon
                      icon={faPen}
                      size="xl"
                      color={todo.process === "DONE" ? "gray" : "black"}
                      onClick={() => {
                        if (todo.process !== "DONE") {
                          setIsEditing(!isEditing);
                          setCurrentTodo({
                            id: todo.id,
                            title: todo.title,
                            date: todo.date,
                            time: todo.time,
                            description: todo.description,
                            process: todo.process,
                          });
                        }
                      }}
                    />
                    <FontAwesomeIcon
                      icon={faTrash}
                      size="xl"
                      onClick={() => dispatch(removeTodo(todo.id))}
                    />
                  </div>
                </TodoBox>
              </TodoRadiusBox>
            ) : null;
          })}
        </TodoItems>
      ) : (
        <TodoEditModal
          todo={currentTodo}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      )}
    </TodoContainer>
  );
};

export default Todo;
