import { motion } from "framer-motion";
const variants = {
  open: {
    transition: {
      staggerChilren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.08,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};



const Links = () => {
  const items = ["Homepage", "Hero section", "Services", "About-us", "Footer", "Contact-us"];
  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1,  border:"1px solid orange", boxShadow: "3px 3px 25px orange"}}
          whileTap={{ scale: 0.95 }}
          className="p-2">
          

          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links