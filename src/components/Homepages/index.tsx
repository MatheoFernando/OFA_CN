import EmblaCarousel from "../contextsApi/carrousel/emblaCarrousel";
import EmblaCarouselContent from "../contextsApi/carrousel/EmblaContent";
import { Banner } from "./banner";
import { Links } from "./links";
import { Servicos } from "./servicos";
import "../../styles/embla.css";

const OPTIONS: EmblaOptionsType = { align: "end", loop: true };
export function HomePage() {
  return (
    <div>
      <EmblaCarousel options={OPTIONS} />
      <Servicos />
      <div className="container mx-auto my-8 flex items-center justify-center flex-col">
        <h1 className="font-bold text-2xl z-30 relative my-8">NOTÍCIAS</h1>
        <EmblaCarouselContent options={OPTIONS} />
      </div>

      <Banner />
      <Links />
    </div>
  );
}
