import { Rank } from "../../LandingPageComponent/PaymentPlan";
export interface User {
  id: number;
  name: string;
  surname: string;
  age: number;
  Rank: Rank;
}
export const Users: User[] = [
  {
    id: 1,
    name: "benhatta",
    surname: "mokhttar",
    age: 21,
    Rank: Rank.Premium,
  },
  {
    id: 4,
    name: "benhatta",
    surname: "younes",
    age: 18,
    Rank: Rank.Normal,
  },
  {
    id: 3,
    name: "benhatta",
    surname: "younes",
    age: 18,
    Rank: Rank.Normal,
  },
  {
    id: 5,
    name: "benhatta",
    surname: "younes",
    age: 18,
    Rank: Rank.Normal,
  },
];
