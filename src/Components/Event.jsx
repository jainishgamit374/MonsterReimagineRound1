const Event = ({data}) => {
  var {image_background, image_upper, date, footer_heading, title} = data;
  return (
    <div className="h-[90%] relative select-none cursor-pointer w-72 flex-shrink-0 drop-shadow-2xl rounded-2xl bg-white overflow-hidden">
      <img className="h-[70%] opacity-35 w-full relative object-cover" src={image_background} alt=""/>
      <div className="h-[70%] w-full bg-black absolute top-0 opacity-50"></div>
      <span className="h-6 w-6 bg-white rounded-full absolute bottom-[27%] -left-[3%]"></span>
      <span className="h-6 w-6 bg-white rounded-full absolute bottom-[27%] -right-[3%]"></span>
      <div className="px-5 py-2">
        <h1 className="text-lg tracking-tighter font-bold">{title}</h1>
        <p className="text-sm font-semibold">{date}</p>
        <p className="font-bold py-5">{footer_heading}</p>
      </div>
      <div className="h-[70%] w-full absolute top-0 left-0">
        <img className="absolute h-28 w-full top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 object-contain" src={image_upper} alt="" />
      </div>
    </div>
  );
};
export default Event;