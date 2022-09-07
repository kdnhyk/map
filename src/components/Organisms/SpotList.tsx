import { useState } from "react";
import styled from "styled-components";
import Spot from "./Spot";

const SpotListBlock = styled.div`
  height: 220px;
  width: 440px;
`;

export default function SpotList() {
  return (
    <SpotListBlock>
      <Spot />
    </SpotListBlock>
  );
}
