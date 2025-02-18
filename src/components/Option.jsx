function Option({ text, onClick, activeCategory, activeSupermarket }) {
  const transformedText = String(text)
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/'/g, "")
    .replace(/á/g, "a");

  function handleText(text) {
    let words = text.split(" ");
    for (let i = 0; i < words.length; i++) {
      if (words[i].length <= 1) {
        continue;
      }
      console.log(words[i]);
      if (words[i] == "Alimentacao") {
        words[i] = "Alimentação";
        continue;
      }

      if (words[i] == "saudavel") {
        words[i] = "Saudável";
        continue;
      }

      const first = words[i].slice(0, 1).toUpperCase();
      const last = words[i].slice(1);
      words[i] = first + last;
    }

    return words.join(" ");
  }

  const isActive =
    activeCategory === transformedText || activeSupermarket === transformedText;

  return (
    <button
      onClick={onClick}
      className={`font-light hover:font-normal transition-all text-start ${
        isActive ? "font-normal" : "font-light"
      }`}
    >
      {handleText(text)}
    </button>
  );
}

export default Option;
