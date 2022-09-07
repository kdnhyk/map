export type tUnit = {
  ID: string;
  data: number;
  title: string;
  // imgSource: string[];
  //글 부분
};

export type tPlace = {
  id: number;
  title: string;
  type: string;
  item: tUnit[];
};
export type tPlaces = tPlace[];
