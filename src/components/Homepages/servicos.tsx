import { itemsServicos } from "@/constants";
import { Link } from "react-router-dom";

export function Servicos() {
  return (
 <div className=" flex flex-col   items-center justify-center my-12">
        <h1 className="font-bold text-2xl z-30 relative mb-8">SERVIÇOS</h1>
        <div className="flex flex-wrap justify-center items-center w-full">
          <div className="grid  sm:w-full md:w-2/3 container md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {itemsServicos.map((item) => (
              <Link
                to={item.url}
                key={item.title}
                className="border border-primary py-4 px-6 md:px-8 lg:px-12 ease-in duration-300 flex flex-col items-center justify-center rounded-lg hover:bg-[#ECC93E] hover:border-primary transition w-full"
              >
                <div className="flex justify-center mb-4">
                  <img src={item.icon} alt="" className="w-24"/> {/* Ajuste o tamanho do ícone conforme necessário */}
                </div>
                <h3 className="text-lg text-center text-primary ">{item.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>

  );
}
