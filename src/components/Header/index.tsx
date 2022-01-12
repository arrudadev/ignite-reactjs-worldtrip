import { FiChevronLeft } from 'react-icons/fi';

import { useRouter } from 'next/router';

import { Flex, Image, Icon } from '@chakra-ui/react';

type HeaderProps = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: HeaderProps) {
  const router = useRouter();

  return (
    <Flex
      as="header"
      alignItems="center"
      justifyContent="center"
      w="100%"
      maxW="1600px"
      h="100"
      mx="auto"
      px={['3', '6']}
      position="relative"
    >
      {showBackButton && (
        <Icon
          as={FiChevronLeft}
          fontSize="32"
          position={['relative', 'absolute']}
          left={['0', '30px']}
          marginRight={['10px', '0px']}
          onClick={() => router.back()}
          cursor="pointer"
        />
      )}

      <Image src="/logo.png" />
    </Flex>
  );
}
