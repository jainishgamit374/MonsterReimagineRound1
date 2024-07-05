import { motion } from "framer-motion";
const Partner = ({ url, direction }) => {

    return (
        <>
            <div className="flex w-full overflow-hidden">
                <motion.div
                    initial={{ x: direction === "left" ? "0" : "-100%" }}
                    animate={{ x: direction === "left" ? "-100%" : "0" }}
                    transition={{ duration: 90, ease: "linear", repeat: Infinity }}
                    className="flex flex-shrink-0 pr-20  items-center gap-20 py-7">
                    {url.map((url, i) => (
                        <img className='w-[15vw] md:w-[5.8vw]' key={i} src={url} />
                    ))}
                </motion.div>
                <motion.div
                    initial={{ x: direction === "left" ? "0" : "-100%" }}
                    animate={{ x: direction === "left" ? "-100%" : "0" }}
                    transition={{ duration: 90, ease: "linear", repeat: Infinity }}
                    className="flex flex-shrink-0 pr-20 items-center gap-20 py-7">
                    {url.map((url, i) => (
                        <img className='w-[15vw] md:w-[5.8vw]' key={i} src={url} />
                    ))}
                </motion.div>
            </div>
        </>
    )
}

export default Partner