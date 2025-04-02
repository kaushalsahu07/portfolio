import React from 'react'
import '../index.css'
import { motion, AnimatePresence } from "framer-motion";
import { useScrollDirection } from './ui/AnimatePresence';

function Navbar() {
    const scrollDirection = useScrollDirection();

    return(
        <AnimatePresence>
            <motion.div 
                initial={{ opacity: 0, y: -100}}
                animate={{ 
                    opacity: 1, 
                    y: scrollDirection === "down" ? -100 : 0
                }}
                transition={{  
                    duration: 0.3,
                    ease: "easeInOut",
                }}
                className='fixed top-0 left-0 right-0 z-50'>
                <div className='grid justify-center mt-1 md:mt-3.5 rounded-xl'>
                    <nav className='nav flex justify-center items-center pl-3 pr-3 h-19 w-86 rounded-xl m-3.5 bg-[var(--color-second)]' role='navigation'>
                        <ul className='flex flex-wrap gap-6 text-white'>
                            <li><a href="#" >Home</a></li>
                            <li><a href="#about" >About</a></li>
                            <li><a href="#projects" >Projects</a></li>
                            <li><a href="#contact" >Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Navbar