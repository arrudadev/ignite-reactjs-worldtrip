import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { BannerHome } from '../components/Banner/Home';
import { Header } from '../components/Header';
import { TravelTypes } from '../components/TravelTypes';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination]);

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

      <Swiper
        navigation
        pagination={{ clickable: true }}
        style={{
          height: '450px',
          width: '100%',
          maxWidth: '1240px',
          marginBottom: '40px',
          // eslint-disable-next-line
          // @ts-ignore
          '--swiper-navigation-color': '#FFBA08',
          '--swiper-pagination-color': '#FFBA08',
        }}
      >
        <SwiperSlide>
          <Box
            bgImage="/continents/europe.png"
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
                Europa
              </Heading>

              <Text
                color="gray.300"
                fontWeight="700"
                fontSize={['14px', '24px']}
                lineHeight={['21px', '36px']}
              >
                O continente mais antigo.
              </Text>
            </Flex>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            bgImage="/continents/europe.png"
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
                Europa
              </Heading>

              <Text
                color="gray.300"
                fontWeight="700"
                fontSize={['14px', '24px']}
                lineHeight={['21px', '36px']}
              >
                O continente mais antigo.
              </Text>
            </Flex>
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
