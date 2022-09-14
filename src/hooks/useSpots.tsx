import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

export type tSpot = {
  id: number;
  title: string;
  type: string;
  writing: {
    ID: string;
    data: string;
    title: string;
    text: string;
    imgSource: string[];
  }[];
};

export default function useSpots() {
  const [spots, setSpots] = useState<tSpot[]>();
  const [loading, setLoading] = useState(true);

  // const getSpots = async () => {
  //   const { data } = await axios.get("/spots.json");
  //   return data;
  // };

  axios.get("/spots.json").then(function (response) {
    console.log(response.data.spots);
    return response.data.spots;
  });

  // const { data, isLoading, isError, error } = useQuery("spots", getSpots);
}
