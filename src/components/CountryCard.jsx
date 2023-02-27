import {
  Box,
  Grid,
  GridItem,
  Image,
  Text,
  Flex,
  Heading,
  Button,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { DetailsModal } from "./DetailsModal";

export const CountryCard = ({ filterArr }) => {
  const countries = useSelector((store) => store.countries);
  const sort = useSelector((store) => store.sort);

  const filtersort = () => {
    if (sort === "asc" && filterArr.length) {
      return countries
        ?.sort((a, b) => a.population - b.population)
        ?.filter((el) => filterArr.includes(el.region));
    }
    if (sort === "desc" && filterArr.length) {
      return countries
        ?.sort((a, b) => b.population - a.population)
        ?.filter((el) => filterArr.includes(el.region));
    }
    if (sort === "asc") {
      return countries?.sort((a, b) => a.population - b.population);
    }
    if (sort === "desc") {
      return countries?.sort((a, b) => b.population - a.population);
    }
    if (filterArr.length) {
      return countries?.filter((el) => filterArr.includes(el.region));
    }
    if (sort === "") {
      return countries;
    }
  };

  return (
    <Grid
      templateColumns={{
        sm: "repeat(1, auto)",
        md: "repeat(2, auto)",
        lg: "repeat(4, auto)",
      }}
      gap="20px"
    >
      {filtersort()?.map((country) => {
        return (
          <GridItem
            p="20px"
            key={country.name.common}
            boxShadow="rgba(0, 0, 0, 0.15) 0px 5px 15px 0px"
          >
            <Box>
              <Image objectFit="cover" src={country.flags.png} />
            </Box>
            <Box mt="20px">
              <Heading size="md">{country.name.common}</Heading>
            </Box>
            <Box>
              <Flex>
                <Text as="b">Population: </Text>
                <Text>{country.population}</Text>
              </Flex>
            </Box>
            <Box>
              <Flex>
                <Text as="b">Region: </Text>
                <Text>{country.region}</Text>
              </Flex>
            </Box>
            <Box>
              <Flex>
                <Text as="b">Capital: </Text>
                <Text>{country?.capital && country?.capital[0]}</Text>
              </Flex>
            </Box>
            <Box display="flex" justifyContent="center" mt="20px">
              <DetailsModal details={country} />
            </Box>
          </GridItem>
        );
      })}
    </Grid>
  );
};
