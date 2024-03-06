import styled from "styled-components";
import Image from "next/image";

import Header from "./Header";
import DashboardTitle from "./sidepanel-components/DashboardTitle";
import Teams from "./Teams";
import Folders from "./Folders";
import IconAndTitleText from "./ui-components/IconAndTitleText";
import Shortcut from "./ui-components/Shortcut";
import Avatar from "./ui-components/Avatar";
import HeadingLevelThreeText from "./typography/HeadingLevelThree";

import {
  FaShoppingBag,
  FaBezierCurve,
  FaCode,
  FaPlusSquare,
} from "react-icons/fa";
import SidepanelFooter from "./sidepanel-components/SidepanelFooter";

const FlexVerticalDivSpaceBetween = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
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
    width: 60%;
    position: absolute;
    height: 100%;
    margin: 0;
  }
`;

const SidePanel = ({ isOpen }) => {
  return (
    <SidePanelContainer style={{ display: isOpen ? "block" : "none" }}>
      <FlexVerticalDivSpaceBetween>
        <div>
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
                <FaPlusSquare color="var(--dimmed)" />
                <HeadingLevelThreeText dimmed>
                  Create a team
                </HeadingLevelThreeText>
              </IconAndTitleText>
            </Teams>
          </>

          <Folders />
        </div>
        <SidepanelFooter />
      </FlexVerticalDivSpaceBetween>
    </SidePanelContainer>
  );
};

export default SidePanel;
