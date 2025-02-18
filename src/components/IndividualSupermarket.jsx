function IndividualSupermarket({ supermarket }) {
  const a = supermarket;
  console.log(a);

  return (
    <div className="bg-gray-200 p-5 mx-3 font-mono rounded-md mb-5">
      <h1 className="font-bold text-2xl font-funnel mb-2 p-2">{a.name}</h1>
      <h1>
        <a
          className="hover:text-white transition-all hover:bg-black p-2 rounded-sm"
          target="_blank"
          href={a.link}
        >
          Link para acesso
        </a>
      </h1>
      <h1 className="p-2">{a.location}</h1>
    </div>
  );
}

export default IndividualSupermarket;
