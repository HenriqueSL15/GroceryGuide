function Option({ text, onClick, activeCategory, activeSupermarket }) {
  const transformedText = String(text)
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/'/g, "")
    .replace(/á/g, "a");

  const isActive =
    activeCategory === transformedText || activeSupermarket === transformedText;

  return (
    <button
      onClick={onClick}
      className={`font-light hover:font-normal transition-all text-start ${
        isActive ? "font-normal" : "font-light"
      }`}
    >
      {text}
    </button>
  );
}

export default Option;
