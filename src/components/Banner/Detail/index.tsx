import {
  Box,
  Center,
  Heading,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

type BannerDetailProps = {
  image: string;
  title: string;
};

export function BannerDetail({ image, title }: BannerDetailProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box
      w="100%"
      h={['150px', '500px']}
      bgImage={`/continents/${image}`}
      bgPosition="bottom"
      bgRepeat="no-repeat"
      bgSize="cover"
      position="relative"
    >
      <Box maxW="1600px" h="100%" mx="auto" px={10} position="relative">
        {isWideVersion ? (
          <Heading
            as="h1"
            fontWeight="600"
            fontSize="5xl"
            color="gray.50"
            position="absolute"
            bottom="60px"
            textTransform="capitalize"
          >
            {title}
          </Heading>
        ) : (
          <Center w="100%" h="100%">
            <Text as="h1" fontWeight="600" fontSize="1.75rem" color="gray.50">
              {title}
            </Text>
          </Center>
        )}
      </Box>
    </Box>
  );
}
