import IndividualSupermarket from "./IndividualSupermarket.jsx";

function Supermarkets() {
  const supermarkets = [
    {
      name: "Comper",
      link: "https://www.comper.com.br/",
      location: "St. Central Q 29 Cl Lote 53 - Gama, Brasília - DF, 72405-290",
    },
    {
      name: "Olho D' Água",
      link: "https://superolhodagua.instabuy.com.br/",
      location: "SSU Qd 10 Lote 1, 3 E 5 - Gama, Brasília - DF, 72415-500",
    },
  ];

  return (
    <div className="border-2 border-black rounded-lg object-cover p-10 my-40">
      <h1 className="px-5 font-funnel font-bold text-4xl mb-5">
        Supermercados
      </h1>
      <div className="grid grid-cols-2">
        {supermarkets.map((supermarket, index) => {
          return <IndividualSupermarket supermarket={supermarket} />;
        })}
      </div>
    </div>
  );
}

export default Supermarkets;
