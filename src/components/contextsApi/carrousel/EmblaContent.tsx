import React, { useEffect, useState } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import useEmblaCarousel from 'embla-carousel-react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../api';
import { LoaderCircle } from 'lucide-react';

type Slide = {
  _id: string;
  imagem?: string;
  titulo?: string;
  text?: string;
  updatedAt?: React.ReactNode;
  link?: string;
};

type PropType = {
  options?: EmblaOptionsType;
  containerClassName?: string;
  viewportClassName?: string;
  slidesContainerClassName?: string;
  slideClassName?: string;
  controlsClassName?: string;
  dotsClassName?: string;
};

const EmblaCarouselContent: React.FC<PropType> = (props) => {
  const navigate = useNavigate();
  const [noticias, setNoticias] = useState<Slide[]>([]); // Corrigido o tipo de `noticias`
  const {
    options,
    containerClassName = '',
    viewportClassName = '',
    slidesContainerClassName = '',
    slideClassName = '',
    controlsClassName = '',
    dotsClassName = '',
  } = props;

  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  useEffect(() => {
    api
      .get(`/noticias?seccao=Notícia&perPage=9`)
      .then((response) => {
        setNoticias(response.data.noticias);
      })
      .catch((error) => {
        console.error('Erro ao buscar as notícias:', error);
      });
  }, []);

  return (
    <div className={`container ${containerClassName}`}>
      <section className="emblap">
        <div className={`embla__viewport ${viewportClassName}`} ref={emblaRef}>
          <div className={`embla__container h-full ${slidesContainerClassName}`}>
            {noticias.length > 0 ? (
              noticias.map((slide) => (
                <Link
                  to={slide.link || '#'}
                  key={slide._id}
                  className={`embla__slide1 ${slideClassName}`}
                >
                  <div className="embla__slide__content rounded-[2px] mb-4 hover:bg-slate-50">
                    <div className="overflow-hidden h-64">
                      <img
                        src={slide.imagem}
                        alt={slide.titulo || 'Slide image'}
                        className="w-full h-full object-cover transform transition duration-500 ease-in-out hover:scale-110"
                      />
                    </div>
                    <div className="p-4 pb-4">
                      {slide.titulo && (
                        <h3 className="text-lg font-medium mb-4">{slide.titulo.slice(0, 70) + '...'}</h3>
                      )}
                      <div className="flex gap-1">
                        {slide.updatedAt && <div className="mb-2 ">{slide.updatedAt.substring(0, 10).split('-').reverse().join('/')}</div>}
                        {slide.text && <p className="text-sm">{slide.text}</p>}
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="flex justify-center w-full items-center h-full my-16">
                <LoaderCircle className="animate-spin size-12 text-primary " />
              </div>
            )}
          </div>
        </div>
        <div className={`embla__controls ${controlsClassName}`}>
          <div className={`embla__dots ${dotsClassName}`}>
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={'embla__dot bg-slate-200'.concat(
                  index === selectedIndex ? ' embla__dot--selected' : ''
                )}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmblaCarouselContent;
