import styled from "styled-components";

const HeadingLevelOneTypography = styled.h1`
  font-size: var(--headinglevelone-font-size);
  color: var(--heading-font-color);
  font-weight: 700;
  margin: 0;
`;

const HeadingLevelOneText = ({ children }) => {
  return <HeadingLevelOneTypography>{children}</HeadingLevelOneTypography>;
};

export default HeadingLevelOneText;
