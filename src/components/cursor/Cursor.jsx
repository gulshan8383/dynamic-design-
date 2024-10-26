import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-9 h-9 rounded-full border border-white shadow-[0px_0px_25px_rgba(255,165,0,0.7)] pointer-events-none z-50 hidden md:block"
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: "tween",
        ease: "easeOut",
        duration: 0.1,
      }}
    />
  );
};

export default Cursor;
