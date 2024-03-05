import styled from "styled-components";

const AvatarContainer = styled.div`
  border-radius: 100%;
  overflow: clip;
`;

const Avatar = ({ children, dimension }) => {
  return (
    <AvatarContainer style={{ width: dimension, height: dimension }}>
      {children}
    </AvatarContainer>
  );
};

export default Avatar;
