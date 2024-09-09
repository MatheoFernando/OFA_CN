import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu,  ChevronDown, ChevronUp } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../src/assets/logoofa.svg";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuGroup } from "@/components/ui/dropdown-menu";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { NavegacionsBar } from '@/constants/navegationc';
import { useState } from "react";

export function NavBar() {
  const [openDropdown, setOpenDropdown] = useState(null);
    const navigate = useNavigate()
  return (
    <header className="shadow-lg  fixed w-full z-50" style={{ background: 'linear-gradient(to right, #6f2871, #ffe134)' }}>
      <div className="flex justify-between items-center h-[5rem] px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <Link to={"/"}>
              <img
            src={logo}
            alt="logo"
            className={`transition-all duration-300 cursor-pointer mt-10 ${logo ? 'w-24' : 'w-12'}`}
          /></Link>
          <nav className="hidden lg:flex space-x-6">
            {/* Navigation Links (centered) */}
            {NavegacionsBar.map((navItem, index) => (
              <DropdownMenu key={index}>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setOpenDropdown(openDropdown === index ? null : index)}>
                    <a href="#" className="text-white hover:text-secondary transition duration-150 ease-out hover:ease-in">
                      {navItem.page}
                    </a>
                    {openDropdown === index ? (
                      <ChevronUp className="text-white size-4" />
                    ) : (
                            <ChevronDown  className="text-white size-4" />
                      
                    )}
                    <div className="border-r-[1.5px] border-[#ffe134] ml-2 h-6"></div>
                  </div>
                </DropdownMenuTrigger>
                {openDropdown === index && (
                  <DropdownMenuContent className="shadow-lg overflow-hidden rounded-none mt-6 border-none text-white" style={{ background: 'linear-gradient(to right, #6f2871, #ffe134)' }}>
                    <DropdownMenuGroup className="py-4 px-2 grid grid-cols-2 gap-4">
                      {navItem.menuItens.map((item, subIndex) => (
                        <DropdownMenuItem key={subIndex}>
                          <Link to={item.link} className="flex items-center font-medium space-x-2 uppercase">
                            <span>{item.page}</span>
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                )}
              </DropdownMenu>
            ))}
          </nav>
        </div>

        <div className="hidden lg:flex  mr-6 md:items-center">
          <button onClick={() => navigate('/meu-perfil')} className="text-white   uppercase py-2 px-3 rounded-md font-medium" style={{ background: 'linear-gradient(to right,  #ffe134, #6f2871)' }}>área restrita</button>
        </div>

        {/* Hamburger Menu for small screens */}
        <div className="lg:hidden flex items-center justify-center">
          <Sheet>
            <SheetTrigger asChild>
              <Menu className="size-6 cursor-pointer text-white" />
            </SheetTrigger>
            <SheetContent side="top" className="border-none" style={{ background: 'linear-gradient(to right, #6f2871, #ffe134)' }}>
              <Accordion type="single" collapsible >
                {NavegacionsBar.map((navItem, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b-0">
                    <AccordionTrigger className="text-white border-none hover:no-underline justify-start gap-1" >
                      {navItem.page}
                    </AccordionTrigger>
                    <AccordionContent className="justify-start">
                      {navItem.menuItens.map((item, subIndex) => (
                        <Link to={item.link} key={subIndex} className="block text-white hover:text-secondary py-1">
                          {item.page}
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="bg-secondary mt-2 rounded-md w-24 text-center py-2">
                <Link to="/login" className="text-white p-2 hover:text-primary border-primary uppercase ">área restrita</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
