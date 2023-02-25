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
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} variant="outline" colorScheme="twitter">
        More details
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>More Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex flexDirection="column">
              <Box>
                <Flex>
                  <Text as="b">Native name:</Text>
                  <Text>
                    {details?.name?.nativeName?.eng?.official &&
                      details?.name?.nativeName?.eng?.official}
                  </Text>
                </Flex>
              </Box>
              <Box>
                <Text as="b">Sub Region:</Text>
                <Text></Text>
              </Box>
              <Box>
                <Text as="b">Currency Name:</Text>
                <Text></Text>
              </Box>
              <Box>
                <Text as="b">Language Names:</Text>
                <Text></Text>
              </Box>
              <Box>
                <Text as="b">Border Countries:</Text>
                <Text></Text>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
