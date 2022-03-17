import ReactCountryFlag from 'react-country-flag';

import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { Box, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';

import { Continent as ContinentType } from '../../@types/index';
import { BannerDetail } from '../../components/Banner/Detail';
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
            <Flex flexDir="column" alignItems="center">
              <Text
                fontSize="48px"
                fontWeight="600"
                lineHeight="72px"
                color="yellow.500"
              >
                50
              </Text>

              <Text fontSize="24px" fontWeight="600" lineHeight="36px">
                países
              </Text>
            </Flex>

            <Flex flexDir="column" alignItems="center">
              <Text
                fontSize="48px"
                fontWeight="600"
                lineHeight="72px"
                color="yellow.500"
              >
                60
              </Text>

              <Text fontSize="24px" fontWeight="600" lineHeight="36px">
                línguas
              </Text>
            </Flex>

            <Flex flexDir="column" alignItems="center">
              <Text
                fontSize="48px"
                fontWeight="600"
                lineHeight="72px"
                color="yellow.500"
              >
                27
              </Text>

              <Text fontSize="24px" fontWeight="600" lineHeight="36px">
                cidades +100
              </Text>
            </Flex>
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
              {[1, 2, 3, 4, 5].map((_, index) => (
                <Box mx={['auto', '0']} bgColor="white" key={index}>
                  <Image
                    borderTopRadius="4"
                    src="/continents/europe.png"
                    alt="Europe"
                    w="100%"
                    h="173"
                    objectFit="cover"
                  />
                  <Flex
                    justify="space-between"
                    align="center"
                    p={6}
                    border="1px"
                    borderColor="#FFBA08"
                    borderTop="0"
                    borderBottomRadius="4"
                  >
                    <Flex direction="column">
                      <Heading as="h3" fontSize="xl" fontWeight="600" mb={3}>
                        Europe
                      </Heading>
                      <Text color="gray.500" fontSize="md" fontWeight="500">
                        Europe
                      </Text>
                    </Flex>

                    <ReactCountryFlag
                      style={{
                        fontSize: '2em',
                        lineHeight: '2em',
                        borderRadius: '50%',
                        objectFit: 'cover',
                      }}
                      aria-label="Europe"
                      countryCode="GB"
                      svg
                    />
                  </Flex>
                </Box>
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
