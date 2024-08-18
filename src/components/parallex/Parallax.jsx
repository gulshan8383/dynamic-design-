import { useRef } from "react";
import "./parallex.scss"
import { motion, useScroll, useTransform } from "framer-motion";
import Skill from "../skillbar/Skill";
import Carasoul from "../carasoul/Carasoul";

const Parallax = ({ type }) => {

    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset:["start start", "end start"]
    });
    const ytext= useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
    const ybg = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
    
    return (
        <div className='parallax'
        ref={ref}
            style={{
                background:
                    type === "services"
                        ? "linear-gradient(180deg, #0c0c1d, #111132)"
                        : "linear-gradient(180deg, #111132, #505064)",
            }}
        >
            <motion.h1 style={{ y: ytext}}>
            {type === "services" ? <Skill/> : <Carasoul/>}</motion.h1>
            <motion.div  className="mountains" ></motion.div>
            <motion.div  className="planets" style={{
                y: ybg,
                backgroundImage:`url(${type ==="services" ? "planets.png" : "sun.png"
                 })`,
            }}
            ></motion.div>
            <motion.div style={{ x: ybg}} className="stars"></motion.div>


        </div>
    )
}

export default Parallax