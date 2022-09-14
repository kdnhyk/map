import axios from "axios";
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
  const getSpots = async () => {
    const { data } = await axios.get("/spots.json");
    return data;
  };
  const spots = useQuery("spots", getSpots).data;
  console.log(spots);

  return spots;
}
