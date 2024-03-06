import { useState } from "react";
import styled from "styled-components";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import HorizontalStack from "./HorizontalStack";

const DropdownButtonContainer = styled.button`
  border-radius: 8px;
  border: 1px solid var(--surface-border);
  padding: 6px 10px;
`;

const DropdownButton = ({ children }) => {
  const [pressed, setPressed] = useState(false);

  return (
    <DropdownButtonContainer onClick={() => setPressed(!pressed)}>
      <HorizontalStack gap="10px" center>
        {children}
        {pressed ? (
          <FaAngleUp color="var(--heading-font-color)" />
        ) : (
          <FaAngleDown color="var(--heading-font-color)" />
        )}
      </HorizontalStack>
    </DropdownButtonContainer>
  );
};

export default DropdownButton;
