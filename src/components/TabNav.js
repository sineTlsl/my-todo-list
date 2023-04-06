import styled from "styled-components";
import { useState } from "react";
import "../style/font.css";

const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 55px;
  height: 600px;
`;

const TabMenu = styled.ul`
  padding-top: 3rem;
  font-size: 15px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  font-family: "IBM Plex Sans KR";

  .submenu {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100px;
    width: 100%;
    padding: 0.5rem;
    border-radius: 0px 15px 15px 0px;
    margin-bottom: 1rem;
    background: ${(props) => props.theme.tab};
  }
  .focused {
    background: ${(props) => props.theme.selectTab};
    color: #fff;
    transition: 0.5s;
  }
`;

const TabNav = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const tabData = ["ToDo List", "Diary", "Calendar"];

  return (
    <NavContainer>
      <TabMenu>
        {tabData.map((tab, idx) => {
          return (
            <li
              className={currentTab === idx ? "submenu focused" : "submenu"}
              key={idx}
              onClick={() => setCurrentTab(idx)}
            >
              {tab}
            </li>
          );
        })}
      </TabMenu>
    </NavContainer>
  );
};

export default TabNav;
