import styled from "styled-components";
import VerticalStack from "../ui-components/VerticalStack";
import IconAndTitleText from "../ui-components/IconAndTitleText";

import { FaUserPlus, FaRegQuestionCircle } from "react-icons/fa";
import HeadingLevelThreeText from "../typography/HeadingLevelThree";
import Shortcut from "../ui-components/Shortcut";
import Count from "../ui-components/Count";
import HorizontalStack from "../ui-components/HorizontalStack";
import Button from "../ui-components/Button";

const FlexDivCenterSpaceBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SidepanelFooterContainer = styled.div`
  padding: 8px 16px;
`;

const SidepanelFooter = () => {
  return (
    <SidepanelFooterContainer>
      <VerticalStack gap="5px">
        <IconAndTitleText>
          <FaUserPlus />
          <HeadingLevelThreeText>Invite Teammates</HeadingLevelThreeText>
        </IconAndTitleText>
        <FlexDivCenterSpaceBetween>
          <IconAndTitleText>
            <FaRegQuestionCircle />
            <HeadingLevelThreeText>Help and first steps</HeadingLevelThreeText>
          </IconAndTitleText>
          <Shortcut keyOne={"#"} keyTwo={"A"} />
        </FlexDivCenterSpaceBetween>
        <FlexDivCenterSpaceBetween>
          <HorizontalStack gap="5px" center>
            <Count count={7} />
            <HeadingLevelThreeText>days left on trial</HeadingLevelThreeText>
          </HorizontalStack>
          <Button size="small">Add Billing</Button>
        </FlexDivCenterSpaceBetween>
      </VerticalStack>
    </SidepanelFooterContainer>
  );
};

export default SidepanelFooter;
