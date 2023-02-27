import { Box, Flex, Text } from "@chakra-ui/react";
import reactLogo from "./assets/react.svg";
import { Navbar } from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCountries } from "./redux/action";
import { CountryCard } from "./components/CountryCard";
import { Sorting } from "./components/Sorting";
import { Filter } from "./components/Filter";

function App() {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  const handleFilter = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <Box>
      <Navbar />
      <Box mt="60px">
        <Flex justifyContent="flex-end" alignItems="center" mb="20px" mr="30px">
          <Text fontSize="xl" mr="5px">
            Sort By:{" "}
          </Text>
          <Box>
            <Sorting />
          </Box>
        </Flex>
        <Flex justifyContent="center" gap="0 30px">
          <Box w="20%">
            <Text fontSize="3xl" textAlign="center">
              Filter
            </Text>
            <Filter filter={filter} handleFilter={handleFilter} />
          </Box>
          <Box w="75%" h="600px">
            <CountryCard filterArr={filter} />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default App;
