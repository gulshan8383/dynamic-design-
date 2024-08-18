import "./hero.scss";
import { motion } from "framer-motion";
import pdf from "../../assets/pdf.pdf"

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
        }
    }
};
const sliderVariants = {
    initial: {
        x: 0,

    },
    animate: {
        x: "-100%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 10,


        },
    },

};




const Hero = () => {
    return (
        <div className="Hero">
            <div className="wrappers">
                <motion.div className="textContainer"
                    variants={textVariants}
                    initial="initial"
                    animate="animate">
                    <motion.h2 className="h2" variants={textVariants}>GULSHAN YADAV</motion.h2>
                    <motion.h1 className="h1" variants={textVariants}>Web Developer and UI Developer</motion.h1>
                   <motion.div className="button" variants={textVariants}>
                   <a href={pdf} download={pdf}><motion.button variants={textVariants} 
                        whileHover={{
                            background:"white",
                            color: "#111132",
                             boxShadow: "3px 5px 40px #BBB7B7",
                        }}>
                        My Resume 
                        </motion.button>
                        </a>
                        <a href="#Contact"><motion.button variants={textVariants}
                        whileHover={{
                            background:"white",
                            color: "#111132",
                             boxShadow: "3px 5px 40px #BBB7B7",
                        }}
                        >Contact me
                        </motion.button>
                        </a>
                    </motion.div>
                    <motion.img src="./scroll.png" animate="scrollButton" alt="" className="img" variants={textVariants} />
                </motion.div>
            </div>
            <motion.div className="slidingtextcontainer" variants={sliderVariants} initial="initial" animate="animate">
                Websites Creator and Developer.
            </motion.div>
            <div className="imageContainer" >
                <motion.img src="/hero22.png" alt=""  variants={textVariants} className="md:h-[80%]"/>
            </div>
        </div>
    )
}

export default Hero