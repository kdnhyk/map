import { atom } from "recoil";

export type tItem = {
  id: number;
  title: string;
  type: string;
  imgsrc: tImgsrc[];
  heartNunber: number;
  review: {};
};

export type tImgsrc = {
  id: number;
  src: string;
};

const initialState: tItem[] = [
  {
    id: 0,
    title: "무슨무슨 카페",
    type: "카페",
    imgsrc: [
      {
        id: 0,
        src: "https://images.unsplash.com/photo-1656067335605-f77c04152854?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 1,
        src: "https://images.unsplash.com/photo-1656177251479-86249dab2a2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
    ],
    heartNunber: 233,
    review: {},
  },
  {
    id: 0,
    title: "Apple 카페",
    type: "카페",
    imgsrc: [
      {
        id: 0,
        src: "https://images.unsplash.com/photo-1656067335605-f77c04152854?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 1,
        src: "https://images.unsplash.com/photo-1656177251479-86249dab2a2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
    ],
    heartNunber: 877,
    review: {},
  },
  {
    id: 0,
    title: "Apple 카페",
    type: "카페",
    imgsrc: [
      {
        id: 0,
        src: "https://images.unsplash.com/photo-1656067335605-f77c04152854?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 1,
        src: "https://images.unsplash.com/photo-1656177251479-86249dab2a2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
    ],
    heartNunber: 877,
    review: {},
  },
  {
    id: 0,
    title: "Apple 카페",
    type: "카페",
    imgsrc: [
      {
        id: 0,
        src: "https://images.unsplash.com/photo-1656067335605-f77c04152854?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 1,
        src: "https://images.unsplash.com/photo-1656177251479-86249dab2a2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
    ],
    heartNunber: 877,
    review: {},
  },
  {
    id: 0,
    title: "Apple 카페",
    type: "카페",
    imgsrc: [
      {
        id: 0,
        src: "https://images.unsplash.com/photo-1656067335605-f77c04152854?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 1,
        src: "https://images.unsplash.com/photo-1656177251479-86249dab2a2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
    ],
    heartNunber: 877,
    review: {},
  },
  {
    id: 0,
    title: "Apple 카페",
    type: "카페",
    imgsrc: [
      {
        id: 0,
        src: "https://images.unsplash.com/photo-1656067335605-f77c04152854?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 1,
        src: "https://images.unsplash.com/photo-1656177251479-86249dab2a2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
    ],
    heartNunber: 877,
    review: {},
  },
];

export const ItemsState = atom({
  key: "Items",
  default: initialState,
});
