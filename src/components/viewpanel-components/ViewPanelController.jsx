import styled from "styled-components";
import DropdownButton from "../ui-components/DropdownButton";
import IconAndTitleText from "../ui-components/IconAndTitleText";
import { FaBorderAll } from "react-icons/fa";
import HeadingLevelThreeText from "../typography/HeadingLevelThree";
import IconAndTextButton from "../ui-components/IconAndTextButton";
import { FaSortAlphaDown } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import HorizontalStack from "../ui-components/HorizontalStack";
import { FaPeopleArrows } from "react-icons/fa";
import { FaFile } from "react-icons/fa";

const ViewPanelControllerContainer = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--surface-border);
`;

const ViewPanelController = () => {
  return (
    <ViewPanelControllerContainer>
      <HorizontalStack gap="5px" center>
        <DropdownButton>
          <IconAndTitleText>
            <FaBorderAll />
            <HeadingLevelThreeText>All brands</HeadingLevelThreeText>
          </IconAndTitleText>
        </DropdownButton>
        <DropdownButton>
          <HeadingLevelThreeText>Desk</HeadingLevelThreeText>
        </DropdownButton>
        <DropdownButton>
          <HeadingLevelThreeText>Tags</HeadingLevelThreeText>
        </DropdownButton>
        <IconAndTextButton outlined padding="6px 10px">
          <FaSortAlphaDown color="var(--dimmed)" />
          <HeadingLevelThreeText dimmed>Sort</HeadingLevelThreeText>
        </IconAndTextButton>
        <IconAndTextButton outlined padding="6px 10px">
          <FaFilter color="var(--dimmed)" />
          <HeadingLevelThreeText dimmed>Filter</HeadingLevelThreeText>
        </IconAndTextButton>
      </HorizontalStack>
      <HorizontalStack gap="5px" center>
        <IconAndTextButton outlined padding="6px 10px">
          <FaPeopleArrows color="var(--heading-font-color)" />
          <HeadingLevelThreeText>Meeting</HeadingLevelThreeText>
        </IconAndTextButton>
        <IconAndTextButton outlined padding="6px 10px">
          <FaFile color="var(--heading-font-color)" />
          <HeadingLevelThreeText>Import/Export</HeadingLevelThreeText>
        </IconAndTextButton>
      </HorizontalStack>
    </ViewPanelControllerContainer>
  );
};

export default ViewPanelController;
