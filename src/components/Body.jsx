import React, { useState, useEffect } from "react";

function Body() {
  const links = [
    {
      comper: {
        alimentacao_saudavel: "https://www.comper.com.br/alimentacao-saudavel",
        bebidas: "https://www.comper.com.br/bebidas",
        carnes: "https://www.comper.com.br/carnes-aves-e-peixes",
        congelados: "https://www.comper.com.br/congelados",
        frios: "https://www.comper.com.br/frios-e-laticinios",
        higiene: "https://www.comper.com.br/higiene-e-beleza",
        hortifruti: "https://www.comper.com.br/hortifruti",
        infantil: "https://www.comper.com.br/infantil",
        limpeza: "https://www.comper.com.br/limpeza",
        matinais: "https://www.comper.com.br/matinais",
        mercearia: "https://www.comper.com.br/mercearia",
        padaria: "https://www.comper.com.br/padaria",
        pet_shop: "https://www.comper.com.br/pet_shop",
        doces: "",
        perfumaria: "",
        outras_categorias: "",
      },
      olho_agua: {},
    },
  ];

  const [activeSupermarket, setActiveMarket] = useState("comper");

  useEffect(() => {
    const sendInfo = async () => {
      try {
        const information = links[0][activeSupermarket];
        const response = await fetch("http://localhost:5000/info", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(information),
        });

        //Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
          throw new Error("Erro no envio de informações");
        }
        const data = await response.json();
      } catch (error) {
        console.error("Erro ao enviar as informações:", error);
      }
    };
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/scrape");

        // Verifique se a resposta é bem-sucedida
        if (!response.ok) {
          throw new Error("Erro na resposta da API");
        }
        const data = await response.json();
        console.log(data); // Verifique o que está sendo retornado
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };
    sendInfo();
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
              onClick={() => setActiveMarket("olho_agua")}
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
