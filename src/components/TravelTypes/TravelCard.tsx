import { Flex, Image, Heading } from '@chakra-ui/react';

type TravelCardProps = {
  title: string;
  icon: string;
};

export function TravelCard({ title, icon }: TravelCardProps) {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      w="160px"
    >
      <Image src={`/icons/${icon}.png`} w="85px" h="85px" />

      <Heading
        as="h3"
        fontSize="24px"
        fontWeight="600"
        lineHeight="32px"
        mt="24px"
      >
        {title}
      </Heading>
    </Flex>
  );
}
