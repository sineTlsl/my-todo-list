import styled from "styled-components";

const SideContainer = styled.aside`
  flex: 0 0 260px;
  display: flex;
  height: 100%;
`;

const SideRadius = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 20px;
  margin: 0 1.8rem 1.8rem 1.8rem;
`;

const SideBar = () => {
  return (
    <SideContainer>
      <SideRadius></SideRadius>
    </SideContainer>
  );
};

export default SideBar;
