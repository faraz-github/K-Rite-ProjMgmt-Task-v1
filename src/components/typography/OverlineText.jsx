import styled from "styled-components";

const OverlineTypography = styled.p`
  font-size: var(--overline-font-size);
  color: var(--overline-font-color);
  font-weight: 300;
  margin: 0;
`;

const OverlineText = ({ children }) => {
  return <OverlineTypography>{children}</OverlineTypography>;
};

export default OverlineText;
