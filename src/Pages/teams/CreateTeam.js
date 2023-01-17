import {
  Box,
  Button,
  ButtonGroup,
  Container,
  extendTheme,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  TableContainer,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

import AfterAuth from "../../HOC/AfterAuth";

import {
  MultiSelect,
  MultiSelectTheme,
  useMultiSelect,
} from "chakra-multiselect";
const CreateTeam = () => {
  const { value, options, onChange } = useMultiSelect({
    value: [],
    options: ["ab", "cd"],
  });
  return (
    <AfterAuth>
      <Box p={4}>
        <Box display={"flex"} justifyContent="space-between">
          <Heading>Create Team</Heading>
          <Button>Create Team</Button>
        </Box>
        <Box pl={10}>
          <FormControl py={5}>
            <FormLabel>Team Name</FormLabel>
            <Input type="text" width={"50%"} />
          </FormControl>
          <FormControl py={5}>
            <FormLabel>Team Password</FormLabel>
            <Input type="password" width={"50%"} />
          </FormControl>

          <Box width={"40%"}>
            <MultiSelect
              options={options}
              value={value}
              label="Select Team Member"
              onChange={onChange}
              create
            />
          </Box>
        </Box>
      </Box>
    </AfterAuth>
  );
};

export default CreateTeam;