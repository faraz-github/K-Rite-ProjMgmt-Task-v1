import styled from "styled-components";

const HeadingLevelTwoTypography = styled.h2`
  font-size: var(--headingleveltwo-font-size);
  color: var(--headingleveltwo-font-color);
  font-weight: 700;
  margin: 0;
`;

const HeadingLevelTwoText = ({ children }) => {
  return <HeadingLevelTwoTypography>{children}</HeadingLevelTwoTypography>;
};

export default HeadingLevelTwoText;
