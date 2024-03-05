import styled from "styled-components";

import IconAndTitleText from "./ui-components/IconAndTitleText";

import { FaAngleUp, FaFolder, FaPlusSquare } from "react-icons/fa";
import HeadingLevelThreeText from "./typography/HeadingLevelThree";
import IconOnlyButton from "./ui-components/IconOnlyButton";
import { FaAngleDown } from "react-icons/fa";
import { FlexDivCenterSpaceBetween } from "./SidePanel";
import VerticalStack from "./ui-components/VerticalStack";

const FoldersContainer = styled.div`
  padding: 0 8px;
`;
const SubFoldersContainer = styled.div`
  margin-left: 8px;
  padding: 0 16px;
  border-left: 2px solid var(--surface-border);
`;

const Folders = () => {
  return (
    <FoldersContainer>
      <VerticalStack gap="8px">
        <FlexDivCenterSpaceBetween>
          <IconAndTitleText>
            <FaFolder />
            <HeadingLevelThreeText>Products</HeadingLevelThreeText>
          </IconAndTitleText>
          <IconOnlyButton onClick={() => alert("Add OnClick")}>
            <FaAngleUp color="var(--dimmed)" />
          </IconOnlyButton>
        </FlexDivCenterSpaceBetween>
        <SubFoldersContainer>
          <VerticalStack gap="8px">
            <HeadingLevelThreeText>Roadmap</HeadingLevelThreeText>
            <HeadingLevelThreeText>Feedback</HeadingLevelThreeText>
            <HeadingLevelThreeText>Performance</HeadingLevelThreeText>
            <HeadingLevelThreeText>Team</HeadingLevelThreeText>
            <HeadingLevelThreeText>Analytics</HeadingLevelThreeText>
            <IconAndTitleText>
              <FaPlusSquare color="var(--dimmed)" />
              <HeadingLevelThreeText dimmed>Add a sub</HeadingLevelThreeText>
            </IconAndTitleText>
          </VerticalStack>
        </SubFoldersContainer>

        <FlexDivCenterSpaceBetween>
          <IconAndTitleText>
            <FaFolder />
            <HeadingLevelThreeText>Sales</HeadingLevelThreeText>
          </IconAndTitleText>
          <IconOnlyButton onClick={() => alert("Add OnClick")}>
            <FaAngleDown color="var(--dimmed)" />
          </IconOnlyButton>
        </FlexDivCenterSpaceBetween>
        <FlexDivCenterSpaceBetween>
          <IconAndTitleText>
            <FaFolder />
            <HeadingLevelThreeText>Design</HeadingLevelThreeText>
          </IconAndTitleText>
          <IconOnlyButton onClick={() => alert("Add OnClick")}>
            <FaAngleDown color="var(--dimmed)" />
          </IconOnlyButton>
        </FlexDivCenterSpaceBetween>
        <IconAndTitleText>
          <FaFolder />
          <HeadingLevelThreeText>Office</HeadingLevelThreeText>
        </IconAndTitleText>

        <IconAndTitleText>
          <FaFolder />
          <HeadingLevelThreeText>Legal</HeadingLevelThreeText>
        </IconAndTitleText>
      </VerticalStack>
    </FoldersContainer>
  );
};

export default Folders;
