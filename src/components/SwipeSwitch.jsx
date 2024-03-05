import styled from "styled-components";

import { useSwipeable } from "react-swipeable";

const SwipeSwitchContainer = styled.div`
  display: "none";
  position: absolute;
  width: 20%;
  left: 0;
  top: 0;
  height: 100%;
  z-index: 1;

  @media screen and (max-width: 600px) {
    display: block;
  }
`;

const SwipeSwitch = ({ setBySwipe }) => {
  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      if (eventData.dir === "Left") {
        setBySwipe(false);
      } else if (eventData.dir === "Right") {
        setBySwipe(true);
      }
      // console.log("User Swiped!", eventData); // Debug-Log
    },
  });

  return <SwipeSwitchContainer {...handlers} />;
};

export default SwipeSwitch;
