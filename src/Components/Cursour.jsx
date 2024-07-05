import React, { useRef, useEffect } from 'react';
import gsap from "gsap";

const Cursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;

        window.addEventListener("mousemove", function (dets) {
            cursor.style.left = dets.x - 450 + "px";
            cursor.style.top = dets.y - 450 + "px";
        });

    }, []);

    return (
        <>
            <div ref={cursorRef} className="cursor-blur"></div>
        </>
    );
};

export default Cursor;
