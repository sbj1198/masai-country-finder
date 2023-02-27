import * as types from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  errorMessage: "",
  countries: [],
  sort: "",
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_COUNTRY_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_COUNTRY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        countries: payload,
      };
    case types.GET_COUNTRY_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: payload,
        countries: [],
      };
    case types.GET_COUNTRY_SORTED:
      return {
        ...state,
        sort: payload,
      };
    default:
      return state;
  }
};

/* 
sort === "asc"
        ? countries
            .sort((a, b) => a.population - b.population)
            ?.filter((el) => filterArr.includes(el.region))
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
            ?.filter((el) => filterArr.includes(el.region))
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
          })
*/
