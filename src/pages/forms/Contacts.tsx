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
                onChange={handleChangeContactStatus}
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
