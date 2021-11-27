import { Divider, Flex, Heading } from '@chakra-ui/react';
import { SwiperSlide } from 'swiper/react';

import { BannerHome } from '../components/Banner/Home';
import { Carousel } from '../components/Carousel';
import { CarouselItem } from '../components/Carousel/CarouselItem';
import { Header } from '../components/Header';
import { TravelTypes } from '../components/TravelTypes';
import { continents } from '../lib/storage';

export default function Home() {
  return (
    <>
      <Header />

      <BannerHome />

      <TravelTypes />

      <Flex mt="80px" mb="40px" alignItems="center" justifyContent="center">
        <Divider w="90px" borderColor="gray.900" />
      </Flex>

      <Flex mb="40px" alignItems="center" justifyContent="center">
        <Heading
          as="h2"
          fontWeight="500"
          fontSize="32px"
          lineHeight="54px"
          color="gray.900"
          textAlign="center"
        >
          Vamos nessa? <br />
          Então escolha seu continente
        </Heading>
      </Flex>

      <Carousel>
        {continents.map(continent => (
          <SwiperSlide>
            <CarouselItem
              backgroundImage={continent.continent_image}
              title={continent.title}
              subtitle={continent.subtitle}
            />
          </SwiperSlide>
        ))}
      </Carousel>
    </>
  );
}
