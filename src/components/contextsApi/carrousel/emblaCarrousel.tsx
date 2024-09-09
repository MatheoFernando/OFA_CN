// src/components/EmblaCarousel.tsx
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import { api } from '../../api';

export type CarouselImage = {
  _id: number;
  imagem: string;
  titulo: string;
};

type EmblaCarouselProps = {
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<EmblaCarouselProps> = ({ options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  const [slides, setSlides] = useState<CarouselImage[]>([]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

  useEffect(() => {
    api.get('/carousels')
      .then((response) => {
        setSlides(response.data.carousels);
      })
      .catch((error) => {
        console.error('Erro ao buscar os dados:', error);
      });
  }, []);

  return (
    <section className="embla  relative w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((item) => (
            <div className="embla__slide" key={item._id}>
              <div className=" h-80 md:h-full relative">
                <img
                  src={item.imagem}
                  alt={item.titulo}
                  className="object-center md:object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <div className="embla__dots  flex space-x-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`embla__dot bg-slate-200 ${
                index === selectedIndex ? 'embla__dot--selected' : ''
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
