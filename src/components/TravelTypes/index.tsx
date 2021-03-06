import { SimpleGrid } from '@chakra-ui/react';

import { TravelCard } from './TravelCard';

export function TravelTypes() {
  return (
    <SimpleGrid
      w="90%"
      maxW={1480}
      mt="130px"
      mx={['20px', 'auto']}
      spacing={8}
      minChildWidth="160px"
      justifyItems="center"
    >
      <TravelCard title="vida noturna" icon="cocktail" />

      <TravelCard title="praia" icon="surf" />

      <TravelCard title="moderno" icon="building" />

      <TravelCard title="clássico" icon="museum" />

      <TravelCard title="e mais..." icon="earth" />
    </SimpleGrid>
  );
}
