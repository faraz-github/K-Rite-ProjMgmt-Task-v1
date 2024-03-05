import styled from "styled-components";

const HeadingLevelThreeTypography = styled.h3`
  font-size: var(--headinglevelthree-font-size);
  color: var(--heading-font-color);
  font-weight: 700;
  margin: 0;
`;

const HeadingLevelThreeText = ({ children, dimmed }) => {
  return (
    <HeadingLevelThreeTypography
      style={{ color: dimmed ? "var(--dimmed)" : "var(--heading-font-color)" }}
    >
      {children}
    </HeadingLevelThreeTypography>
  );
};

export default HeadingLevelThreeText;
