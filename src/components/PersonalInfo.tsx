import React from 'react';  

import { motion } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import generateLinkOuts from '../utils/__links';

import ReactTypingEffect from 'react-typing-effect'; 

import avatar from '../assets/avatar.jpg';

function getExternalLinks(){
    return (
        generateLinkOuts().map((item) => {
            return (
                <li className="flex align-center">
                    <a href={item.link} rel="noopener noreferrer" target="_blank" className="flex align-center">
                        <span className="flex align-center">
                            <FontAwesomeIcon icon={item.icon} />
                        </span>
                        <span>{item.label}</span>
                        <span>
                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                        </span>
                    </a>
                </li>
            )
        })
    )
}

export default function PersonalInfo() {

    return (
        <div className="wrap__pi flex direction-column">
            <div className="flex1 shrink0">
                <h1> 
                    <motion.div animate={{ x: 0, opacity: 1 }} transition={{ duration: .6, ease: "easeInOut" }} initial={{ x: -100, opacity: 0 }}>
                        <span>Hello I'm,</span>
                        <br />
                        <span className="wrap__pi--animate">
                            <ReactTypingEffect text={["Kunal Panchal", "UI Developer"]} cursorClassName="fw-light animatingCursor" />
                        </span>
                    </motion.div> 
                </h1>
                <div>
                    <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: 30, opacity: 0 }} transition={{ duration: .9, delay: 2, ease: "easeIn" }} >
                        <p className="wrap__pi--description">
                            I'm currently working at <a href="https://www.media.net/" rel="noopener noreferrer" target="_blank">Media.net</a> in Mumbai, India.<br/> I mostly do the front-end development, and I love to Code and<br/> convert Designs in to functional elements. I like to learn more <br/>and more about programming.
                        </p>
                    </motion.div>
                </div> 
            </div>

            <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: 30, opacity: 0 }} transition={{ duration: 1, delay: 2, ease: "easeIn" }} >
                <div className="wrap__pi--profile flex shrink0">
                    <div className="flex">
                        <span className="avatar flex align-center justify-center">
                            <img src={avatar} alt="avatar" />
                        </span>
                    </div> 
                    <ul className="flex align-center">
                        { getExternalLinks() } 
                    </ul> 
                </div>
            </motion.div>
        </div>
    )
}