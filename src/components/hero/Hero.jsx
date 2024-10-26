
import { motion } from "framer-motion";
import pdf from "../../assets/pdf.pdf";

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
};

const Hero = () => {
    return (
        <div className="flex flex-row items-center justify-between lg:mx-[10rem]  h-screen overflow-hidden">

            <div className="flex-1 flex justify-center lg:justify-start p-4">
                <motion.img
                    src="/hero22.png"
                    alt=""
                    className="lg:h-[30rem] lg:w-[20rem] object-cover"
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                />
            </div>
            <div className="flex-1 flex flex-col items-start p-4">
                <motion.h2 className="lg:text-2xl md:text-3xl text-xl text-orange-500 tracking-wider" variants={textVariants}>
                    GULSHAN YADAV
                </motion.h2>
                <motion.h1 className="lg:text-5xl md:text-6xl text-2xl text-gray-100" variants={textVariants}>
                    Web Developer and UI Developer
                </motion.h1>
                <motion.div className="lg:flex lg:flex-row md:flex md:flex-row flex flex-col gap-4 mt-6">
                    <a href={pdf} download={pdf}>
                        <motion.button
                            className="bg-transparent border-2 border-white rounded-lg py-2 px-4 text-white hover:bg-gray-800 hover:text-white transition duration-300"
                            variants={textVariants}
                        >
                            My Resume
                        </motion.button>
                    </a>
                    <a href="#Contact">
                        <motion.button
                            className="bg-transparent border-2 border-white rounded-lg py-2 px-4 text-white hover:bg-gray-800 hover:text-white transition duration-300"
                            variants={textVariants}
                        >
                            Contact me
                        </motion.button>
                    </a>

                </motion.div>
                <motion.img
                    src="./scroll.png"
                    alt=""
                    className="mt-6 w-12"
                    animate="scrollButton"
                    variants={textVariants}
                />
            </div>
        </div>
    );
};

export default Hero;
