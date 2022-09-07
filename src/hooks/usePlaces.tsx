import axios from "axios";
import { useQuery } from "react-query";
import { database } from "../firebase";

export default function usePlaces() {
  const getPlaces = async () => {
    const { data } = await axios.get("../place.json");
    return data;
  };
  const places = useQuery("places", getPlaces);
  console.log(places);
  console.log(database);
  return null;
}
