import { Box, Checkbox, CheckboxGroup, Flex } from "@chakra-ui/react";

export const Filter = () => {
  return (
    <Box mt="20px">
      <Flex flexDirection="column" justifyContent="center">
        <Checkbox mb="10px">Europe</Checkbox>
        <Checkbox mb="10px">Africa</Checkbox>
        <Checkbox mb="10px">Americas</Checkbox>
        <Checkbox mb="10px">Asia</Checkbox>
        <Checkbox mb="10px">Oceania</Checkbox>
      </Flex>
    </Box>
  );
};
