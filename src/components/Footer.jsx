import { useNavigate, useLocation } from "react-router-dom";
import logo from "../imgs/GS.png";

function Footer({ scrollToSection }) {
  function handleScroll(section) {
    scrollToSection(section);
  }

  return (
    <div id="footer" className="flex flex-col gap-6 mt-20 font-medium sm:px-5">
      <div className="flex justify-between pb-10 border-b-2 border-black/20">
        <img className="sm:ml-5 md:ml-11 mt-3 max-w-24" src={logo} alt="Logo" />
        <nav className="flex flex-row mt-7 gap-6">
          <button onClick={() => handleScroll("supermarkets")} className="px-2">
            Supermercados
          </button>
        </nav>
        <button
          onClick={() => handleScroll("body")}
          className="sm:mr-5 md:mr-11 mt-10 max-h-14 px-5 text-white border-2 border-transparent bg-black transition-all hover:text-black  hover:bg-white hover:border-black"
        >
          Pesquisar
        </button>
      </div>
      <div className="flex gap-6 mb-16 justify-center font-normal">
        <h2>© 2024 Grocery Guide. All rights reserved.</h2>
        <h2>Política de Privacidade</h2>
        <h2>Termos de Serviço</h2>
        <h2>Configurações de Cookies</h2>
      </div>
    </div>
  );
}

export default Footer;
