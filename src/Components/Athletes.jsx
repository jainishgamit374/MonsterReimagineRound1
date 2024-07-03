import React, { useState } from "react";
import { motion } from "framer-motion";
import Athlete from "./Athlete";

const Athletes = () => {
    const products = [
        {
            name: "Jonathan Amaral",
            description: "I just wants to take that trophy.",
            img: "https://img.redbull.com/images/w_3000/q_auto,f_auto/redbullcom/2021/11/29/vc7ejihdky2kiyyanf4f/jonathan-bgmi-gamer",
        },
        {
            name: "Ujjwal Chaurasiya",
            description: "From childhood, I had a love for gaming",
            img: "https://img.redbull.com/images/c_fill,g_auto,w_1000,h_667/q_auto,f_auto/redbullcom/2022/5/19/nvkcsnsuqgd6tz9zvh3n/techno-gamerz",
        },
        {
            name: "KL Rahul",
            description:
                "During a match I Have a Red Bull shortly  before going out to bat or field.  ",
            img: "https://th-i.thgim.com/public/incoming/pzxmk/article68066013.ece/alternates/LANDSCAPE_1200/AFP_34PC8BZ.jpg",
        },
        {
            name: "Tania Sachdev",
            description:
                "During a match I Have a Red Bull Energy Drink  when I'm training or having a match.",
            img: "https://images.livemint.com/img/2020/10/07/1140x641/tania_1602066281834_1602066286961.jpg",
        },
        {
            name: "Lakshya Sen",
            description: "I ever just loved to play Badminton.",
            img: "https://img.redbull.com/images/c_crop,x_0,y_0,h_2400,w_1440/c_fill,w_850,h_1309/q_auto,f_auto/redbullcom/2023/5/29/rlpn87gnskkl1yqdkm4r/lakshya-sen",
        },
    ];

    const [pos, setPos] = useState(0);
    const mover = (val) => {
        setPos(val * 40);
    };

    return (
        <div className="w-full">
            <h1 className='monument text-center pt-20 text-7xl '>Athletes</h1>
            <p className='text-center text-sm pb-20 monument'>A Supportive Team</p>
            <div className="relative pb-20">
                {products.map((item, i) => (
                    <Athlete mover={mover} data={item} key={i} id={i} />
                ))}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <motion.div
                        initial={{ y: pos, x: "-50%" }}
                        animate={{ y: pos + `vh` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                        className="window rounded-3xl absolute w-[28vw] top-3  h-[38vh] bg-blue-300 left-[50%]  overflow-hidden">

                        {products.map((v, i) => (
                            <motion.div
                                key={i}
                                animate={{ y: -pos + `vh` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
                                className="w-[28vw] h-[40vh] bg-orange-400">
                                <img className="w-full h-full object-cover object-top" src={v.img} alt="" />
                            </motion.div>
                        ))}

                    </motion.div>
                </div>
            </div >
        </div >
    );
};

export default Athletes;
