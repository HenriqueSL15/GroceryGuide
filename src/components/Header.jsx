// import { useNavigate, useLocation } from "react-router-dom";
function Header({ scrollToSection }) {
  // const location = useLocation();
  // const navigate = useNavigate();

  // function handleScroll(section) {
  //   if (location.pathname !== "/") {
  //     navigate("/");
  //   }
  //   scrollToSection(section);
  // }

  return (
    <div className="flex justify-between font-title font-medium mb-40">
      <img className="ml-11 mt-3" alt="Logo" />
      {/* <nav className="flex flex-row mt-7 gap-6">
        <button className="px-2">Home</button>
        <button className="px-2">Depoimentos</button>
        <button className="px-2">Vantagens</button>
        <button className="px-2">Contato</button>
        <button className="px-2">FAQ</button>
      </nav> */}
      <button className="mr-11 mt-10 px-5 py-2 text-white border-2 border-transparent bg-black transition-all hover:text-black hover:bg-white hover:border-black">
        Pesquisar
      </button>
    </div>
  );
}

export default Header;
