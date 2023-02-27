import { Box, Checkbox, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const Filter = ({ filter, handleFilter }) => {
  const handleCheck = (e) => {
    const { name, value } = e.target;
    const newFilter = [...filter];
    if (newFilter.includes(value)) {
      newFilter.splice(newFilter.indexOf(value));
    } else {
      newFilter.push(value);
    }
    handleFilter(newFilter);
  };

  return (
    <Box mt="20px">
      <Flex flexDirection="column" justifyContent="center">
        <Checkbox
          name="ch1"
          value="Europe"
          checked={filter.includes("Europe")}
          mb="10px"
          onChange={handleCheck}
        >
          Europe
        </Checkbox>
        <Checkbox
          name="ch2"
          value="Africa"
          checked={filter.includes("Africa")}
          mb="10px"
          onChange={handleCheck}
        >
          Africa
        </Checkbox>
        <Checkbox
          name="ch3"
          value="Americas"
          checked={filter.includes("Americas")}
          mb="10px"
          onChange={handleCheck}
        >
          Americas
        </Checkbox>
        <Checkbox
          name="ch4"
          value="Asia"
          checked={filter.includes("Asia")}
          mb="10px"
          onChange={handleCheck}
        >
          Asia
        </Checkbox>
        <Checkbox
          name="ch5"
          value="Oceania"
          checked={filter.includes("Oceania")}
          mb="10px"
          onChange={handleCheck}
        >
          Oceania
        </Checkbox>
      </Flex>
    </Box>
  );
};
