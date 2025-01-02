function Option({ text, onClick, isActive }) {
  //isActive = false;
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
