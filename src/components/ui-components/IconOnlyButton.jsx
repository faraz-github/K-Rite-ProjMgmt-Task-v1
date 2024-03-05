import styled from "styled-components";

const IconOnlyPressButton = styled.button`
  background-color: var(--white);
  border: none;
  padding: 8px;
  cursor: pointer;
  border-radius: var(--surface-radius);
  outline: none;
  box-shadow: var(--outline-shadow);
`;

const IconOnlyButton = ({ children, onClick }) => {
  return (
    <IconOnlyPressButton onClick={onClick}>{children}</IconOnlyPressButton>
  );
};

export default IconOnlyButton;
