import styled from "styled-components";

const CountContainer = styled.div`
  background-color: var(--shortcut-bg);
  border: 1px solid var(--surface-border);
  padding: 4px 8px;
  font-size: 10px;
  border-radius: var(--surface-radius);
`;

const Count = ({ count }) => {
  return <CountContainer>{count}</CountContainer>;
};

export default Count;
