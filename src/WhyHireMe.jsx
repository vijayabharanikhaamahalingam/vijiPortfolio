import React from 'react';
import './why.css';
import scholar from './images/scholarship.png';
import project from './images/project.png';
import codechef from './images/codechef.png';
import leetcode from './images/leetcode.png';
import communication from'./images/dialog.png';
import { motion } from 'framer-motion';

const WhyHireMe = () => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 40
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            transition={{
                delay: 0.2,
                duration: 0.5
            }}
            viewport={{
                once: true
            }}
        >
            <h2 className='heading1'>Why Hire Me?</h2>
            <div className="neww">
                <motion.div
                    initial={{
                        opacity: 0,
                        x: -120
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}
                    transition={{
                        delay: 0.2,
                        duration: 0.5
                    }}
                    viewport={{
                        once: true
                    }}
                    className='modiv'>
                    <div className="flex2">
                        <div className="box">
                            <img src={scholar} alt="" className='why_logo' />
                            <h4 className='mid_text'>2024</h4>
                            <p className='main_text_why'>GUVI MERN Certified</p>
                        </div>
                        <div className="box">
                            <img src={project} alt="" className='why_logo' />
                            <h4 className='mid_text'>2+</h4>
                            <p className='main_text_why'>Completed Projects</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        x: 120
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}
                    transition={{
                        delay: 0.2,
                        duration: 0.5
                    }}
                    viewport={{
                        once: true
                    }}
                    className='modiv'>
                    <div className="flex2">
                        <div className="box">
                            <img src={communication} alt="" className='why_logo' />
                            <h4 className='mid_text'>4★</h4>
                            <p className='main_text_why'>Communication skill</p>
                        </div>
                        <div className="box ">
                            <img src={leetcode} alt="" className='why_logo' />
                            <h4 className='mid_text'>4★</h4>
                            <p className='main_text_why'>Problem Solving</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default WhyHireMe;
