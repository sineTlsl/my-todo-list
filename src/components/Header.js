import styled from "styled-components";
import "../style/font.css";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${(props) => props.theme.headerTitleText};
  font-weight: 400;
  font-size: 45px;
  width: 100%;
  height: 80px;
  padding: 0 0 0 1.8rem;
  font-family: "PoetsenOne Regular";
`;

const Header = () => {
  return <HeaderContainer>TODO LIST</HeaderContainer>;
};

export default Header;
