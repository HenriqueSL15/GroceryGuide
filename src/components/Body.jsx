import React, { useState, useEffect } from "react";
import puppeteer from "puppeteer";

function Body() {
  const [activeSupermarket, setActiveMarket] = useState("Olho D' Água");

  useEffect(() => {
    console.log(activeSupermarket);
  }, [activeSupermarket]);

  async function scrapeSupermarket(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try {
      await page.goto(url, { waitUntil: "domcontentloaded" });

      // Extrair dados dos produtos
      const products = await page.evaluate(() => {
        const items = [];

        // Selecionar todas as divs com a classe shelf-item (pai)
        document.querySelectorAll(".shelf-item").forEach((product) => {
          const price = product
            .querySelector(".best-price strong")
            ?.textContent.trim(); // Preço
          const image = product.querySelector(".shelf-item__image img")?.src; // URL da imagem
          const title = product
            .querySelector(".shelf-item__title")
            ?.textContent.trim(); // Título

          if (price && image && title) {
            items.push({ price, image, title });
          }
        });

        return items;
      });

      console.log(products); // Mostrar os produtos capturados
      await browser.close();
    } catch (error) {
      console.error("Erro ao fazer scraping:", error);
      await browser.close();
    }
  }

  // Substitua a URL pelo site do supermercado
  //scrapeSupermarket("https://example-supermarket.com");

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
