import styled from "styled-components";

const IconOnlyPressButton = styled.button`
  background-color: var(--white);
  padding: 8px;
  cursor: pointer;
  border-radius: var(--surface-radius);
  border: none;
  outline: none;
`;

const IconOnlyButton = ({ children, onClick, outlined }) => {
  return (
    <IconOnlyPressButton
      style={{ boxShadow: outlined ? "var(--outline-shadow)" : "none" }}
      onClick={onClick}
    >
      {children}
    </IconOnlyPressButton>
  );
};

export default IconOnlyButton;
