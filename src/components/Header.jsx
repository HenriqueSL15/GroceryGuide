import { useNavigate, useLocation } from "react-router-dom";
import logo from "../imgs/GS.png";

function Header({ scrollToSection }) {
  function handleScroll(section) {
    scrollToSection(section);
  }

  return (
    <div
      id="header"
      className="flex items-center justify-between font-title font-medium mb-10"
    >
      <img className="ml-11 mt-3 max-w-24" src={logo} alt="Logo" />
      <nav className="flex sm:flex-col md:flex-row mt-7 gap-6">
        <button onClick={() => handleScroll("supermarkets")} className="px-2">
          Supermercados
        </button>
        <button onClick={() => handleScroll("footer")} className="px-2">
          Contato
        </button>
      </nav>
      <button
        onClick={() => handleScroll("body")}
        className="mr-11 mt-10 py-2 max-h-14 px-5 text-white border-2 border-transparent bg-black transition-all hover:text-black hover:bg-white hover:border-black"
      >
        Pesquisar
      </button>
    </div>
  );
}

export default Header;
