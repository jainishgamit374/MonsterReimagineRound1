import React from "react";

const Ingredients = () => {
  return (
    <>
      <h1 className="text-4xl font-semibold text-center pt-20 monument">Buy more than will get</h1>
      <h1 className="text-3xl font-semibold text-center pb-20 monument">Extra Nourishment</h1>
      <div className="h-[70vh] w-full relative flex gap-[30vw] justify-center">
        <div>
          <div className="h-72 w-80">
            <div>
              <h1 className="text-xl font-black flex justify-end">Something</h1>
              <p className="text-sm flex flex-end py-3 text-end">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus illum repellendus ab, rem asperiores neque facere
                similique laudantium nihil maiores?
              </p>
            </div>
          </div>
          <div className="h-72 w-80">
            <div>
              <h1 className="text-xl font-black flex justify-end">Something</h1>
              <p className="text-sm flex flex-end py-3 text-end">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus illum repellendus ab, rem asperiores neque facere
                similique laudantium nihil maiores?
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-5 left-1/2 -translate-x-2/4">
        </div>
        <div>
          <div className="h-72 w-80">
            <div>
              <h1 className="text-xl font-black">Something</h1>
              <p className="text-sm py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus illum repellendus ab, rem asperiores neque facere
                similique laudantium nihil maiores?
              </p>
            </div>
          </div>
          <div className="h-72 w-80">
            <div>
              <h1 className="text-xl font-black">Something</h1>
              <p className="text-sm py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus illum repellendus ab, rem asperiores neque facere
                similique laudantium nihil maiores?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ingredients;
