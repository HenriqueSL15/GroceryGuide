import React, { useState, useEffect, act } from "react";
import Option from "./Option.jsx";
import RenderData from "./RenderData.jsx";

function Body() {
  const websiteDefaultLinks = {
    comper: "https://www.comper.com.br/",
    olho_d_agua: "https://superolhodagua.instabuy.com.br/",
  };

  const links = [
    {
      comper: {
        alimentacao_saudavel: "https://www.comper.com.br/alimentacao-saudavel",
        bebidas: "https://www.comper.com.br/bebidas",
        casa_e_lazer: "https://www.comper.com.br/casa-e-lazer",
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
      olho_d_agua: {
        alimentacao_saudavel: "",
        bebidas: {
          alcoolicas: {
            cerveja:
              "https://superolhodagua.instabuy.com.br/sub/Bebidas-Alcoolicas/5d12308d26ce8991c70e4c81",
          },
          nao_alcoolicas: {
            cha: "https://superolhodagua.instabuy.com.br/sub/Bebidas-Nao-Alcoolicas/5d1230aaaba19edbf30e41d6",
            energetico:
              "https://superolhodagua.instabuy.com.br/sub/Bebidas-Nao-Alcoolicas/5d1230b226ce8991c70e4ca5",
            nectar:
              "https://superolhodagua.instabuy.com.br/sub/Bebidas-Nao-Alcoolicas/5d1230b926ce8991c70e4cb2",
            refresco_em_po:
              "https://superolhodagua.instabuy.com.br/sub/Bebidas-Nao-Alcoolicas/5d1230c0748e182f890e3c58",
            refrigerante:
              "https://superolhodagua.instabuy.com.br/sub/Bebidas-Nao-Alcoolicas/5d1230c626ce8991c70e4cc3",
            sucos:
              "https://superolhodagua.instabuy.com.br/sub/Bebidas-Nao-Alcoolicas/5d1230cb26ce8991c70e4cd0",
            agua: "https://superolhodagua.instabuy.com.br/sub/Bebidas-Nao-Alcoolicas/5d1230d0aba19edbf30e41e7",
          },
        },
        casa_e_lazer: {
          cozinha:
            "https://superolhodagua.instabuy.com.br/sub/Artigos-para-o-Lar/5d122f7d26ce8991c70e4c58",
          inseticidas:
            "https://superolhodagua.instabuy.com.br/sub/Artigos-para-o-Lar/5d122f83aba19edbf30e41ca",
          lar: "https://superolhodagua.instabuy.com.br/sub/Artigos-para-o-Lar/5d122f88aba19edbf30e41cb",
          talheres_e_loucas:
            "https://superolhodagua.instabuy.com.br/sub/Artigos-para-o-Lar/5d122f8f26ce8991c70e4c70",
          lampadas_e_velas:
            "https://superolhodagua.instabuy.com.br/sub/Artigos-para-o-Lar/5d122f9626ce8991c70e4c71",
          toalhas:
            "https://superolhodagua.instabuy.com.br/sub/Artigos-para-o-Lar/5d122f9b748e182f890e3c4b",
        },
        carnes: {
          aves: "https://superolhodagua.instabuy.com.br/sub/Acougue-Aves-Peixaria/5d12301126ce8991c70e4c78",
          aves_naturais:
            "https://superolhodagua.instabuy.com.br/sub/Acougue-Aves-Peixaria/5d123048748e182f890e3c4d",
          bovinos:
            "https://superolhodagua.instabuy.com.br/sub/Acougue-Aves-Peixaria/5d12304d26ce8991c70e4c7a",
          linguicaria:
            "https://superolhodagua.instabuy.com.br/sub/Acougue-Aves-Peixaria/5d12306626ce8991c70e4c7e",
          peixaria:
            "https://superolhodagua.instabuy.com.br/sub/Acougue-Aves-Peixaria/5d12307926ce8991c70e4c7f",
          salsicharia:
            "https://superolhodagua.instabuy.com.br/sub/Acougue-Aves-Peixaria/5d12305926ce8991c70e4c7c",
          suinos:
            "https://superolhodagua.instabuy.com.br/sub/Acougue-Aves-Peixaria/5d12307e26ce8991c70e4c80",
        },
        congelados: {
          lanches:
            "https://superolhodagua.instabuy.com.br/sub/Congelados/5d12317f26ce8991c70e4d8d",
          sorvetes:
            "https://superolhodagua.instabuy.com.br/sub/Congelados/5d12318e26ce8991c70e4d8e",
        },
        frios: {
          derivados_de_queijo:
            "https://superolhodagua.instabuy.com.br/sub/Frios-e-Laticinios/5d1231caaba19edbf30e4222",
          iogurtes:
            "https://superolhodagua.instabuy.com.br/sub/Frios-e-Laticinios/5d1231de26ce8991c70e4d93",
          manteigas:
            "https://superolhodagua.instabuy.com.br/sub/Frios-e-Laticinios/5d1231e826ce8991c70e4d94",
          queijos:
            "https://superolhodagua.instabuy.com.br/sub/Frios-e-Laticinios/5d1231ecaba19edbf30e4223",
        },
        higiene: "",
        hortifruti: {
          frutas:
            "https://superolhodagua.instabuy.com.br/sub/Frutas-Verduras-Legumes/5d123204a69308e14f0e3dfe",
          hortalicas_e_folhas:
            "https://superolhodagua.instabuy.com.br/sub/Frutas-Verduras-Legumes/5d12320926ce8991c70e4d97",
          legumes:
            "https://superolhodagua.instabuy.com.br/sub/Frutas-Verduras-Legumes/5d12320e26ce8991c70e4d98",
          verduras:
            "https://superolhodagua.instabuy.com.br/sub/Frutas-Verduras-Legumes/5d12321326ce8991c70e4d99",
        },
        infantil: "",
        limpeza: {
          alvejante:
            "https://superolhodagua.instabuy.com.br/sub/Limpeza/5d12322526ce8991c70e4d9b",
          amaciante:
            "https://superolhodagua.instabuy.com.br/sub/Limpeza/5d12322aaba19edbf30e4224",
          cera: "https://superolhodagua.instabuy.com.br/sub/Limpeza/5d123231a69308e14f0e3dff",
          derivados:
            "https://superolhodagua.instabuy.com.br/sub/Limpeza/5d13a811ef86055367c61fd0",
          desinfetante:
            "https://superolhodagua.instabuy.com.br/sub/Limpeza/5d123237aba19edbf30e4225",
          desodorizador:
            "https://superolhodagua.instabuy.com.br/sub/Limpeza/5d123240a69308e14f0e3e00",
          detergente:
            "https://superolhodagua.instabuy.com.br/sub/Limpeza/5d12324d748e182f890e3c71",
          esponjas:
            "https://superolhodagua.instabuy.com.br/sub/Limpeza/5d12326826ce8991c70e4da0",
          limpador_multiuso:
            "https://superolhodagua.instabuy.com.br/sub/Limpeza/5d13a80a6d3a1503efc605a1",
          sabao_em_barra:
            "https://superolhodagua.instabuy.com.br/sub/Limpeza/5d5dace2c91cfb8331860ab2",
          sabao_em_pasta:
            "https://superolhodagua.instabuy.com.br/sub/Limpeza/5d13a817ef86055367c61fd1",
          sabao_em_po:
            "https://superolhodagua.instabuy.com.br/sub/Limpeza/5d12325daba19edbf30e4227",
          sacos_para_lixo:
            "https://superolhodagua.instabuy.com.br/sub/Limpeza/5d5dab1ac91cfb8331860a4e",
        },
        matinais: "",
        mercearia: {
          arroz:
            "https://superolhodagua.instabuy.com.br/sub/Alimentos-Basicos/5d122f3b26ce8991c70e4c51",
          enlatados:
            "https://superolhodagua.instabuy.com.br/sub/Alimentos-Basicos/5d122f48aba19edbf30e41c9",
          farinhas:
            "https://superolhodagua.instabuy.com.br/sub/Alimentos-Basicos/5d122f4d26ce8991c70e4c52",
          feijao:
            "https://superolhodagua.instabuy.com.br/sub/Alimentos-Basicos/5d122f53748e182f890e3c49",
          granel:
            "https://superolhodagua.instabuy.com.br/sub/Alimentos-Basicos/5d122f5926ce8991c70e4c55",
          massas:
            "https://superolhodagua.instabuy.com.br/sub/Alimentos-Basicos/5d122f6826ce8991c70e4c56",
          achocolatado:
            "https://superolhodagua.instabuy.com.br/sub/Mercearia/5d12327326ce8991c70e4da2",
          azeites_oleos:
            "https://superolhodagua.instabuy.com.br/sub/Mercearia/5d12327a26ce8991c70e4da3",
          acucar:
            "https://superolhodagua.instabuy.com.br/sub/Mercearia/5d12327fa69308e14f0e3e03",
          cafes:
            "https://superolhodagua.instabuy.com.br/sub/Mercearia/5d12328726ce8991c70e4da6",
          cereais:
            "https://superolhodagua.instabuy.com.br/sub/Mercearia/5d12328daba19edbf30e4228",
          leite:
            "https://superolhodagua.instabuy.com.br/sub/Mercearia/5d12329526ce8991c70e4da7",
          derivados_tomate:
            "https://superolhodagua.instabuy.com.br/sub/Condimentos-e-Molhos/5d12312ba69308e14f0e3df7",
          fermentos_essencias:
            "https://superolhodagua.instabuy.com.br/sub/Condimentos-e-Molhos/5d123130a69308e14f0e3dfa",
          maionese:
            "https://superolhodagua.instabuy.com.br/sub/Condimentos-e-Molhos/5d12313826ce8991c70e4d87",
          molhos:
            "https://superolhodagua.instabuy.com.br/sub/Condimentos-e-Molhos/5d12313d26ce8991c70e4d88",
          temperos_naturais:
            "https://superolhodagua.instabuy.com.br/sub/Condimentos-e-Molhos/5d12316426ce8991c70e4d8a",
          temperos_prontos:
            "https://superolhodagua.instabuy.com.br/sub/Condimentos-e-Molhos/5d12314aaba19edbf30e421f",
          biscoitos:
            "https://superolhodagua.instabuy.com.br/sub/Biscoitos-e-Aperitivos/5d1230e326ce8991c70e4d00",
          salgadinhos:
            "https://superolhodagua.instabuy.com.br/sub/Biscoitos-e-Aperitivos/5d1230e826ce8991c70e4d12",
        },
        padaria: {
          paes_industrializados:
            "https://superolhodagua.instabuy.com.br/sub/Padaria-e-Lanchonete/5d1232e926ce8991c70e4dac",
        },
        pet_shop: "",
        doces: {
          bolos:
            "https://superolhodagua.instabuy.com.br/sub/Doces/5d1231b3748e182f890e3c6c",
          bombonieri:
            "https://superolhodagua.instabuy.com.br/sub/Doces/5d12319b26ce8991c70e4d90",
          creme_de_leite:
            "https://superolhodagua.instabuy.com.br/sub/Doces/5d1231a1748e182f890e3c6a",
          doces_e_compotas:
            "https://superolhodagua.instabuy.com.br/sub/Doces/5d1231a9aba19edbf30e4221",
          gelatinas_e_sobremesas_em_po:
            "https://superolhodagua.instabuy.com.br/sub/Doces/5d1231af748e182f890e3c6b",
          leite_de_coco_e_coco_rolado:
            "https://superolhodagua.instabuy.com.br/sub/Doces/5d1231b9a69308e14f0e3dfd",
        },
        perfumaria: {
          absorventes:
            "https://superolhodagua.instabuy.com.br/sub/Perfumaria/5d123332a69308e14f0e3e06",
          antisseptico:
            "https://superolhodagua.instabuy.com.br/sub/Perfumaria/5d12333826ce8991c70e4daf",
          barba:
            "https://superolhodagua.instabuy.com.br/sub/Perfumaria/5d12333d748e182f890e3c74",
          desodorantes:
            "https://superolhodagua.instabuy.com.br/sub/Perfumaria/5d123343aba19edbf30e422b",
          farmacia:
            "https://superolhodagua.instabuy.com.br/sub/Perfumaria/5d123348a69308e14f0e3e07",
          fraldas:
            "https://superolhodagua.instabuy.com.br/sub/Perfumaria/5d12334d26ce8991c70e4db0",
          hidratantes_produtos_para_pele:
            "https://superolhodagua.instabuy.com.br/sub/Perfumaria/5d12335626ce8991c70e4db1",
          higiene_bucal:
            "https://superolhodagua.instabuy.com.br/sub/Perfumaria/5d12335e26ce8991c70e4db2",
          papel_higienico:
            "https://superolhodagua.instabuy.com.br/sub/Perfumaria/5d12336d26ce8991c70e4db4",
          produtos_para_cabelo_e_tintas:
            "https://superolhodagua.instabuy.com.br/sub/Perfumaria/5d123373748e182f890e3c75",
          sabonete:
            "https://superolhodagua.instabuy.com.br/sub/Perfumaria/5d12337926ce8991c70e4db6",
          shampoo_e_condicionador:
            "https://superolhodagua.instabuy.com.br/sub/Perfumaria/5d12338226ce8991c70e4db7",
        },
        outras_categorias: {
          artigos_churrasco:
            "https://superolhodagua.instabuy.com.br/sub/Outras-Categorias/5d1232a426ce8991c70e4da8",
          diveros:
            "https://superolhodagua.instabuy.com.br/sub/Outras-Categorias/5d1232a926ce8991c70e4da9",
          papelaria:
            "https://superolhodagua.instabuy.com.br/sub/Outras-Categorias/5d1232b5a69308e14f0e3e04",
          produtos_descartaveis:
            "https://superolhodagua.instabuy.com.br/sub/Outras-Categorias/5d1232bcaba19edbf30e4229",
          racoes_e_produtos_de_animais:
            "https://superolhodagua.instabuy.com.br/sub/Outras-Categorias/5d1232cbaba19edbf30e422a",
        },
      },
    },
  ];

  const [displayInformation, setDisplayInformation] = useState({});

  const transformText = (key) => {
    return key
      .slice(0, 1)
      .toUpperCase()
      .concat(key.slice(1))
      .replaceAll("_", " ");
  };

  const [resetPageIndex, setResetPageIndex] = useState();
  // let resetPageIndex = false;

  const allSupermarkets = ["Comper", "Olho D' Água"];
  const [activeSupermarket, setActiveMarket] = useState("olho_d_agua");
  const [activeCategory, setActiveCategory] = useState("carnes");
  const categories = [
    "alimentacao_saudavel",
    "bebidas",
    "casa_e_lazer",
    "carnes",
    "congelados",
    "frios",
    "higiene",
    "hortifruti",
    "infantil",
    "limpeza",
    "matinais",
    "mercearia",
    "padaria",
    "pet_shop",
    "doces",
    "perfumaria",
    "outras_categorias",
  ];

  const handleEvent = () => {
    setResetPageIndex(true); // Atualiza o estado

    setTimeout(() => {
      setResetPageIndex(false); // Redefine o estado após 1 segundo
    }, 1000);
  };

  useEffect(() => {
    handleClick();
    handleEvent();
  }, [activeCategory, activeSupermarket]);

  const handleClick = () => {
    const sendInfo = async () => {
      try {
        const information = [
          websiteDefaultLinks[activeSupermarket],
          links[0][activeSupermarket],
          activeCategory,
        ];
        console.log("Informação", information);
        const response = await fetch(
          "https://grocery-guide-backend.vercel.app/info",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(information),
          }
        );

        //Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
          throw new Error("Erro no envio de informações");
        }
        const data = await response.json();
      } catch (error) {
        console.error("Erro ao enviar as informações:", error);
      }
    };

    const startScrape = async () => {
      try {
        const response = await fetch(
          "https://grocery-guide-backend.vercel.app/start-scraping",
          {
            method: "POST",
          }
        );

        //Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
          throw new Error("Erro no envio de informações");
        }
        const data = await response.json();

        if (data.ok) {
          console.log("Scraping iniciado e concluído com sucesso.");
        } else {
          console.error("Erro ao iniciar o scraping.");
        }
      } catch (error) {
        console.error("Erro ao enviar as informações:", error);
      }
    };
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://grocery-guide-backend.vercel.app/data"
        );

        // Verifique se a resposta é bem-sucedida
        if (response.ok) {
          // Arquivo JSON existe, obter dados filtrados
          const data = await response.json();
          console.log(data);

          // Obter apenas as categorias selecionadas pelo usuário
          const selectedCategories = activeCategory;

          // console.log(selectedCategories);

          setDisplayInformation(data);

          const filteredData = () => {
            if (
              data[activeSupermarket].hasOwnProperty(activeCategory) &&
              Object.keys(data[activeSupermarket][activeCategory]).length > 0
            ) {
              return data[activeSupermarket][activeCategory];
            }
          };

          setDisplayInformation(filteredData());
        } else {
          await sendInfo();
          startScrape();
        }
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };
    try {
      fetchData();
    } catch {
      console.log("DEU ERRADO");
    }
  };

  return (
    <div id="body" className="bg-white w-full h-full sm:mx-3">
      <div className="flex">
        <div className="w-1/4 lg:border-r-2  border-gray-400 rounded bg-white min-w-1/4 text-start mr-14 min-h-96">
          <div className="flex flex-col text-xl justify-start items-start gap-2">
            <h2 className="mb-5 text-3xl font-semibold">Supermercado</h2>
            {allSupermarkets.map((value) => {
              return (
                <>
                  <Option
                    onClick={() =>
                      setActiveMarket(
                        String(value)
                          .toLowerCase()
                          .replace(/\s+/g, "_")
                          .replace(/'/g, "")
                          .replace(/á/g, "a")
                      )
                    }
                    text={value}
                    activeCategory={activeCategory}
                    activeSupermarket={activeSupermarket}
                  ></Option>
                </>
              );
            })}
          </div>

          <div className="flex flex-col text-xl gap-2">
            <h2 className="mb-5 text-3xl mt-10 font-semibold">Categoria</h2>
            {/* Passa por todos os itens de dentro de categories para criar um botão para cada uma das opções */}
            {categories.map((category) => {
              return (
                <>
                  <Option
                    text={transformText(category)}
                    onClick={() => setActiveCategory(category)}
                    activeCategory={activeCategory} // Mando a atualização do estado para o componente Option(para alteração do estilo)
                    activeSupermarket={activeSupermarket}
                  ></Option>
                </>
              );
            })}
          </div>
        </div>
        <div className="w-3/4 bg-white min-w-3/4 lg:border-none sm:border-l-2">
          <RenderData
            resetToStart={resetPageIndex}
            currentCategory={activeCategory}
            data={displayInformation}
          />
        </div>
      </div>
    </div>
  );
}

export default Body;
