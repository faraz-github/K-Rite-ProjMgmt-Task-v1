import styled from "styled-components";

const HeadingLevelTwoTypography = styled.h2`
  font-size: var(--headingleveltwo-font-size);
  color: var(--heading-font-color);
  font-weight: 700;
  margin: 0;
`;

const HeadingLevelTwoText = ({ children, dimmed }) => {
  return (
    <HeadingLevelTwoTypography
      style={{ color: dimmed ? "var(--dimmed)" : "var(--heading-font-color)" }}
    >
      {children}
    </HeadingLevelTwoTypography>
  );
};

export default HeadingLevelTwoText;
