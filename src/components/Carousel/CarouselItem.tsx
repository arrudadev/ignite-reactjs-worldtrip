import { Box, Flex, Heading, Text } from '@chakra-ui/react';

type CarouselItemProps = {
  backgroundImage: string;
  title: string;
  subtitle: string;
};

export function CarouselItem({
  backgroundImage,
  title,
  subtitle,
}: CarouselItemProps) {
  return (
    <Box
      bgImage={`/continents/${backgroundImage}`}
      bgSize="cover"
      height="100%"
      width="100%"
    >
      <Flex
        position="absolute"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        height="100%"
        width="100%"
      >
        <Heading
          as="h3"
          color="gray.50"
          fontWeight="700"
          fontSize={['24px', '48px']}
          lineHeight={['36px', '72px']}
        >
          {title}
        </Heading>

        <Text
          color="gray.300"
          fontWeight="700"
          fontSize={['14px', '24px']}
          lineHeight={['21px', '36px']}
        >
          {subtitle}
        </Text>
      </Flex>
    </Box>
  );
}
