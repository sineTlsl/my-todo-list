import styled from "styled-components";
import TodoList from "./pages/TodoList";
import TabNav from "./components/TabNav";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: ${(props) => props.theme.darkMode.background};
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  height: 600px;
  background: ${(props) => props.theme.lightMode.background};
  border-radius: 20px;

  @media ${(props) => props.theme.tablet} {
    width: 90%;
    margin: 0 auto;
  }
`;

const RowBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 520px;
`;

function App() {
  return (
    <Container>
      <AppContainer>
        <Header />
        <RowBox>
          {/* <SideBar /> */}
          <TodoList />
        </RowBox>
      </AppContainer>
      <TabNav />
    </Container>
  );
}

export default App;
