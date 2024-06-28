import { OfferType } from "./Offers";

export interface User {
  id: number;
  name: string;
  surname: string;
  age: number;
  email: string;
  password: string;
  OfferType: OfferType;
  avatar?: string | null;
}
const Users: User[] = [
  {
    id: 1,
    name: "John",
    surname: "Doe",
    age: 30,
    email: "john.doe@example.com",
    password: "password123",
    OfferType: OfferType.Premium,
    avatar: "https://example.com/avatar1.jpg",
  },
  {
    id: 2,
    name: "Jane",
    surname: "Smith",
    age: 25,
    email: "jane.smith@example.com",
    password: "securepassword",
    OfferType: OfferType.Normal,
    avatar: "https://example.com/avatar2.jpg",
  },
  {
    id: 3,
    name: "Alice",
    surname: "Johnson",
    age: 28,
    email: "alice.johnson@example.com",
    password: "mypassword",
    OfferType: OfferType.Premium,
    avatar: null,
  },
  {
    id: 4,
    name: "Bob",
    surname: "Brown",
    age: 35,
    email: "bob.brown@example.com",
    password: "bobpassword",
    OfferType: OfferType.Normal,
    avatar: "https://example.com/avatar4.jpg",
  },
  {
    id: 5,
    name: "Charlie",
    surname: "Davis",
    age: 22,
    email: "charlie.davis@example.com",
    password: "charliepassword",
    OfferType: OfferType.Premium,
    avatar: null,
  },
];

export default Users;
