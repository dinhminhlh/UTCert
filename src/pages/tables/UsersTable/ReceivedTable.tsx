import React from "react";
import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
} from "@aws-amplify/ui-react";
import "./ReceivedTable.css";

export interface User {
  id: number;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  job_title?: string;
  image?: string;
}

export interface UsersTableProps {
  users?: User[];
}

const ReceivedTable = (props: UsersTableProps) => {
  const { users } = props;

  return (
    <>
      <Table caption="" highlightOnHover={false}>
        <TableHead>
          <TableRow>
            <TableCell as="th"></TableCell>
            <TableCell as="th">Certificate Code</TableCell>
            <TableCell as="th">Certificate Type</TableCell>
            <TableCell as="th">Organization Name</TableCell>
            <TableCell as="th">Certificate Name</TableCell>
            <TableCell as="th">Year Of Graduation</TableCell>
            <TableCell as="th">Classification</TableCell>
            <TableCell as="th">ModeOfStudy</TableCell>
            <TableCell as="th">ReceivedDate</TableCell>
            <TableCell as="th"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users?.map((item) => {
            return (
              <TableRow key={item.id}>
                <TableCell><input type="checkbox"/></TableCell>
                <TableCell>{item.first_name}</TableCell>
                <TableCell>{item.last_name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell>{item.job_title}</TableCell>
                <TableCell>{item.job_title}</TableCell>
                <TableCell>{item.job_title}</TableCell>
                <TableCell>{item.job_title}</TableCell>
                <TableCell>
                  <img
                    className="user-table-img"
                    src={item.image}
                    alt="profile"
                  ></img>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default ReceivedTable;
