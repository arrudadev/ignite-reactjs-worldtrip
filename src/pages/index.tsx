import { Divider, Flex, Heading } from '@chakra-ui/react';
import { SwiperSlide } from 'swiper/react';

import { BannerHome } from '../components/Banner/Home';
import { Carousel } from '../components/Carousel';
import { CarouselItem } from '../components/Carousel/CarouselItem';
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
        <SwiperSlide>
          <CarouselItem
            backgroundImage="europe.png"
            title="Europa"
            subtitle="O continente mais antigo."
          />
        </SwiperSlide>

        <SwiperSlide>
          <CarouselItem
            backgroundImage="north_america.jpg"
            title="America do Norte"
            subtitle="A América do Norte corresponde à parte norte do continente americano."
          />
        </SwiperSlide>

        <SwiperSlide>
          <CarouselItem
            backgroundImage="south_america.jpg"
            title="America do Sul"
            subtitle="A América do Sul corresponde à parte sul do continente americano."
          />
        </SwiperSlide>

        <SwiperSlide>
          <CarouselItem
            backgroundImage="asia.jpg"
            title="Ásia"
            subtitle="A Ásia é considerado o continente mais extenso territorialmente e o mais populoso também."
          />
        </SwiperSlide>

        <SwiperSlide>
          <CarouselItem
            backgroundImage="africa.jpg"
            title="África"
            subtitle="Considerada o berço da humanidade."
          />
        </SwiperSlide>

        <SwiperSlide>
          <CarouselItem
            backgroundImage="oceania.jpg"
            title="Oceânia"
            subtitle="A Oceania é um continente situado entre os oceanos Índico e Pacífico, a sudeste da Ásia."
          />
        </SwiperSlide>
      </Carousel>
    </>
  );
}
