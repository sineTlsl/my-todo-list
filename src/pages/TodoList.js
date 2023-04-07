import styled from "styled-components";
import { useState } from "react";

// components
import TodoInput from "../components/TodoList/TodoInput";
import TodoMenuTab from "../components/TodoList/TodoMenuTab";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TodoListContainer = styled.div`
  height: 100%;
  padding: 0 3rem 2rem 3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  /* margin: 1.5rem 0 2.5rem 0; */
`;

const TodoList = () => {
  let [isEditing, setIsEditing] = useState(false);

  return (
    <Container>
      {!isEditing ? <TodoInput /> : null}
      <TodoListContainer>
        <TodoMenuTab isEditing={isEditing} setIsEditing={setIsEditing} />
      </TodoListContainer>
    </Container>
  );
};

export default TodoList;
