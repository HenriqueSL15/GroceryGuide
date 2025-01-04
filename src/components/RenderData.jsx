const RenderData = ({ data }) => {
  return (
    <div>
      {Object.keys(data).map((itemKey) => (
        <div className="grid grid-cols-3" key={itemKey}>
          {Object.keys(data[itemKey]).map((subitemKey) => {
            const { title, price, image } = data[itemKey][subitemKey];
            return (
              <div
                className="flex flex-col mx-7 my-3 p-3 text-center shadow-xl"
                key={subitemKey}
              >
                <img className="mb-7" src={image} alt="" />
                <h3 className="font-semibold mb-1">{title}</h3>
                <h3 className="font-normal">{price}</h3>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default RenderData;
