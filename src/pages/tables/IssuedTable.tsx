import React, {useState} from "react";
import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  Button,
} from "@aws-amplify/ui-react";

import { mockSongsData } from "../../data/mock";

import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faChevronDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const data = mockSongsData(10);

const IssuedTable = () => {
  const [credentialType, setCredentialType] = useState('');
  const [credentialStatus, setCredentialStatus] = useState('');
  const [contactStatus, setContactStatus] = useState('');
  const [dateSigned, setDateSigned] = useState('');
  const navigate = useNavigate();
  return (
    <>
      <Table caption="" highlightOnHover={false}>
        <TableHead>
          <TableRow>
          <TableCell as="th"></TableCell>
            <TableCell as="th">Certificate Code</TableCell>
            <TableCell as="th">Certificate Type</TableCell>
            <TableCell as="th">Received Name</TableCell>
            <TableCell as="th">Date Signed</TableCell>
            <TableCell as="th">Contact Status</TableCell>
            <TableCell as="th">Certificate Status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data?.map((item) => {
            return (
              <TableRow key={item._id}>
                <TableCell><input type="checkbox"/></TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>{item.genre}</TableCell>
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

export default IssuedTable;
