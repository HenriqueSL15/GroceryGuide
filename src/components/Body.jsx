import React, { useState, useEffect, act } from "react";
import Option from "./Option.jsx";
import RenderData from "./RenderData.jsx";

function Body() {
  const websiteDefaultLinks = {
    comper: "https://www.comper.com.br/",
    olho_d_agua: "https:/www.superolhodagua.instabuy.com.br",
  };

  const links = [
    {
      comper: {
        alimentacao_saudavel: "https://www.comper.com.br/alimentacao-saudavel",
        bebidas: "https://www.comper.com.br/bebidas",
        casa_e_lazer: "",
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
      olho_agua: {
        alimentacao_saudavel: "",
        bebidas: {
          alcoolicas: {
            cerveja:
              "https://superolhodagua.instabuy.com.br/sub/Bebidas-Alcoolicas/5d12308d26ce8991c70e4c81",
            vinho:
              "https://superolhodagua.instabuy.com.br/sub/Bebidas-Alcoolicas/5d12309226ce8991c70e4c82",
            vodka:
              "https://superolhodagua.instabuy.com.br/sub/Bebidas-Alcoolicas/5d12309b26ce8991c70e4c84",
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
        casa_e_lazer:
          "https://superolhodagua.instabuy.com.br/cat/Artigos-para-o-Lar",
        congelados: {
          gelo: "https://superolhodagua.instabuy.com.br/sub/Congelados/5d12317626ce8991c70e4d8b",
          lanches:
            "https://superolhodagua.instabuy.com.br/sub/Congelados/5d12317f26ce8991c70e4d8d",
          sorvetes:
            "https://superolhodagua.instabuy.com.br/sub/Congelados/5d12318e26ce8991c70e4d8e",
        },
        frios: {
          derivados_de_queijo:
            "https://superolhodagua.instabuy.com.br/sub/Frios-e-Laticinios/5d1231caaba19edbf30e4222s",
          frios_e_embutidos:
            "https://superolhodagua.instabuy.com.br/sub/Frios-e-Laticinios/5d1231d126ce8991c70e4d91",
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
          sabao_liquido:
            "https://superolhodagua.instabuy.com.br/sub/Limpeza/5d12325826ce8991c70e4d9d",
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
          alimentos_basicos: {
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
          },
          mercearia: {
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
          },
          condimentos_e_molhos: {
            derivados_tomate:
              "https://superolhodagua.instabuy.com.br/sub/Condimentos-e-Molhos/5d12312ba69308e14f0e3df7",
            fermentos_essencias:
              "https://superolhodagua.instabuy.com.br/sub/Condimentos-e-Molhos/5d123130a69308e14f0e3dfa",
            maionese:
              "https://superolhodagua.instabuy.com.br/sub/Condimentos-e-Molhos/5d12313826ce8991c70e4d87",
            molhos:
              "https://superolhodagua.instabuy.com.br/sub/Condimentos-e-Molhos/5d12313d26ce8991c70e4d88",
            sopas:
              "https://superolhodagua.instabuy.com.br/sub/Condimentos-e-Molhos/5d123145aba19edbf30e421e",
            temperos_naturais:
              "https://superolhodagua.instabuy.com.br/sub/Condimentos-e-Molhos/5d12316426ce8991c70e4d8a",
            temperos_prontos:
              "https://superolhodagua.instabuy.com.br/sub/Condimentos-e-Molhos/5d12314aaba19edbf30e421f",
          },
          biscoitos_aperitivos: {
            biscoitos:
              "https://superolhodagua.instabuy.com.br/sub/Biscoitos-e-Aperitivos/5d1230e326ce8991c70e4d00",
            salgadinhos:
              "https://superolhodagua.instabuy.com.br/sub/Biscoitos-e-Aperitivos/5d1230e826ce8991c70e4d12",
            torradas:
              "https://superolhodagua.instabuy.com.br/sub/Biscoitos-e-Aperitivos/5d1230ef26ce8991c70e4d1a",
          },
        },
        pedaria: {
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

  const allSupermarkets = ["Comper", "Olho D' Água"];
  const [activeSupermarket, setActiveMarket] = useState("comper");
  const [categories, setCategories] = useState({
    alimentacao_saudavel: true,
    bebidas: true,
    casa_e_lazer: true,
    carnes: true,
    congelados: true,
    frios: true,
    higiene: true,
    hortifruti: true,
    infantil: true,
    limpeza: true,
    matinais: true,
    mercearia: true,
    padaria: true,
    pet_shop: true,
    doces: true,
    perfumaria: true,
    outras_categorias: true,
  });

  const handleClick = () => {
    const sendInfo = async () => {
      try {
        const information = [
          websiteDefaultLinks[activeSupermarket],
          links[0][activeSupermarket],
          categories,
        ];
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
    const startScrape = async () => {
      try {
        const response = await fetch("http://localhost:5000/start-scraping", {
          method: "POST",
        });

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
        const response = await fetch("http://localhost:5000/data");

        // Verifique se a resposta é bem-sucedida
        if (response.ok) {
          // Arquivo JSON existe, obter dados filtrados
          const data = await response.json();
          console.log(data);

          // Obter apenas as categorias selecionadas pelo usuário
          const selectedCategories = Object.keys(categories).filter(
            (category) => categories[category]
          );

          setDisplayInformation(data);

          const filteredData = selectedCategories.reduce((result, category) => {
            // Verifica se a categoria existe e se contém itens (pelo menos um item no objeto)
            console.log(result);
            if (
              data.hasOwnProperty(category) &&
              Object.keys(data[category]).length > 0
            ) {
              result[category] = data[category];
            }
            return result;
          }, {});

          console.log(filteredData);
          setDisplayInformation(filteredData);
        } else {
          sendInfo();
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
    <div className="bg-white w-full h-full">
      <div className="flex">
        <div className="w-1/4 border-r-2 border-gray-400 rounded bg-white min-w-1/4 text-start p-3 min-h-96">
          <h2 className="mb-5 text-3xl font-semibold">Supermercado</h2>
          <div className="flex flex-col text-xl justify-start items-start gap-2">
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
                  ></Option>
                </>
              );
            })}
          </div>

          <h2 className="mb-5 text-3xl mt-10 font-semibold">Categorias</h2>
          <div className="flex flex-col text-xl gap-2">
            {/* Passa por todos os itens de dentro de categories para criar um botão para cada uma das opções */}
            {Object.keys(categories).map((key, index) => {
              return (
                <>
                  <Option
                    text={transformText(key)}
                    onClick={() => {
                      setCategories((prevCategories) => ({
                        ...prevCategories,
                        [key]: !prevCategories[key], // Altere a chave [key] com base no valor do objeto anterior(prevCategories) porém ! para inverte-lo
                      }));
                    }}
                    isActive={categories[key]} // Mando a atualização do estado para o componente Option(para alteração do estilo)
                  ></Option>
                </>
              );
            })}

            <Option
              className={"bg-red-500"}
              text={"Pesquisar"}
              onClick={() => handleClick()}
            ></Option>
          </div>
        </div>
        <div className="w-3/4 bg-white min-w-3/4">
          <RenderData data={displayInformation} />
        </div>
      </div>
    </div>
  );
}

export default Body;
