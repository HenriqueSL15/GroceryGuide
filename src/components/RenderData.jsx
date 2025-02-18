import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const RenderData = ({
  resetToStart,
  data,
  currentCategory,
  itemsPerPage = 32,
}) => {
  const [currentPage, setCurrentPage] = useState(0); // Estado para armazenar a página atual
  const [searchQuery, setSearchQuery] = useState(""); // Estado para armazenar a pesquisa
  const [lowestPrice, setLowestPrice] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function handleText(text) {
    let words = text.split("_");
    for (let i = 0; i < words.length; i++) {
      if (words[i].length <= 1) {
        continue;
      }
      console.log(words[i]);
      if (words[i] == "Alimentacao") {
        words[i] = "Alimentação";
        continue;
      }

      if (words[i] == "saudavel") {
        words[i] = "Saudável";
        continue;
      }

      const first = words[i].slice(0, 1).toUpperCase();
      const last = words[i].slice(1);
      words[i] = first + last;
    }

    return words.join(" ");
  }

  // Monitorar tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (resetToStart) {
      setCurrentPage(0);
    }
  }, [resetToStart]);

  // Verifica se existe data para ser utilizada
  if (!data || typeof data !== "object") {
    return (
      <div className="flex justify-center items-center">
        <h1>Não existem informações dessa categoria nesse supermercado</h1>
      </div>
    );
  }

  const parsePrice = (item) => {
    const newString = item.price;
    return Number(newString.replace("R$", "").replace(",", "."));
  };

  // console.log(resetToStart);

  // Função para formatar o nome da categoria
  const formatKey = (key) => {
    if (key !== "Preço indisponível") {
      return key.slice(0, 1).toUpperCase() + key.slice(1).replaceAll("_", " ");
    }

    return false;
  };

  // Filtra categorias e itens com base no nome
  const filterItems = (data) => {
    let itemsArray = []; // Inicializa o array que vai armazenar os itens filtrados
    let category = "gamer"; // Define a categoria (essa pode ser alterada conforme necessário)

    // Verificando se data é um array antes de continuar
    if (!Array.isArray(data)) {
      console.error("A estrutura de dados não é um array válido", data);
      return { category, items: [] }; // Retorna uma estrutura padrão
    }

    // Filtra diretamente os objetos no array `data` com base no searchQuery
    itemsArray = data
      .filter((values) => formatKey(values.price) !== false)
      .filter((values) =>
        values.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

    // Ordena os itens por preço, caso `lowestPrice` seja verdadeiro
    if (lowestPrice) {
      itemsArray = itemsArray.sort((a, b) => parsePrice(a) - parsePrice(b));
    }

    // Retorna a estrutura com a categoria e os itens filtrados
    return {
      category: category,
      items: itemsArray,
    };
  };

  const totalItems = Object.values(filterItems(data))[1].reduce(
    (acc, category) => acc + 1,
    0
  );

  // Calcular items por página dinamicamente
  // const itemsPerPageDynamic = windowWidth <= 640 ? 8 : 32;
  const itemsPerPageDynamic = () => {
    if (windowWidth <= 640) {
      return 8;
    } else if (windowWidth <= 1024) {
      return 16;
    } else {
      return 32;
    }
  };

  // Atualizar cálculo de páginas
  const totalPages = Math.ceil(totalItems / itemsPerPageDynamic());

  // Atualizar a função de paginação
  const paginatedCategories = () => {
    const startIndex = currentPage * itemsPerPageDynamic();
    const endIndex = startIndex + itemsPerPageDynamic();

    return {
      category: Object.values(filterItems(data))[0],
      items: Object.values(filterItems(data))[1].slice(startIndex, endIndex),
    };
  };

  const pagination = paginatedCategories();

  // Callback ao selecionar uma nova página no React Paginate
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Campo de busca */}
      <div className="flex justify-around items-center w-full ">
        <div className="flex justify-center items-center gap-3">
          <input
            type="checkbox"
            checked={lowestPrice}
            onClick={() => setLowestPrice(!lowestPrice)}
            className="w-5 h-5"
          />
          <label htmlFor="lowestPrice" className="text-lg">
            Menor preço
          </label>
        </div>
        <input
          type="text"
          placeholder="Digite o nome do produto"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mb-4 p-2 w-1/2 border border-gray-300 rounded"
        />
      </div>

      {/* Exibe produtos filtrados */}
      <div key={pagination.category} className="text-center">
        <h1 className="font-semibold text-xl border m-5">
          {handleText(currentCategory)}
        </h1>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4">
          {Object.values(pagination.items).map((info, index) => (
            <div
              className="flex flex-col mx-7 my-3 p-3 text-center shadow-xl justify-between font-funnel"
              key={`${pagination.category}-${index}`} // Garantindo uma chave única
            >
              <img
                className="mb-7"
                src={info.image}
                alt={info.title || "Product image"}
              />

              <h3 className="font-semibold mb-1">{info.title}</h3>
              <h3 className="font-normal">{info.price}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Paginação com React Paginate */}
      <div className="mt-4">
        <ReactPaginate
          previousLabel={"Anterior"}
          nextLabel={"Próxima"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageChange}
          containerClassName={"pagination flex gap-2 justify-center"}
          activeClassName={"bg-black text-white rounded px-3 py-1 "}
          pageClassName={
            "border rounded px-3 py-1 hover:bg-black hover:text-white transition-all"
          }
          previousClassName={
            currentPage === 0
              ? "text-gray-400 cursor-not-allowed"
              : "border rounded px-3 py-1 hover:bg-black hover:text-white transition-all"
          }
          nextClassName={
            currentPage === totalPages - 1
              ? "text-gray-400 cursor-not-allowed"
              : "border rounded px-3 py-1 hover:bg-black hover:text-white transition-all"
          }
          disabledClassName={"opacity-50 cursor-not-allowed"}
          forcePage={currentPage}
        />
      </div>
    </div>
  );
};

export default RenderData;
