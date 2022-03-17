import ReactCountryFlag from 'react-country-flag';

import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

type CityCardProps = {
  image: string;
  name: string;
  description: string;
  countryCode: string;
};

export function CityCard({
  image,
  name,
  description,
  countryCode,
}: CityCardProps) {
  return (
    <Box mx={['auto', '0']} bgColor="white">
      <Image
        borderTopRadius="4"
        src={`/continents/${image}`}
        alt={name}
        w="100%"
        h="173"
        objectFit="cover"
      />
      <Flex
        justify="space-between"
        align="center"
        p={6}
        border="1px"
        borderColor="#FFBA08"
        borderTop="0"
        borderBottomRadius="4"
      >
        <Flex direction="column">
          <Heading as="h3" fontSize="xl" fontWeight="600" mb={3}>
            {name}
          </Heading>

          <Text color="gray.500" fontSize="md" fontWeight="500">
            {description}
          </Text>
        </Flex>

        <ReactCountryFlag
          style={{
            fontSize: '2em',
            lineHeight: '2em',
            borderRadius: '50%',
            objectFit: 'cover',
          }}
          aria-label={name}
          countryCode={countryCode}
          svg
        />
      </Flex>
    </Box>
  );
}
