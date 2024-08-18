import React from 'react'
import "./skill.scss"
import {motion} from "framer-motion";

const Skill = () => {
    return (
        <section className='skill-container section' id='about'>
            <h1 className='h1'>My Skills in Software</h1>
            <div className="about_data md:flex md:flex-col ">
                <div className="about_info" >
                    <p className="about_desc">
                    Gulshan Kumar | MERN Stack <hr/>
                        I am a proficient MERN Stack Developer with expertise in MongoDB, Express.js, React.js, and Node.js. 
                        I specialize in building dynamic, responsive web applications. My passion for coding and attention 
                        to detail ensures the delivery of robust, scalable to meet client needs. </p>
                    <a href="https://app.luminpdf.com/viewer/65e84f6e780982105b2a6b14"> <motion.button className="text-sm" whileHover={{background:"white"}}>⏫DOWNLOAD CV</motion.button></a>
                </div>

                {/* development */}


                <div className="about_skills grid">
                    <div className="skills_data">
                        <div className="skills_titles ">
                            <h3 className='skills_name '>Frontend Developer</h3>
                            <span className='skills_number'>80%</span>
                        </div>

                        <div className="skills_bar" >
                            <span className="skills_percentage developer"></span>
                        </div>
                    </div>
                    <br/>

                    {/* ui/ux development */}
                    <div className="skills_data">
                        <div className="skills_titles">
                            <h3 className='skills_name'>Back-End Developer</h3>
                            <span className='skills_number'>95%</span>
                        </div>

                        <div className="skills_bar" >
                            <span className="skills_percentage design"></span>
                        </div>
                    </div>
                    <br />

                    {/* react developer */}
                    <div className="skills_data">
                        <div className="skills_titles">
                            <h3 className='skills_name'>Node Js</h3>
                            <span className='skills_number'>90%</span>
                        </div>

                        <div className="skills_bar" >
                            <span className="skills_percentage java"></span>
                        </div>
                    </div>
                    <br />

                    {/* react.js */}
                    <div className="skills_data">
                        <div className="skills_titles">
                            <h3 className='skills_name'>MongoDB</h3>
                            <span className='skills_number'>85%</span>
                        </div>

                        <div className="skills_bar" >
                            <span className="skills_percentage react"></span>
                        </div>
                    </div>
                    <br />
                    {/* MYSQL */}
                    <div className="skills_data">
                        <div className="skills_titles">
                            <h3 className='skills_name'>Mern Stack  Developer</h3>
                            <span className='skills_number'>90%</span>
                        </div>

                        <div className="skills_bar" >
                            <span className="skills_percentage sql"></span>
                        </div>
                    </div>
                    




                </div>
            </div>
        </section>
    )
}

export default Skill
