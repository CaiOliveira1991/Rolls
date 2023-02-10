import React from 'react'

import {motion}  from 'framer-motion'
import {Link} from 'react-router-dom'

import {BiMapPin} from 'react-icons/bi'

const Location = () => { 
 return (
    <>
      <motion.div className='flex items-center justify-center text-center cursor-pointer h-14 w-14 z-99'     
         whileHover={{ 
          scale: 1.2
      }}
      >
          <Link to='Map' className='w-8 h-8 rounded-full z-999'>
              <BiMapPin color={'white'}/>
          </Link>
          <Link to='Map' className="absolute h-10 w-60 flex items-center justify-center text-center text-xs uppercase text-white font-bold opacity-0 transition-all duration-400 ease-in-out transform -translate-x-20 hover:opacity-100 hover:translate-x-30  z-9999">revendedor</Link>
      </motion.div>

    </>
  )
}

export default Location
