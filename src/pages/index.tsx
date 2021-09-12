import { Flex, Heading } from '@chakra-ui/react';

import { BannerHome } from '../components/Banner/Home';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <>
      <Header />

      <BannerHome />
    </>
  );
}
