import { atom } from "recoil";

export type tTag = {
  id: number;
  type: string;
  // 언젠가 확장
  details: string[];
};

const initialState: tTag[] = [
  {
    id: 0,
    type: "EAT",
    details: ["MEAT"],
  },
  {
    id: 1,
    type: "CAFE",
    details: [],
  },
  {
    id: 2,
    type: "SHOP",
    details: [],
  },
  {
    id: 3,
    type: "ROAD",
    details: [],
  },
];

export const tagsState = atom({
  key: "Tags",
  default: initialState,
});
