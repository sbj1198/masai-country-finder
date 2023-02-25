import { Flex, Box } from "@chakra-ui/react";
import { ThemeButton } from "./ThemeButton";

export const Navbar = () => {
  return (
    <Flex
      boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
      justifyContent="flex-end"
      pt="10px"
      pb="10px"
      pr="30px"
    >
      <ThemeButton />
    </Flex>
  );
};
