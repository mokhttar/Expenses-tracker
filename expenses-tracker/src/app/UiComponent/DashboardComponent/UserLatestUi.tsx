import React from "react";
import { Rank } from "../LandingPageComponent/PaymentPlan";
import { Users } from "./DataTest/Users";
import { User } from "./DataTest/Users";

interface UserUiProps {
    Users:User[];
}

function UserLatestUi() {
  return <div>{Users.map((Element: UserUiProps, Index: number) => {})}</div>;
}

export default UserLatestUi;
