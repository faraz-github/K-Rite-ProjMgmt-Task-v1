import { Children } from "react";
import styled from "styled-components";
import HorizontalStack from "./HorizontalStack";

const IconAndTitleTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--heading-font-color);
`;

const IconAndTitleText = ({ children }) => {
  const [firstChild, secondChild, ...restChildren] = Children.toArray(children);

  return (
    <IconAndTitleTextContainer>
      {firstChild}
      {secondChild}
    </IconAndTitleTextContainer>
  );
};

export default IconAndTitleText;
