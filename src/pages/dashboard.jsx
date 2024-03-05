import { useState } from "react";
import styled from "styled-components";

import SidePanel from "@/components/SidePanel";
import ViewPanel from "@/components/ViewPanel";
import SwipeSwitch from "@/components/SwipeSwitch";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const dashboard = () => {
  // Dashboard UI states
  const [openSidePanel, setOpenSidePanel] = useState(true);

  return (
    <Container>
      <SwipeSwitch setBySwipe={setOpenSidePanel} />
      <SidePanel isOpen={openSidePanel} />
      <ViewPanel />
    </Container>
  );
};

export default dashboard;
