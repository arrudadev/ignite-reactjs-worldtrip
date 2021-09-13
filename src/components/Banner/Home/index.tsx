import { Flex, Image, Heading, useMediaQuery, Text } from '@chakra-ui/react';

export function BannerHome() {
  const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)');

  return (
    <Flex
      w="100%"
      pb={['0px', '33px']}
      bgImage="/Background-home.png"
      bgSize="cover"
    >
      <Flex
        w="90%"
        maxW={1480}
        mx={['20px', 'auto']}
        my="80px"
        position="relative"
      >
        <Flex flexDir="column" w="100%">
          <Heading
            maxW="426px"
            fontWeight="500"
            fontSize={['20px', '32px']}
            color="gray.50"
          >
            5 Continentes, <br /> infinitas possibilidades.
          </Heading>

          <Text
            mt="30px"
            fontWeight="400"
            fontSize={['14px', '20px']}
            lineHeight="30px"
            color="gray.300"
            maxW="524px"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>

        {isLargerThan1200 && (
          <Image
            src="/Airplane.png"
            position="absolute"
            top="20px"
            right="0px"
          />
        )}
      </Flex>
    </Flex>
  );
}
