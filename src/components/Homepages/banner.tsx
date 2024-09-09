import { Link } from "react-router-dom";

export function Banner() {
  return (
   <div className="flex gap-4 max-sm:flex-col items-center justify-between text-center bg-[#ECC93E] text-white p-8  font-sans">
      <p className="text-2xl text-primary font-medium">CASO QUEIRA CONTACTAR-NOS
AGENDAR VISITA</p>

      <div className="flex gap-2">
                                            <Link to={ ''} className="uppercase text-white py-4 px-5 rounded-2xl text-lg" style={{ background: 'linear-gradient(to right, #6f2871, #ffe134)' }}>
          Agendar VISITA
        </Link>
      </div>
    </div>
  )
}

 
