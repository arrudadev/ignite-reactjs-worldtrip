import { Flex, Text } from '@chakra-ui/react';

type ContinentDetailProps = {
  count: string;
  description: string;
};

export function ContinentDetail({ count, description }: ContinentDetailProps) {
  return (
    <Flex flexDir="column" alignItems="center">
      <Text
        fontSize="48px"
        fontWeight="600"
        lineHeight="72px"
        color="yellow.500"
      >
        {count}
      </Text>

      <Text fontSize="24px" fontWeight="600" lineHeight="36px">
        {description}
      </Text>
    </Flex>
  );
}
