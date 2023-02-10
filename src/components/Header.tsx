import React from 'react'

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import Burguer from './Burguer'
import Location from './Location'

import logo from '../assets/logo.png'

const Header = () => {
  return (
    <motion.header className='fixed w-100 h-16 flex justify-center items-center z-999'
      initial={{ y: '-100vh'}}
      animate={{ y: 0}}
      transition={{ delay: 1}}
    >

      <motion.div className='w-11/12 max-w-5xl h-100 border-b-2 border-white flex justify-between items-center' 
        initial={{ y: '-100vh'}}
        animate={{ y: 0}}
        transition={{ delay: 1.2}}
      >

        <Burguer />

        <Link to='/' className='w-14 h-14 invert'>
          <motion.img src={logo} alt='logo'
             whileHover={{scale: 1.2}}
          />
        </Link>

        <Location />

      </motion.div>

    </motion.header>
  )
}

export default Header
