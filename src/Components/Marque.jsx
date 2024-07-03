const Marque = () => {
  var arr = [1, 2, 3, 4];

  return (
    <div className="marque h-[30vh] w-full flex flex-nowrap">
      {arr.map((item, index) => {
        return (
          <div
            key={index}
            className="h-[30vh] flex items-center gap-6 flex-shrink-0 w-full bg-[#2C4387] text-white relative -m-px"
          >
            <h1 className="font-[Kajiro] kajiro text-[10vw] font-semibold">
              REDBULL
            </h1>
            <img
              className="h-28 object-contain"
              src="https://em-content.zobj.net/source/apple/391/high-voltage_26a1.png"
              alt=""
            />
            <h1 className="font-[Kajiro] kajiro text-[10vw] font-semibold">
              REDBULL
            </h1>
            <img
              className="h-28 object-contain"
              src="https://em-content.zobj.net/source/apple/391/high-voltage_26a1.png"
              alt=""
            />
            <h1 className="font-[Kajiro] kajiro text-[10vw] font-semibold">
              REDBULL
            </h1>
            <img
              className="h-28 object-contain"
              src="https://em-content.zobj.net/source/apple/391/high-voltage_26a1.png"
              alt=""
            />
            <h1 className="font-[Kajiro] kajiro text-[10vw] font-semibold">
              REDBULL
            </h1>
            <img
              className="h-28 object-contain"
              src="https://em-content.zobj.net/source/apple/391/high-voltage_26a1.png"
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
};

export default Marque;
