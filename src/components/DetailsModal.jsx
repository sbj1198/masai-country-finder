import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Flex,
  Text,
  Box,
} from "@chakra-ui/react";

export const DetailsModal = ({ details }) => {
  let lang = Object.keys(details?.languages || {});
  let n = Object.keys(details?.name?.nativeName || {});
  let curr = Object.keys(details?.currencies || {});

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} variant="outline" colorScheme="twitter">
        More details
      </Button>

      <Modal onClose={onClose} size="xl" isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>More Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb="20px">
            <Flex flexDirection="column">
              <Box mb="10px">
                <Flex wrap="nowrap">
                  <Text as="b">Native name:</Text>
                  {n?.map((item, i) => {
                    return (
                      <Text key={i}>
                        {details?.name?.nativeName[item].common}
                      </Text>
                    );
                  })}
                </Flex>
              </Box>
              <Box mb="10px">
                <Flex>
                  <Text as="b">Sub Region: </Text>
                  <Text> {details?.subregion}</Text>
                </Flex>
              </Box>
              <Box mb="10px">
                <Flex>
                  <Text as="b">Currency Name:</Text>
                  {curr.map((item, i) => {
                    return (
                      <Text key={i}>{details?.currencies[item].name}</Text>
                    );
                  })}
                </Flex>
              </Box>
              <Box mb="10px">
                <Flex>
                  <Text as="b">Language Names:</Text>
                  {lang.map((item) => {
                    return <Text key={item}>{details.languages[item]},</Text>;
                  })}
                </Flex>
              </Box>
              <Box mb="10px">
                <Flex>
                  <Text as="b">Border Countries:</Text>
                  {details?.borders?.map((item, i) => {
                    return <Text key={i}>{item},</Text>;
                  })}
                </Flex>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
