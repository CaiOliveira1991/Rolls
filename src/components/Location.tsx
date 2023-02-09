import React from 'react'

import {motion}  from 'framer-motion'
import {Link} from 'react-router-dom'

import {BiMapPin} from 'react-icons/bi'

const Location = () => { 
 return (
    <>
      <motion.div className='flex-center '     
         whileHover={{ 
          scale: 1.2
      }}
      >
          <Link to='Map' className=''>
              <BiMapPin color={'white'}/>
          </Link>
      </motion.div>

    </>
  )
}

export default Location
