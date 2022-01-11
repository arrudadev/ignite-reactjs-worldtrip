import { Box, Heading } from '@chakra-ui/react';

type BannerDetailProps = {
  image: string;
  title: string;
};

export function BannerDetail({ image, title }: BannerDetailProps) {
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
      <Heading
        as="h3"
        color="gray.50"
        fontSize="48px"
        fontWeight="700"
        position="absolute"
        bottom="80px"
        left="200px"
      >
        {title}
      </Heading>
    </Box>
  );
}
