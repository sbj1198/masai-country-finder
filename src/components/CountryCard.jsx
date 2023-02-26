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

export const CountryCard = () => {
  const countries = useSelector((store) => store.countries);
  const sort = useSelector((store) => store.sort);
  // console.log(sort);
  return (
    <Grid
      templateColumns={{
        sm: "repeat(1, auto)",
        md: "repeat(2, auto)",
        lg: "repeat(4, auto)",
      }}
      gap="20px"
    >
      {sort === "asc"
        ? countries
            .sort((a, b) => a.population - b.population)
            ?.map((country) => {
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
            })
        : sort === "desc"
        ? countries
            .sort((a, b) => b.population - a.population)
            ?.map((country) => {
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
            })
        : countries?.map((country) => {
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
