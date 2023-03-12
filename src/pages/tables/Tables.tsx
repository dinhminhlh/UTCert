import React from "react";
import { View, Heading, ScrollView } from "@aws-amplify/ui-react";
import BasicTable from "./BasicTable";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { minHeight } from "@mui/system";

const Tables = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };



  return (
    <>
      <div>
        <h2>Issued</h2>
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
              <InputLabel id="demo-simple-select-label">Certificate Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Education Certificate</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Date Signed</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Sort newest to oldest</MenuItem>
                <MenuItem value={20}>Sort oldest to newest</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Contact Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Pending</MenuItem>
                <MenuItem value={20}>Connected</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Certificate Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Draft</MenuItem>
                <MenuItem value={20}>Signed</MenuItem>
                <MenuItem value={30}>Sent</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <br></br>
        <ScrollView width="100%">
          <h3>All Information</h3>
          <BasicTable />
        </ScrollView>
      </View>
    </>
  );
};

export default Tables;
