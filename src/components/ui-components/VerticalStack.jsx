import styled from "styled-components";

const VerticalStackContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const VerticalStack = ({ children, gap }) => {
  return (
    <VerticalStackContainer style={{ gap: gap ? gap : "0" }}>
      {children}
    </VerticalStackContainer>
  );
};

export default VerticalStack;
