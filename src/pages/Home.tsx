import React from "react"; 

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import RR from '../assets/2022.jpg';

const Home =() => {
    return (
        <>  
            <motion.section className="home flex justify-center items-center bg-cover bg-center bg-no-repeat color-white flex-center overflow-hidden z-minus-3 md:bg-center md:bg-35 "
                style={{ backgroundImage: `url(${RR})` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5}}
            >

                <div className="mt-28 w-100 h-2/3 flex justify-center flex-col items-center">
                    <motion.h1 className="w-auto h-28 text-8xl text-white font-light md:h-250"
                        initial={{ opacity: 0, x: '-100vh' }}
                        animate={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        Rolls-Royce
                    </motion.h1>

                    <motion.button className="w-52 h-14 cursor-pointer text-black border border-black bg-white rounded-3xl flex items-center justify-center hover:bg-teal-300"
                        initial={{ opacity: 0, x: '100vh' }}
                        animate={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.1, textShadow: 'opx 0px  8px rgb(0,0,0' }}
                    >
                        <Link  to="Show" className="w-full h-full text-base font-normal flex items-center justify-center text-uppercase overflow-hidden">
                            Veja mais!
                        </Link>
                    </motion.button>
                    
                </div>

            </motion.section>
        </>
    );
}   

export default Home;