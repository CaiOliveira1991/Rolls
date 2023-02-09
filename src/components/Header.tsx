import React from 'react'

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import Burguer from './Burguer'
import Location from './Location'

import logo from '../assets/logo.png'

const Header = () => {
  return (
    <motion.header className=''
      initial={{ y: '-100vh'}}
      animate={{ y: 0}}
      transition={{ delay: 1}}
    >
      <Burguer />

      <motion.div className=''
        initial={{ y: '-100vh'}}
        animate={{ y: 0}}
        transition={{ delay: 1.2}}
      >
        <Link to='/' className=''>
          <motion.img src={logo} alt='logo'
             whileHover={{scale: 1.2}}
          />
        </Link>
      </motion.div>

      <Location />
    </motion.header>
  )
}

export default Header
