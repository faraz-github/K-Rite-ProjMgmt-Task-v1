import { Children } from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--surface-border);
`;
const HeaderLeftChild = styled.div`
  flex-grow: 1;
`;
const HeaderRightChild = styled.div``;

const Header = ({ children, padding }) => {
  const [firstChild, secondChild, ...restChildren] = Children.toArray(children);

  return (
    <HeaderContainer style={{ padding: padding }}>
      <HeaderLeftChild>{firstChild}</HeaderLeftChild>
      <HeaderRightChild>{secondChild}</HeaderRightChild>
    </HeaderContainer>
  );
};

export default Header;
