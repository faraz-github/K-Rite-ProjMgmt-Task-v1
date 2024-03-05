import styled from "styled-components";
import Image from "next/image";

import Header from "./Header";
import DashboardTitle from "./header-components/DashboardTitle";
import Avatar from "./ui-components/Avatar";
import Teams from "./header-components/Teams";
import IconAndTitleText from "./ui-components/IconAndTitleText";
import HeadingLevelThreeText from "./typography/HeadingLevelThree";
import Shortcut from "./ui-components/Shortcut";
import IconOnlyButton from "./ui-components/IconOnlyButton";

import { FaShoppingBag } from "react-icons/fa";
import { FaBezierCurve } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const FlexDivCenterSpaceBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

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
      <>
        <Teams padding="8px">
          <IconAndTitleText>
            <FaBezierCurve />
            <HeadingLevelThreeText>Design Team</HeadingLevelThreeText>
          </IconAndTitleText>
          <Shortcut keyOne={"#"} operatorKey={"+"} keyTwo={"A"} />
        </Teams>
        <Teams padding="8px">
          <IconAndTitleText>
            <FaShoppingBag />
            <HeadingLevelThreeText>Marketing Team</HeadingLevelThreeText>
          </IconAndTitleText>
          <Shortcut keyOne={"#"} operatorKey={"+"} keyTwo={"A"} />
        </Teams>
        <Teams padding="8px">
          <IconAndTitleText>
            <FaCode />
            <HeadingLevelThreeText>Development Team</HeadingLevelThreeText>
          </IconAndTitleText>
          <Shortcut keyOne={"#"} operatorKey={"+"} keyTwo={"A"} />
        </Teams>
        <Teams padding="8px" dimmed>
          <IconAndTitleText>
            <FaPlusSquare />
            <HeadingLevelThreeText dimmed>Create a team</HeadingLevelThreeText>
          </IconAndTitleText>
        </Teams>
      </>
      <FlexDivCenterSpaceBetween style={{ padding: "8px" }}>
        <HeadingLevelThreeText dimmed>FOLDERS</HeadingLevelThreeText>
        <IconOnlyButton onClick={() => alert("Add OnClick")}>
          <FaPlus color="var(--dimmed)" />
        </IconOnlyButton>
      </FlexDivCenterSpaceBetween>
    </SidePanelContainer>
  );
};

export default SidePanel;
