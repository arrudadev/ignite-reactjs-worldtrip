import { Flex, Image, Heading, Text } from '@chakra-ui/react';

export function BannerHome() {
  return (
    <Flex
      w="100%"
      maxW={1480}
      pb={['0px', '33px']}
      bgImage="/Background-home.png"
      bgSize="cover"
    >
      <Flex w="100%" maxW={1480} m={['20px', '80px']} position="relative">
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

        <Image
          src="/Airplane.png"
          display={['none', 'none', 'none', 'block']}
          position="absolute"
          top="20px"
          right="0px"
        />
      </Flex>
    </Flex>
  );
}
