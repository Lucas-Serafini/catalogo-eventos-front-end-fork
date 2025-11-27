import type { SetStateAction } from "react";

export interface SideBarProps {
    isSideMenuOpen: boolean;
    setIsSideMenuOpen: ( value: SetStateAction<boolean>) => void
    setActiveTab: (value: SetStateAction<"eventos" | "turismo" | "cidades">) => void
}

export default function SideBar({ isSideMenuOpen, setIsSideMenuOpen, setActiveTab}: SideBarProps){
    return (
         <nav
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-[#232f3e] text-white transform transition-transform duration-300 ${
          isSideMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Menu lateral de navegação"
      >
        <button
          className="absolute top-3 right-4 text-2xl"
          onClick={() => setIsSideMenuOpen(false)}
          aria-label="Fechar menu"
        >
          &times;
        </button>

        <div className="pt-20">
          <a
            href="#"
            className="block px-6 py-3 border-b border-white/10 hover:bg-[#37475a]"
            onClick={(e) => {
              e.preventDefault();
              setActiveTab("eventos");
              setIsSideMenuOpen(false);
            }}
          >
            Início / Eventos
          </a>
          <a
            href="#"
            className="block px-6 py-3 border-b border-white/10 hover:bg-[#37475a]"
            onClick={(e) => {
              e.preventDefault();
              setActiveTab("eventos");
              setIsSideMenuOpen(false);
            }}
          >
            Eventos e Categorias
          </a>
          <a
            href="#"
            className="block px-6 py-3 border-b border-white/10 hover:bg-[#37475a]"
            onClick={(e) => {
              e.preventDefault();
              setActiveTab("turismo");
              setIsSideMenuOpen(false);
            }}
          >
            Turismo
          </a>
          <a
            href="#"
            className="block px-6 py-3 border-b border-white/10 hover:bg-[#37475a]"
            onClick={(e) => {
              e.preventDefault();
              setActiveTab("cidades");
              setIsSideMenuOpen(false);
            }}
          >
            Cidades da região
          </a>
        </div>
      </nav>
    )
}