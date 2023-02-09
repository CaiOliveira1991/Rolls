import React from "react"; 

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import RR from './assets/RR.png';

const Home =() => {
    return (
        <>
            <motion.section className=""
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5}}
            >

                <div className="">
                    <motion.h1 className="text-center"
                        initial={{ opacity: 0, x: '-100vh' }}
                        animate={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ delay: 0.5 }}
                    >
                        Rolls-Royce
                    </motion.h1>

                    <motion.button className="btn btn-primary"
                        initial={{ opacity: 0, x: '100vh' }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                        whileHover={{ scale: 1.1, textShadow: 'opx 0px  8px rgb(0,0,0' }}
                    >
                        <Link  to="Show" className="text-center">
                            Veja mais!
                        </Link>
                    </motion.button>
                    
                </div>

            </motion.section>
        </>
    );
}   

export default Home;