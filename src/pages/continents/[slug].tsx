import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';

import { Continent as ContinentType } from '../../@types/index';
import { BannerDetail } from '../../components/Banner/Detail';
import { CityCard } from '../../components/CityCard';
import { ContinentDetail } from '../../components/ContinentDetail';
import { Header } from '../../components/Header';
import { getContinentBySlug } from '../../lib/getContinentBySlug';

type ContinentProps = {
  continent: ContinentType;
};

export default function Continent({ continent }: ContinentProps) {
  return (
    <>
      <Head>
        <Text as="title">{continent.title} | Worldtrip</Text>
      </Head>

      <Header showBackButton />

      <BannerDetail
        image={continent.continent_banner}
        title={continent.title}
      />

      <Box maxW="1600px" h="100%" mt="80px" mx="auto" px={['4', '10']}>
        <Flex
          flexDir={['column', 'column', 'column', 'row']}
          alignItems="center"
          justifyContent="space-between"
        >
          <Text maxW="900px">{continent.about}</Text>

          <Flex
            flexDir={['column', 'row']}
            justifyContent="space-around"
            w="100%"
          >
            <ContinentDetail count="50" description="países" />

            <ContinentDetail count="60" description="línguas" />

            <ContinentDetail count="27" description="cidades +100" />
          </Flex>
        </Flex>

        <Flex flexDir="column" mt="80px">
          <Heading as="h4" fontSize="36px" fontWeight="500" lineHeight="54px">
            Cidades +100
          </Heading>

          <Box mt="40px">
            <SimpleGrid
              minChildWidth="256px"
              spacing={[5, 10]}
              my={['5', '45px']}
            >
              {continent.cities_100_plus.map((city, index) => (
                <CityCard
                  key={index}
                  image={city.city_image}
                  name={city.city_name}
                  countryName={city.country_name}
                  countryCode={city.country_code}
                />
              ))}
            </SimpleGrid>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params;

  const continent = getContinentBySlug(slug as string);

  return {
    props: {
      continent,
    },
  };
};
