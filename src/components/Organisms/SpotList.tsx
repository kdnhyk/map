import { useState } from "react";
import styled from "styled-components";
import Spot from "./Spot";
import useSpots, { tSpot } from "../../hooks/useSpots";

const SpotListBlock = styled.div`
  height: 220px;
  width: 440px;
`;

export default function SpotList() {
  const spots = useSpots();

  return (
    <SpotListBlock>
      {spots.spots.map((spot: tSpot) => {
        return <Spot spot={spot} />;
      })}
    </SpotListBlock>
  );
}
