import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const variants = {
    initial: {
        x: -200,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const Services = () => {
    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <motion.div
            className="services bg-gradient-to-b from-gray-900 to-gray-800  flex flex-col justify-between p-4"
            variants={variants}
            initial="initial"
            animate={isInView && "animate"}
            ref={ref}
        >
            <motion.div className="textcontainer flex justify-end items-center gap-5 p-4 text-right sm:text-center">
                <p className="text-gray-400 font-light text-base">
                    I focus on helping your brand grow and move forward
                </p>
                <hr className="border-gray-500 w-72" />
            </motion.div>

            <motion.div className="titlecontainer flex flex-col items-center gap-5 pb-5 text-center">
                <div className="title flex items-center  gap-4 sm:flex-col sm:text-center">
                    <img src="/people.webp" alt="" className="w-40 h-14 rounded-full object-cover" />
                    <h1 className="text-5xl font-bold">
                        <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
                    </h1>
                </div>
                <div className="title flex  flex-row items-center lg:gap-4">
                    <h1 className="text-5xl font-bold">
                        <motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Websites.
                    </h1>
                    <a href="#hero">
                        <motion.button
                            whileHover={{ background: "white", fontWeight: "bold", color: "orange" }}
                            className="w-40 h-16 bg-orange-500 rounded-full text-lg"
                        >
                            WHAT WE DO?
                        </motion.button>
                    </a>
                </div>
            </motion.div>

            <motion.div className=" lg:grid lg:grid-cols-4 lg:grid-row-1 grid grid-cols-1 grid-row-4 lg:gap-x-10  gap-y-10  mx-auto">
                {[
                    {
                        title: "FrontEnd",
                        description:
                            "Frontend developers create user interfaces and experiences for websites and applications using HTML, CSS, and JavaScript. They focus on responsiveness, performance, and design, ensuring seamless interaction and aesthetic appeal across devices and platforms.",
                        link: "https://www.linkedin.com/in/gulshan-yadav-30a980175/",
                    },
                    {
                        title: "MERN-Stack",
                        description:
                            "MERN backend developers specialize in creating server-side applications using MongoDB, Express.js, React, and Node.js. They handle database management, server logic, and API integration, ensuring efficient, scalable, and secure backend operations.",
                        link: "https://sumitmehendiart.com/",
                    },
                    {
                        title: "Node.Js",
                        description:
                            "Node.js developers build and maintain server-side applications using Node.js. They handle backend logic, database integration, and API development, ensuring high performance and scalability.",
                        link: "https://sumitmehendiart.com/",
                    },
                    {
                        title: "Github",
                        description:
                            "GitHub is a web-based hosting service for Git repositories, such as those used to store Microsoft Learn content. For any project, GitHub hosts the main repository, from which contributors can make copies for their own work.",
                        link: "https://github.com/gulshan8383",
                    },
                ].map((service, index) => (
                    <motion.div
                        key={index}
                        className="box p-5 rounded-xl shadow-[0px_0px_7px_3px_#e2e8f0] flex justify-between flex-col transition-transform transform hover:scale-105 w-[18rem] text-center bg-gray-800 text-white"
                        whileHover={{ background: "lightgrey", color: "black" }}
                    >
                        <h2 className="font-semibold text-2xl">{service.title}</h2>
                        <p className="text-sm mt-3 mb-4">{service.description}</p>
                        <a href={service.link}>
                            <motion.button
                                className="servicego px-4 py-2 bg-orange-500 rounded-md"
                                whileHover={{ background: "white", fontWeight: "bold", color: "black" }}
                            >
                                Go
                            </motion.button>
                        </a>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Services;
