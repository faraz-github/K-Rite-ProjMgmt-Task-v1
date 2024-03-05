import styled from "styled-components";

import Header from "./Header";
import DashboardTitle from "./header-components/DashboardTitle";
import Avatar from "./ui-components/Avatar";
import Image from "next/image";

const SidePanelContainer = styled.div`
  width: 25%;
  background-color: var(--surface-color);
  border-radius: var(--surface-radius);
  margin: var(--padding);
  margin-right: var(--surface-gap);
  box-shadow: var(--surface-shadow);
  overflow-x: hidden;
  transition: width 0.5s;
  padding: var(--padding);

  @media screen and (max-width: 600px) {
    width: 40%;
    position: absolute;
    height: 100%;
    margin: 0;
  }
`;

const SidePanel = ({ isOpen }) => {
  return (
    <SidePanelContainer style={{ display: isOpen ? "block" : "none" }}>
      <Header padding="0px 0px 2px 0px">
        <DashboardTitle />
        <Avatar dimension="30px">
          <Image
            src="/female-user.png"
            alt="Brand Logo"
            width={30}
            height={30}
            priority
          />
        </Avatar>
      </Header>
    </SidePanelContainer>
  );
};

export default SidePanel;
