import { useState } from "react";

const RenderData = ({ data, itemsPerPage = 1 }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState(""); // Estado para armazenar a pesquisa

  if (!data || typeof data !== "object") {
    return <div>No data available</div>;
  }

  // Função para formatar o nome da categoria
  const formatKey = (key) =>
    key.slice(0, 1).toUpperCase() + key.slice(1).replaceAll("_", " ");

  // Filtra categorias e itens com base no nome
  const filterItems = (data) => {
    // Filtra as categorias e dentro de cada categoria filtra os itens com base no nome
    return Object.keys(data)
      .map((categoryKey) => {
        const filteredItems = Object.keys(data[categoryKey]).filter((itemKey) =>
          data[categoryKey][itemKey].title
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        );

        return {
          category: categoryKey,
          items: filteredItems.map((itemKey) => data[categoryKey][itemKey]),
        };
      })
      .filter((category) => category.items.length > 0); // Remove categorias que não tem itens filtrados
  };

  const totalPages = Math.ceil(filterItems(data).length / itemsPerPage);

  // Divide os dados por páginas
  const paginatedCategories = filterItems(data).slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Campo de busca */}
      <input
        type="text"
        placeholder="Digite o nome do produto"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // Atualiza o valor da pesquisa
        className="mb-4 p-2 w-1/2 border border-gray-300 rounded"
      />

      {/* Exibe produtos filtrados */}
      {paginatedCategories.map((category) => (
        <div key={category.category} className="text-center">
          <div className="w-full border border-black"></div>
          <h1 className="font-semibold text-xl border m-5">
            {formatKey(category.category)}
          </h1>
          <div className="grid grid-cols-4 gap-4">
            {category.items.map((item, index) => (
              <div
                className="flex flex-col mx-7 my-3 p-3 text-center shadow-xl"
                key={`${category.category}-${index}`}
              >
                <img
                  className="mb-7"
                  src={item.image}
                  alt={item.title || "Product image"}
                />
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <h3 className="font-normal">{item.price}</h3>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Navegação de páginas */}
      <div className="flex justify-center items-center mt-4 gap-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 0}
          className={`px-4 py-2 rounded border border-white hover:bg-white hover:text-black hover:border-black transition-all  ${
            currentPage === 0
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-black text-white"
          }`}
        >
          Anterior
        </button>
        <span className="font-semibold">
          Página {currentPage + 1} de {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
          className={`px-4 py-2 rounded border border-white hover:bg-white hover:text-black hover:border-black transition-all  ${
            currentPage === totalPages - 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-black text-white"
          }`}
        >
          Próxima
        </button>
      </div>
    </div>
  );
};

export default RenderData;
