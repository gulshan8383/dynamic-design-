import React from 'react'
import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import { motion } from "framer-motion"



const Navbar = () => {


  return (
    <div className='navbar'>
      {/* sidebar */}
      <Sidebar />
      <div className='wrapper'>
        <motion.span initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }} >
          Gulshan Yadav</motion.span>
        <div className='social'>
          <a href="https://www.linkedin.com/in/gulshan-yadav-30a980175/"><motion.img src="/youtube.png" alt="" width="25px" whileHover={{
            background: "white",
            color: "#111132",
            boxShadow: "3px 15px 30px #BBB7B7",
            borderRadius:"50%"
          }} /></a>
          <a href="https://github.com/gulshan8383"><motion.img src="/twitter.png" alt="" width="25px" whileHover={{
            background: "orange",
            color: "#111132",
            boxShadow: "3px 5px 40px #BBB7B7",
            borderRadius:"50%"
          }} /></a>
          <a href="https://www.facebook.com/yadav21672/"><motion.img src="/facebook.png" alt="" width="25px" whileHover={{
            background: "orange",
            color: "#111132",
            boxShadow: "3px 5px 40px #BBB7B7",
            borderRadius:"50%"
          }} /></a>
          <a href="https://www.instagram.com/gulshan_yadauvanshi/"><motion.img src="/instagram.png" alt="" width="25px" whileHover={{
            
            color: "#111132",
            boxShadow: "3px 5px 40px #BBB7B7",
            borderRadius:"90%"
          }} /></a>
        </div>
      </div>

    </div>
  )
}

export default Navbar