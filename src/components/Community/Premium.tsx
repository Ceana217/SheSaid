import React from "react";
import { Flex, Icon, Text, Stack, Button } from "@chakra-ui/react";
import { GiCheckedShield } from "react-icons/gi";

const Premium: React.FC = () => {
  return (
    <Flex
      direction="column"
      bg="white"
      borderRadius={4}
      cursor="pointer"
      p="12px"
      border="1px solid"
      borderColor="gray.300"
    >
      <Flex mb={2}>
       
        <Stack spacing={1} fontSize="9pt" pl={2}>
          <Text fontWeight={600}>Subscribe to SheSaidIt</Text>
          <Text>Want to be a member?</Text>
        </Stack>
      </Flex>
      <Button height="30px" bg="brand.100">
        Subscribe
      </Button>
    </Flex>
  );
};
export default Premium;