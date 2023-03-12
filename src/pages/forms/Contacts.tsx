import React from "react";
import { View, Heading, ScrollView } from "@aws-amplify/ui-react";
import DetailContact from "./DetailContact";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Contacts = () => {
  const [name, setName] = React.useState('');

  const handleChangeName = (event: SelectChangeEvent) => {
    setName(event.target.value as string);
  };

  const [dateSigned, setDateSigned] = React.useState('');

  const handleChangeDateSigned = (event: SelectChangeEvent) => {
    setDateSigned(event.target.value as string);
  };

  const [certStatus, setCerStatus] = React.useState('');

  const handleChangeCertStatus = (event: SelectChangeEvent) => {
    setCerStatus(event.target.value as string);
  };

  const [contactStatus, setContactStatus] = React.useState('');

  const handleChangeContactStatus = (event: SelectChangeEvent) => {
    setContactStatus(event.target.value as string);
  };

  return (
    <>
      <div>
        <h2>Contacts</h2>
      </div>

      <View
        backgroundColor="var(--amplify-colors-white)"
        borderRadius="6px"
        maxWidth="100%"
        padding="1rem"
        minHeight="80vh"
      >
        <Heading color="#333"> Search </Heading>
        <br></br>
        <div style={{ display: "flex" }}>
          <TextField
            label="Name"
            id="outlined-size-small"
          />
          <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Contact Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={contactStatus}
                label="Contact Status"
                onChange={handleChangeName}
              >
                <MenuItem value={10}>Pending</MenuItem>
                <MenuItem value={20}>Connected</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <br></br>
        <ScrollView width="100%">
          <h3>All Information</h3>
          <DetailContact />
        </ScrollView>
      </View>
    </>
  );
};

export default Contacts;
