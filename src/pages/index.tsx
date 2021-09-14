import { Divider, Flex, Heading } from '@chakra-ui/react';

import { BannerHome } from '../components/Banner/Home';
import { Header } from '../components/Header';
import { TravelTypes } from '../components/TravelTypes';

export default function Home() {
  return (
    <>
      <Header />

      <BannerHome />

      <TravelTypes />

      <Flex mt="80px" mb="40px" alignItems="center" justifyContent="center">
        <Divider w="90px" borderColor="gray.900" />
      </Flex>
    </>
  );
}
