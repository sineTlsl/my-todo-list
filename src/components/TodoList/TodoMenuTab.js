import styled from "styled-components";
import { useState } from "react";
import Todo from "./Todo";
import "../../style/font.css";

const TodoMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 95%;
  height: 100%;
`;

const TabMenu = styled.ul`
  display: flex;
  font-size: 14px;
  font-weight: bold;
  font-family: "IBM Plex Sans KR";
  border: solid 2px ${(props) => props.theme.selectTab};

  .submenu {
    cursor: pointer;
    flex: 0 1 calc(100% / 4 - 120px);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 40px;
    border: none;
  }
  .focused {
    border-bottom: solid 4px #4f2b2b;
    color: black;
    font-size: 15px;
    transition: 0.5s;
    text-shadow: 2px 2px #fff;
  }
`;

const TodoMenuTab = ({ isEditing, setIsEditing }) => {
  let [todoTab, setTodoTab] = useState(0);
  let todoTabName = ["All", "TODO", "DOING", "DONE"];
  return (
    <TodoMenuContainer>
      {!isEditing ? (
        <TabMenu>
          {todoTabName.map((tab, idx) => {
            return (
              <li
                className={todoTab === idx ? "submenu focused" : "submenu"}
                key={idx}
                onClick={() => setTodoTab(idx)}
              >
                {tab}
              </li>
            );
          })}
        </TabMenu>
      ) : null}
      <Todo
        todoTabName={todoTabName[todoTab]}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />
    </TodoMenuContainer>
  );
};

export default TodoMenuTab;
