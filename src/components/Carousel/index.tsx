import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination]);

type CarouselProps = {
  children: React.ReactNode;
};

export function Carousel({ children }: CarouselProps) {
  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      style={{
        height: '600px',
        width: '100%',
        maxWidth: '1240px',
        marginBottom: '40px',
        // eslint-disable-next-line
          // @ts-ignore
        '--swiper-navigation-color': '#FFBA08',
        '--swiper-pagination-color': '#FFBA08',
      }}
    >
      {children}
    </Swiper>
  );
}
