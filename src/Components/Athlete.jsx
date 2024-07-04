import React, { useState } from "react";

const Athlete = ({ data, mover, id }) => {
    const { name, description, img } = data;

    return (
        <>
            <div onMouseEnter={() => mover(id)} className="product relative h-[40vh] hover:h-[41vh] w-full rounded-xl overflow-hidden duration-500 ease-expo">
                <div className="relative z-2 h-full max-w-screen-xl mx-auto flex flex-col md:flex-row justify-start md:justify-between md:items-center border-t-2 px-4">
                    <h1 className=" text-2xl pt-2 lg:p-0 md:text-3xl capitalize font-medium monument">{name}</h1>
                    <div className=" md:w-[30%]">
                        <p className="text-xs lg:text-sm leading-1 mb-4 monument">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Athlete;