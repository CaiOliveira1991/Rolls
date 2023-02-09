import React from 'react'

import { motion } from 'framer-motion'

import Logo from '../assets/logo.png'

const Circle = () => {
  return (
    <>
      <motion.div className='' 
        initial={{ y: '100vh' }}
        animate={{  y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div className='' 
          animate={{ rotate: 720 }}
          transition={{ ease: "linear", duration: 2, repeat: Infinity }}
        >
          <motion.div className='' 
          animate={{ rotate: -1440 }}
          transition={{ ease: "linear", duration: 2, repeat: Infinity }}
        >
            
          </motion.div>
        </motion.div>
        <motion.div className='' >
              <img src={Logo} alt='logo'/>
            </motion.div>
      </motion.div>
    </>
  )
}

export default Circle
