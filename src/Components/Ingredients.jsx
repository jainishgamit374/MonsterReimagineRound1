const Ingredients = () => {
  var array = [
    {
      name: "Carbonated Water",
      desc: "Acts as the base of the beverage, providing a refreshing fizz",
    },
    {
      name: "Taurine",
      desc: "An amino acid that supports neurological development and regulates water and mineral levels in the blood."
    }
  ];
  var array2 = [
    {
      name: "Caffeine",
      desc: "A stimulant that increases alertness and reduces fatigue."
    },
    {
      name: "Sucralose",
      desc: "Artificial sweeteners used to provide sweetness without additional calories."
    }
  ];
  return (
    <>
      <h1 className="text-xl md:text-4xl font-semibold capitalize text-center pt-20 monument">Buy more than will get</h1>
      <h1 className="text-lg md:text-3xl font-semibold capitalize text-center pb-20 monument">Extra Nourishment</h1>
      <div className="h-screen md:h-[70vh] w-full relative flex flex-col  md:flex-row gap-0 md:gap-[30vw] justify-end md:justify-center mt-10">
        <div className="flex flex-col items-center md:h-1/2 w-full justify-center md:justify-end  md:block md:px-20">
        {
          array.map((item, i) => (
            <div key={i} className="h-40 md:h-72 w-80">
            <div>
              <h1 className="text-xl font-black flex lg:justify-end">{item.name}</h1>
              <p className="text-sm flex  md:flex-end py-3 lg:text-end md:text-end">
                {item.desc}
              </p>
            </div>
          </div>
          ))
        }
        </div>
        <div className="flex flex-col items-center md:h-1/2 w-full  justify-center md:block">
          {
            array2.map((item, i) => (
              <div key={i} className="h-40 md:h-72 w-80">
            <div>
              <h1 className="text-xl font-black flex justify-start">{item.name}</h1>
              <p className="text-sm flex  md:flex-end py-3 lg:text-end md:text-start">
                {item.desc}
              </p>
            </div>
          </div>
            ))
          }
        </div>
        <svg className='top-right     hidden md:block  w-[18vw] absolute left-[54%] top-2 -rotate-[55deg]' version="1.1" viewBox="0 0 800 800"><g strokeWidth="10" stroke="hsl(0, 0%, 30%)" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M250 250Q516 277 400 400Q279 542 550 550 " markerEnd="url(#SvgjsMarker1300)"></path></g><defs><marker markerWidth="6" markerHeight="6" refX="3" refY="3" viewBox="0 0 6 6" orient="auto" id="SvgjsMarker1300"><polyline points="0,3 3,1.5 0,0" fill="none" strokeWidth="1" stroke="hsl(0, 0%, 30%)" strokeLinecap="round" transform="matrix(1,0,0,1,1,1.5)" strokeLinejoin="round"></polyline></marker></defs></svg>
        <svg className='bottom-right  hidden md:block  w-[18vw] absolute left-[50%] top-1/2 rotate-1' version="1.1" viewBox="0 0 800 800"><g strokeWidth="9" stroke="hsl(0, 0%, 30%)" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="matrix(0.3907311284892735,-0.9205048534524405,0.9205048534524405,0.3907311284892735,-120.49439277668557,611.9094899852669)"><path d="M250 250Q257 370 550 550 " markerEnd="url(#SvgjsMarker2297)"></path></g><defs><marker markerWidth="6" markerHeight="6" refX="3" refY="3" viewBox="0 0 6 6" orient="auto" id="SvgjsMarker2297"><polyline points="0,3 3,1.5 0,0" fill="none" strokeWidth="1" stroke="hsl(0, 0%, 30%)" strokeLinecap="round" transform="matrix(1,0,0,1,1,1.5)" strokeLinejoin="round"></polyline></marker></defs></svg>
        <svg className='top-left      hidden md:block  w-[18vw] absolute left-[28%] top-2 rotate-[30deg]' version="1.1" viewBox="0 0 800 800"><g strokeWidth="10" stroke="hsl(0, 0%, 30%)" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="rotate(121, 400, 400)"><path d="M231.5 232.37409961223602Q368.5 213.37409961223602 400 400.874099612236Q531.5 330.374099612236 568.5 569.374099612236 " markerEnd="url(#SvgjsMarker1546)"></path></g><defs><marker markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" viewBox="0 0 7 7" orient="auto" id="SvgjsMarker1546"><polyline points="0,3.5 3.5,1.75 0,0" fill="none" strokeWidth="1.1666666666666667" stroke="hsl(0, 0%, 30%)" strokeLinecap="round" transform="matrix(1,0,0,1,1.1666666666666667,1.75)" strokeLinejoin="round"></polyline></marker></defs></svg>
        <svg className='bottom-left   hidden md:block  w-[18vw] absolute left-[28%] top-[45%] ' version="1.1" viewBox="0 0 800 800"><g strokeWidth="10" stroke="hsl(0, 0%, 30%)" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="111 0" transform="rotate(141, 400, 400)"><path d="M290 292.32823038101196Q464 255.32823038101196 510 512.328230381012 " markerEnd="url(#SvgjsMarker2862)"></path></g><defs><marker markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" viewBox="0 0 7 7" orient="auto" id="SvgjsMarker2862"><polyline points="0,3.5 3.5,1.75 0,0" fill="none" strokeWidth="1.1666666666666667" stroke="hsl(0, 0%, 30%)" strokeLinecap="round" transform="matrix(1,0,0,1,1.1666666666666667,1.75)" strokeLinejoin="round"></polyline></marker></defs></svg>
      </div>
    </>
  );
};

export default Ingredients;
