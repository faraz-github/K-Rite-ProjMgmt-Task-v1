import styled from "styled-components";

const SidePanelContainer = styled.div`
  width: 25%;
  background-color: var(--bg-color);
  color: var(--text-color);
  overflow-x: hidden;
  transition: width 0.5s;

  @media screen and (max-width: 600px) {
    width: 40%;
    position: absolute;
    height: 100%;
  }
`;

const SidePanel = ({ isOpen }) => {
  return (
    <SidePanelContainer style={{ display: isOpen ? "block" : "none" }}>
      <h5>SidePanel</h5>
    </SidePanelContainer>
  );
};

export default SidePanel;
