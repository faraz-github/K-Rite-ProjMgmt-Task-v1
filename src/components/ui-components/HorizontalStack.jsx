import styled from "styled-components";

const HorizontalStackContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const HorizontalStack = ({ children, gap }) => {
  return (
    <HorizontalStackContainer style={{ gap: gap ? gap : "0" }}>
      {children}
    </HorizontalStackContainer>
  );
};

export default HorizontalStack;
