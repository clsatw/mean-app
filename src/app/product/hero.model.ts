//  TypeScript guidelines discourage the I prefix.
// A class can act as an interface (use implements instead of extends).
// export interface Hero {
export class Hero {
  _id: string;
  // id: number;
  // __v: number;
  imgUrl: string;
  price: string;
  type: string;
  name: string;
  starRating: number;
}