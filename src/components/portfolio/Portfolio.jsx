import { useRef } from "react";
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


const items = [
    {
        id: 1,
        title: "Shopsee ECommerce",
        img: "/web1.jpg",
        desc: "Welcome to Shopsee Ecommerce, your one-stop destination for all things shopping. Discover a diverse range of products, from fashion to electronics, curated to cater to your every need. With seamless navigation and secure transactions, we're here to elevate your online shopping experience.",

    },
    {
        id: 2,
        title: "Sumit Mehendi",
        img: "/sumit1.jpg",
        desc: "Welcome to Sumit Mehendi Art, where intricate designs meet skilled craftsmanship. Explore our gallery of mesmerizing henna creations, blending tradition with contemporary flair. From weddings to festivals, each design tells a unique story. Join us in celebrating the artistry of mehendi.",

    },
    {
        id: 3,
        title: "Gulshan Portfolio",
        img: "/self.jpg",
        desc: "Welcome to Gulshan Portfolio, where innovation meets code. Dive into my world of programming prowess, where each line of code is crafted with precision and passion. Explore a showcase of projects demonstrating expertise in various languages and technologies.",

    },
    {
        id: 4,
        title: "Need 24/7 Driver",
        img: "/web4.jpg",
        desc: "Welcome to 'Need 24*7 Driver', your solution to temporary driving needs. Whether it's a last-minute trip or a long journey, we provide reliable drivers round the clock. Rest easy knowing your car is in capable hands. Contact us for professional, on-demand driving services, anytime.",

    },

];
//end array api


//this function array dada uses
const Single = ({ item }) => {
    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"]

    });
    const y = useTransform(scrollYProgress, [0, 1], [-300, 400])

    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imgcontainer" ref={ref}>
                        <img src={item.img} alt=""  style={{objectFit:"git"}}/>
                    </div>
                    <motion.div className="textcontainer mt-12  " style={{ y }}>
                        <h2 className="text-[15px] font-semibold">{item.title}</h2>
                        <p>{item.desc}</p>
                        <a href="https://github.com/gulshan8383"><motion.button whileHover={{background:"white", fontWeight:"bold",color:"black", fontFamily:"italic"}}>Infomation</motion.button></a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};



//allcodes are only scroll bar process
const Portfolio = () => {
    const ref = useRef()


    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Portfolio
