
import link02 from "../assets/oms.png"
import link03 from "../assets/iconARMED.svg"
import link04 from "../assets/pnud.png"
import servicosInform from "../assets/icones/Informacoes.svg"
import servicosInscr from "../assets/icones/inscricaoOFA-02.svg"




export const itemsServicos = [
  { icon: servicosInform, title: 'Informações', url: 'requisitos-para-inscricao' },
  { icon: servicosInscr, title: 'Inscrição' , url: 'inscricao'},
  { icon: servicosInscr, title: 'Inscrição' , url: 'inscricao'},
 
];
interface ImageDataLinks {
  id: number;
  src: string;
  url:string
 
}
export const imageDataLinks: ImageDataLinks[]  = [
  { id: 1, src: link02 , url: "/"},
  { id: 2, src: link04, url: "/"},
  { id: 3, src: link03, url: "/"},

 
];

export const menuItemsDash = [
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/orders', label: 'Orders' },
  { path: '/products', label: 'Products' },
  { path: '/customers', label: 'Customers' },
  { path: '/settings', label: 'Settings' }
];
