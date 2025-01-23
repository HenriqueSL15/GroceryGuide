import { useState } from "react";
import ReactPaginate from "react-paginate";

const RenderData = ({ data, itemsPerPage = 32 }) => {
  const [currentPage, setCurrentPage] = useState(0); // Estado para armazenar a página atual
  const [searchQuery, setSearchQuery] = useState(""); // Estado para armazenar a pesquisa
  const [lowestPrice, setLowestPrice] = useState(true);

  // Verifica se existe data para ser utilizada
  if (!data || typeof data !== "object") {
    return <div>No data available</div>;
  }

  // Função para formatar o nome da categoria
  const formatKey = (key) =>
    key.slice(0, 1).toUpperCase() + key.slice(1).replaceAll("_", " ");

  // Filtra categorias e itens com base no nome
  const filterItems = (data) => {
    console.log(typeof data);

    for (const categoryKey in data) {
      console.log(categoryKey);
    }
    let filteredData = data
      .forEach((categoryKey) => {
        console.log(categoryKey);
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
      .filter((category) => category.items.length > 0);

    if (lowestPrice) {
      filteredData = filteredData.map((category) => ({
        ...category,
        items: category.items.sort((a, b) => parsePrice(a) - parsePrice(b)),
      }));
    }

    return filteredData;
  };

  const parsePrice = (priceString) => {
    const newString = priceString.price;
    return Number(newString.replace("R$", "").replace(",", "."));
  };

  const totalItems = filterItems(data).reduce(
    (acc, category) => acc + category.items.length,
    0
  );
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Divide os dados por páginas
  const paginatedCategories = filterItems(data)
    .map((category) => {
      const startIndex = currentPage * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;

      return {
        category: category.category,
        items: category.items.slice(startIndex, endIndex), // Pega apenas os itens desta página
      };
    })
    .filter((category) => category.items.length > 0); // Remove categorias sem itens

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
          activeClassName={"bg-black text-white rounded px-3 py-1"}
          pageClassName={"border rounded px-3 py-1"}
          previousClassName={
            currentPage === 0
              ? "text-gray-400 cursor-not-allowed"
              : "border rounded px-3 py-1"
          }
          nextClassName={
            currentPage === totalPages - 1
              ? "text-gray-400 cursor-not-allowed"
              : "border rounded px-3 py-1"
          }
          disabledClassName={"opacity-50 cursor-not-allowed"}
        />
      </div>
    </div>
  );
};

export default RenderData;
