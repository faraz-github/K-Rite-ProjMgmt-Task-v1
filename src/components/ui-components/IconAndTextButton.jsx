import { Children } from "react";
import styled from "styled-components";
import HorizontalStack from "./HorizontalStack";

const IconAndTextPressButton = styled.button`
  background-color: var(--white);
  padding: 8px;
  cursor: pointer;
  border-radius: var(--surface-radius);
  border: none;
  outline: none;
`;

const IconAndTextButton = ({ children, onClick, outlined, padding }) => {
  const [firstChild, secondChild, ...restChildren] = Children.toArray(children);

  return (
    <IconAndTextPressButton
      style={{
        boxShadow: outlined ? "var(--outline-shadow)" : "none",
        padding: padding ? padding : "8px",
      }}
      onClick={onClick}
    >
      <HorizontalStack gap="10px" center>
        {firstChild}
        {secondChild}
      </HorizontalStack>
    </IconAndTextPressButton>
  );
};

export default IconAndTextButton;
