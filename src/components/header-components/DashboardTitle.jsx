import Image from "next/image";
import styled from "styled-components";

import OverlineText from "../typography/OverlineText";
import HeadingLevelTwoText from "../typography/HeadingLevelTwo";
import VerticalStack from "../ui-components/VerticalStack";

const DashboardTitleContainer = styled.div`
  display: flex;
`;
const BrandLogoContainer = styled.div`
  margin-right: var(--surface-gap);
`;

const DashboardTitle = () => {
  return (
    <DashboardTitleContainer>
      <BrandLogoContainer>
        <Image
          src="/brand-image.png"
          alt="Brand Logo"
          width={40}
          height={40}
          priority
        />
      </BrandLogoContainer>
      <VerticalStack>
        <OverlineText>INC</OverlineText>
        <HeadingLevelTwoText>InnovateHub</HeadingLevelTwoText>
      </VerticalStack>
    </DashboardTitleContainer>
  );
};

export default DashboardTitle;
