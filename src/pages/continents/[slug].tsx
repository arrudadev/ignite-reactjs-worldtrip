import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { Text } from '@chakra-ui/layout';

import { Continent } from '../../@types/index';
import { getContinentBySlug } from '../../lib/getContinentBySlug';

type ContinentProps = {
  continent: Continent;
};

export default function Continent({ continent }: ContinentProps) {
  return (
    <>
      <Head>
        <Text as="title">{continent.title} | Worldtrip</Text>
      </Head>
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
