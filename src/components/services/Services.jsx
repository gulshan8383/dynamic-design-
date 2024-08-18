import { useRef } from "react";
import "./services.scss"
import { motion, useInView} from "framer-motion";



const varitants ={
    initial:{
        x:-200,
        y:100,
        opacity:0,

    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
};
const Services = () => {
    const ref = useRef()
    const isInView = useInView(ref,{margin:"-100px"})


    return (
        <motion.div className="services" 
        variants={varitants} 
        initial="initial"
        //animate="animate" 
        // whileInView="animate"
        ref={ref}
        animate={isInView && "animate"}
        
        >
            <motion.div className="textcontainer">
                <p className="p">I focus on helping your brand grow

                    <br/> and move forward
                    </p>
                    <hr/>
            </motion.div>
             <motion.div className="titlecontainer" variants={varitants}>
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1>
                    <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
                    </h1>
                    </div>
                    <div className="title">
                        <h1>
                            <motion.b whileHover={{color:"orange"}}> For Your</motion.b>Websites.
                        </h1>
                        <a href="hero"><motion.button  whileHover={{background:"white", fontWeight:"bold", color:"orange"}}>WHAT WE DO?</motion.button></a>
                    </div>
            </motion.div> 
            <motion.div className="listcontainer">
                <motion.div className="box mt-2
                 hover:scale-110 transition duration-300 ease-in gap-3  rounded-xl 
                 hover:shadow-[0px_20px_20px_10px_gray] text-center"
                 whileHover={{background:"lightgrey", color:"black"}}>
                    <h2 className="font-semibold">FrontEnd</h2>
                    <p className="text-[14.5px]">
                    Frontend developers create user interfaces and experiences for websites and applications
                     using HTML, CSS, and JavaScript. They focus on responsiveness, performance, and design,
                      ensuring seamless interaction and aesthetic appeal across devices and platforms
                    </p>
                 <a href="https://www.linkedin.com/in/gulshan-yadav-30a980175/"> <motion.button className="servicego" whileHover={{background:"white", fontWeight:"bold", color:"black"}}>Go</motion.button></a>
                </motion.div>
                <motion.div className="box
                hover:scale-110 transition duration-300 ease-in gap-3  rounded-xl 
                hover:shadow-[0px_20px_20px_10px_gray] text-center"
                whileHover={{background:"lightgrey", color:"black"}}>
                    <h2 className="font-semibold">Mern-Stack </h2>
                    <p className="text-[14.5px]">
                    MERN backend developers specialize in creating server-side applications using MongoDB,
                     Express.js, React, and Node.js. They handle database management, server logic, and API 
                     integration, ensuring efficient, scalable, and secure backend operations.
                    </p>
                   <a href="https://sumitmehendiart.com/"> <motion.button whileHover={{background:"white", fontWeight:"bold", color:"black"}}>Go</motion.button></a>
                </motion.div>
                <motion.div className="box
                hover:scale-110 transition duration-300 ease-in gap-3  rounded-xl 
                hover:shadow-[0px_20px_20px_10px_gray] text-center"
                 whileHover={{background:"lightgrey", color:"black" }}>
                    <h2 className="font-semibold">Node.Js</h2>
                    <p className="text-[14.5px]">
                    Node.js developers build and maintain server-side applications using Node.js. 
                    They handle backend logic, database integration, and API development, ensuring high
                 performance and scalability. Proficient in JavaScript, they create efficient.
                    </p>
                    <a href="https://sumitmehendiart.com/"><motion.button whileHover={{background:"white", fontWeight:"bold", color:"black"}}>Go</motion.button></a>
                </motion.div>
                <motion.div className="box
                hover:scale-110 transition duration-300 ease-in gap-3  rounded-xl 
                hover:shadow-[0px_20px_20px_10px_gray] text-center"
                 whileHover={{background:"lightgrey", color:"black"}}>
                    <h2 className="font-semibold">Github</h2>
                    <p className="text-[14.5px]">
                    GitHub is a web-based hosting service for Git repositories, such as those used to store
                     Microsoft Learn content. For any project, GitHub hosts the main repository, from which
                      contributors can make copies for their own work.This article defines key terms.
                    
                    </p>
                    <a href="https://github.com/gulshan8383"><motion.button whileHover={{background:"white", fontWeight:"bold", color:"black"}}>Go</motion.button></a>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services
