import React from "react";
import { Users } from "./DataTest/Users";
import { User } from "./DataTest/Users";
import Image from "next/image";
import AvatarLogo from "/public/assets/avatar.svg";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/Table";
function UsersUi() {
  return (
    <div className="mt-5">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Users</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Users.map((Element: User, Index: number) => {
            return (
              <TableRow key={Element.id}>
                <TableCell className="  fonr-semibold flex items-center  gap-2  pr-10">
                  <Image src={AvatarLogo} width={28} alt="avatar-logo" />
                  {Element.surname + "" + Element.surname}
                </TableCell>
                <TableCell>{Element.Date}</TableCell>
                <TableCell>{Element.age}</TableCell>
                <TableCell className="text-right">{Element.amount}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
export default UsersUi;
