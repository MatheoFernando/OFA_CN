import { Link } from "react-router-dom";
import logofooter from "../../assets/logoofa.svg";
import androidplay from "../../assets/img/Androidapp.png"
import appstore from "../../assets/img/AppStore.png"
function Copyright() {
    return (
        <p className="text-center text-gray-500 text-sm">
            {' © OFA - '}
            {new Date().getFullYear()}
            {' Todos os direitos reservados.'}
        </p>
    );
}

export default function Footer() {
    return (
        <footer id="contactos" className="relative bg-[#333] text-white py-10">
            <div className="container mx-auto flex flex-wrap  justify-between items-start">
                <div className="flex-1 mb-8">
                    <h1 className="block text-xl mb-2 font-medium">A OFA</h1>
                    <hr className="w-1/3 mb-4 border border-primary" />
                    <img src={logofooter} alt="logo" className="w-1/2 mb-4" />
                    <p className="text-sm mb-4">
                        A Ordem dos Farmacêuticos de Angola (OFA) é a associação pública profissional
                        que representa os Farmacêuticos que exercem a profissão farmacêutica no país.
                        <span className="text-gray-400  ml-2">
                            <Link to="/" className="text-gray-400 hover:text-primary-laranjacor">Saiba mais</Link>
                        </span>
                    </p>
                    <p className="text-sm mb-4">Download CNP App</p>
                    <div className="flex">
                        <Link to="https://apps.apple.com/ao/app/cnp-carteira-digital/id6480178712" target="_blank" rel="noreferrer" className="mr-2">
                            <img alt="App Store" src={androidplay} className="w-32" />
                        </Link>
                        <Link to="https://play.google.com/store/apps/details?id=com.cnpdigital.cnpao" target="_blank" rel="noreferrer" className="ml-2">
                            <img alt="Google Play" src={appstore} className="w-32" />
                        </Link>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="flex-1 mb-8">
                    <h1 className="block text-xl mb-2 font-medium">CONTACTOS</h1>
                    <hr className="w-1/3  mb-4 border border-primary" />
                    <p className="text-sm text-gray-400 mb-4">Em caso de dúvidas ou sugestões, contate-nos.</p>
                    <Link to="/endereco-e-telefones" className="text-white hover:text-primary-laranjacor">Endereço e Telefones</Link>
                </div>

                {/* Communication Section */}
                <div className="flex-1 mb-8">
                    <h1 className="block text-xl mb-2">COMUNICAÇÃO</h1>
                    <hr className="w-1/3  mb-4 border border-primary" />
                    <p className="text-sm text-gray-400 mb-4">Comunicados, discursos e eventos.</p>
                    <Link to="/agenda-da-ofa" className="text-white hover:text-primary-laranjacor">Agenda da OFA</Link>
                    <br />
                    <Link to="/discursos" className="text-white hover:text-primary-laranjacor">Discursos</Link>
                    <br />
                    <Link to="/eventos" className="text-white hover:text-primary-laranjacor">Eventos</Link>
                    <br />
                    <Link to="/galeria-de-imagens" className="text-white hover:text-primary-laranjacor">Galeria de Imagens</Link>
                </div>

                {/* Social Media Links */}
                <div className="flex-1 mb-8">
                    <h1 className="block font-medium text-xl mb-2">REDES SOCIAIS</h1>
                    <hr className="w-1/3  mb-4 border border-primary" />
                    <small className="text-white mb-2 block">Para facilitar o contato e disseminação das informações, a Ordem dos Farmacêuticos de Angola dispõe de algumas redes sociais, nomeadamente:</small>
                    <span className="text-gray-400 ">Siga nossas redes sociais e mantenha-se informado(a).</span>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="bg-[#e2eaf6] py-2 absolute bottom-0 w-full text-center">
                <Copyright />
            </div>
        </footer>
    );
}
