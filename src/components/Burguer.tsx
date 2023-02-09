import React, {useState} from 'react'

import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

import {AiOutlineClose} from 'react-icons/ai'

const Burguer = () => {
    const [ clickmenu , setClickmenu ] = useState (false);
    return (
  
      <>
        <motion.div className=''
         onClick={() => setClickmenu (true)}
        >
          <div className=''/>
          <div className=''/>
          <div className=''/>
        </motion.div>
  
  {/* Container Menu */}
  
  {clickmenu && (
  
  
      <motion.div drag className=''
        dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        dragElastic={0.5}
        whileTap={{ cursor: "grabbing" }}
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          easeInOut: [0, 0.71, 0.2, 1.01]
       }}
       >
  
          <div className=''>
            <motion.button 
            onClick={() => setClickmenu (false)}
            whileHover= {{ rotate: 180, borderColor: 'white' }}
            transition={{ duration: 0.2 }}
            >
              <AiOutlineClose color={'white'} />
            </motion.button>
          </div>
  
          <header>
            <ul>
  
              <motion.a className=''
                onClick={() => setClickmenu (false)}
                whileHover = {{
                  scale: 1.5,
                  textShadow: '0px 0px 8px #02b9f6',
                  color: '#02b9f6',
                }}
                transition={{ 
                  type: 'spring',
                  stiffness: 300
               }}
              >
                <Link to='/'>Home</Link>
              </motion.a>
              <motion.a
                onClick={() => setClickmenu (false)}
                whileHover = {{
                  scale: 1.5,
                  textShadow: '0px 0px 8px #02b9f6',
                  color: '#02b9f6',
                }}
                transition={{ 
                  type: 'spring',
                  stiffness: 300
               }}
              >
                <Link to='Show'>ShowRoom</Link>
              </motion.a>
              <motion.a 
                onClick={() => setClickmenu (false)}
                whileHover = {{
                  scale: 1.5,
                  textShadow: '0px 0px 8px #02b9f6',
                  color: '#02b9f6',
                }}
                animate
                transition={{ 
                  type: 'spring',
                  stiffness: 300
               }}
              >
                <Link to='*'>Localização</Link>
              </motion.a>
              
            </ul>
          </header>
  
        </motion.div>
  
        )}
      </>
  )
}

export default Burguer
