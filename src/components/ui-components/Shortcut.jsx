import styled from "styled-components";

const ShortcutContainer = styled.div`
  background-color: var(--shortcut-bg);
  border: 1px solid var(--surface-border);
  padding: 4px;
  font-size: 10px;
  border-radius: var(--surface-radius);
`;

const Shortcut = ({ keyOne, operatorKey, keyTwo }) => {
  return (
    <ShortcutContainer>
      {`${keyOne}${operatorKey ? ` ${operatorKey} ` : ` `}${keyTwo}`}
    </ShortcutContainer>
  );
};

export default Shortcut;
