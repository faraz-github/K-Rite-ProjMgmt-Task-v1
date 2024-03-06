import styled from "styled-components";

import Header from "./Header";
import HeadingLevelOneText from "./typography/HeadingLevelOne";
import Search from "./ui-components/Search";
import HorizontalStack from "./ui-components/HorizontalStack";
import IconOnlyButton from "./ui-components/IconOnlyButton";

import { FaComments } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import ViewPanelController from "./viewpanel-components/ViewPanelController";

const ViewPanelContainer = styled.div`
  width: 100%;
  background-color: var(--surface-color);
  border-radius: var(--surface-radius);
  margin: var(--padding);
  margin-left: 0;
  box-shadow: var(--surface-shadow);
  padding: var(--padding);

  @media screen and (max-width: 600px) {
    margin: 0;
  }
`;

const ViewPanel = () => {
  return (
    <ViewPanelContainer>
      <Header padding="4px 8px 6px 8px">
        <HeadingLevelOneText>Products</HeadingLevelOneText>
        <HorizontalStack gap="10px">
          <Search />
          <IconOnlyButton outlined onClick={() => alert("Add OnClick")}>
            <FaComments color="var(--heading-font-color)" />
          </IconOnlyButton>
          <IconOnlyButton outlined onClick={() => alert("Add OnClick")}>
            <FaCog color="var(--heading-font-color)" />
          </IconOnlyButton>
        </HorizontalStack>
      </Header>
      <ViewPanelController />
    </ViewPanelContainer>
  );
};

export default ViewPanel;
