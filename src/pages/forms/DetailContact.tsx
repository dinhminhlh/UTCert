import React, { useState } from "react";
// import Home from "../forms/index"
import {
  Button,
  Flex,
  Text,
  TextField,
  Radio,
  RadioGroupField,
  TextAreaField,
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
} from "@aws-amplify/ui-react";

import { useNavigate } from "react-router-dom";
import { mockSongsData } from "../../data/mock";

const data = mockSongsData(10);
const DetailContact = () => {

  const navigate = useNavigate();

  return (
    <>
      <Table caption="" highlightOnHover={false}>
        <TableHead>
          <TableRow>
            <TableCell as="th"></TableCell>
            <TableCell as="th">Contact Code</TableCell>
            <TableCell as="th">Contact Name</TableCell>
            <TableCell as="th">Create Date</TableCell>
            <TableCell as="th">Contact Status</TableCell>
            <TableCell as="th"></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data?.map((item) => {
            return (
              <TableRow key={item._id}>
                <TableCell><input type="checkbox" /></TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>{item.genre}</TableCell>
                <TableCell>{item.genre}</TableCell>
                <TableCell>
                  <Button onClick={() => navigate("/edit-form")}>Edit</Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default DetailContact;
