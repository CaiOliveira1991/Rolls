import React from 'react'

import { motion } from 'framer-motion'

import Logo from '../assets/logo.png'

const Circle = () => {
  return (
    <>
      <motion.div className='mb-1 fixed bottom-0 w-100 h-32 flex justify-center items-center' 
        initial={{ y: '100vh' }}
        animate={{  y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div className='w-24 h-24 rounded-full border-t border-solid border-t-white flex justify-center items-center' 
          animate={{ rotate: 720 }}
          transition={{ ease: "linear", duration: 2, repeat: Infinity }}
        >
          <motion.div className='w-20 h-20 rounded-full border-b border-solid border-b-white items-center' 
          animate={{ rotate: -1440 }}
          transition={{ ease: "linear", duration: 2, repeat: Infinity }}
        >
            
          </motion.div>
        </motion.div>
        <motion.div className='absolute w-14 invert' >
              <img src={Logo} alt='logo'/>
            </motion.div>
      </motion.div>
    </>
  )
}

export default Circle
