import { continents } from './storage';

export function getContinentBySlug(slug: string) {
  return continents.find(continent => continent.slug === slug);
}
