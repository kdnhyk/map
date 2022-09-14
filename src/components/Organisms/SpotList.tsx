import { useState } from "react";
import styled from "styled-components";
import Spot from "./Spot";
import useSpots, { tSpot } from "../../hooks/useSpots";
import axios from "axios";
import { useQuery } from "react-query";

const SpotListBlock = styled.div`
  height: 220px;
  width: 440px;
`;

export default function SpotList() {
  const getSpots = async () => {
    const { data } = await axios.get("/spots.json");
    return data;
  };
  const { data, isLoading, isError, error } = useQuery("spots", getSpots);
  console.log(data);

  return (
    <SpotListBlock>
      {isLoading
        ? null
        : data.spots.map((spot: tSpot) => {
            return <Spot spot={spot} />;
          })}
    </SpotListBlock>
  );
}
