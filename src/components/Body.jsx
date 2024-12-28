import React, { useState, useEffect } from "react";

function Body() {
  const [activeSupermarket, setActiveMarket] = useState("Olho D' Água");

  useEffect(() => {
    const fetchData = async () => {
      console.log("Começo do fetch");
      try {
        console.log("fazendo fetch");
        const response = await fetch("http://localhost:5000/scrape");

        // Verifique se a resposta é bem-sucedida
        if (!response.ok) {
          console.log("Houve um erro");
          throw new Error("Erro na resposta da API");
        }
        console.log("Response:", response);
        const data = await response.json();
        console.log(data); // Verifique o que está sendo retornado
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };

    fetchData();
  }, [activeSupermarket]);

  return (
    <div className="bg-red-600 w-full h-full">
      <div className="flex">
        <div className="w-1/4 bg-green-600 min-w-1/4 text-start p-3 min-h-96">
          <h2 className="mb-5 text-3xl font-semibold">Supermercado</h2>
          <div className="flex flex-col text-xl justify-start items-start gap-2">
            <button
              className="font-light hover:font-normal transition-all"
              onClick={() => setActiveMarket("olho_d_agua")}
            >
              Olho D' Água
            </button>
            <button
              className="font-light hover:font-normal transition-all"
              onClick={() => setActiveMarket("comper")}
            >
              Comper
            </button>
          </div>
        </div>
        <div className="w-3/4 bg-blue-600 min-w-3/4"></div>
      </div>
    </div>
  );
}

export default Body;
