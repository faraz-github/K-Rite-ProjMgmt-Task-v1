import { Children } from "react";
import styled from "styled-components";

const TeamsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--surface-border);
  color: var(--heading-font-color);
`;

const TeamsLeftChild = styled.div`
  flex-grow: 1;
`;
const TeamsRightChild = styled.div``;

const Teams = ({ children, padding, dimmed }) => {
  const [firstChild, secondChild, ...restChildren] = Children.toArray(children);
  return (
    <TeamsContainer
      style={{
        padding: padding,
        color: dimmed ? "var(--dimmed)" : "var(--heading-font-color)",
      }}
    >
      <TeamsLeftChild>{firstChild}</TeamsLeftChild>
      <TeamsRightChild>{secondChild}</TeamsRightChild>
    </TeamsContainer>
  );
};

export default Teams;
