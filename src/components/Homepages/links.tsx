import { imageDataLinks } from "@/constants";
import { Link } from "react-router-dom";

export function Links() {
  return (
    <div className="bg-cover bg-center bg-mapsLinks py-16 ">
    
        <h1 className="flex items-center justify-center  font-bold text-2xl z-30 relative mb-12 ">
          LINKS
        </h1>
     
      <div className="container grid grid-cols-2 sm:grid-cols-3  gap-2 justify-items-center ">
        {imageDataLinks.map((image) => (
          <Link
            key={image.id}
            to={image.url}
            className="group"
            target="_blank"
          >
            <img
              src={image.src}
              alt={`Image ${image.id}`}
              className="h-full w-28 md:w-32 object-cover rounded-lg transition-transform duration-300 ease-in-out transform group-hover:scale-125"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
