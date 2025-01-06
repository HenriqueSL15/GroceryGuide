function Option({ text, onClick, isActive, activeSupermarket }) {
  console.log(activeSupermarket);
  const transformedText = String(text)
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/'/g, "")
    .replace(/á/g, "a");
  console.log(transformedText);
  return (
    <button
      onClick={onClick}
      className={`font-light hover:font-normal transition-all text-start ${
        activeSupermarket == ""
          ? isActive
            ? "font-normal"
            : "font-light"
          : activeSupermarket === transformedText
          ? "font-normal"
          : "font-light"
      }`}
    >
      {text}
    </button>
  );
}

export default Option;
