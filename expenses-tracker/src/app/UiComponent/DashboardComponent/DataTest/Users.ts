import { Rank } from "../../LandingPageComponent/PaymentPlan";
export interface User {
  id: number;
  name: string;
  surname: string;
  age: number;
  Rank: Rank;
  avatar: string;
  Date: string;
  amount: number;
}
export const Users: User[] = [
  {
    id: 1,
    name: "benhatta",
    surname: "mokhttar",
    age: 21,
    Rank: Rank.Premium,
    avatar: "",
    Date: "21-01-2024",
    amount: 40,
  },
  {
    id: 4,
    name: "benhatta",
    surname: "younes",
    age: 18,
    Rank: Rank.Normal,
    avatar: "",
    Date: "21-01-2022",
    amount: 100,
  },
  {
    id: 3,
    name: "benhatta",
    surname: "younes",
    age: 18,
    Rank: Rank.Normal,
    avatar: "",
    Date: "11-02-2022",
    amount: 420,
  },
  {
    id: 5,
    name: "benhatta",
    surname: "younes",
    age: 18,
    Rank: Rank.Normal,
    avatar: "",
    Date: "21-05-2024",
    amount: 10,
  },
];
