import styled from "styled-components";

const HorizontalStackContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const HorizontalStack = ({ children, gap, center }) => {
  return (
    <HorizontalStackContainer
      style={{
        gap: gap ? gap : "0",
        alignItems: center ? "center" : "flex-start",
      }}
    >
      {children}
    </HorizontalStackContainer>
  );
};

export default HorizontalStack;
