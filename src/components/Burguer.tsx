import React, {useState} from 'react'

import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

import {AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiOutlineClose} from 'react-icons/ai'

const Burguer = () => {
    const [ clickmenu , setClickmenu ] = useState (false);
    const [hover, setHover] = useState(false);
    return (
  
      <>
        <motion.div className='w-8 h-8 cursor-pointer flex justify-around flex-col z-999'
         onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
         onClick={() => setClickmenu (true)}
        >
          <div className={`h-1 bg-gray-200 rounded-full transform-origin-1 transition-all duration-400 ease-in-out ${hover ? 'w-5 bg-[#00c8ff]' : 'w-8' }`}/>
          <div className={`h-1 bg-gray-200 rounded-full transform-origin-1 transition-all duration-400 ease-in-out ${hover ? 'w-8  bg-[#00c8ff]' : 'w-5'}`}/>
          <div className={`h-1 bg-gray-200 rounded-full transform-origin-1 transition-all duration-400 ease-in-out ${hover ? 'w-5  bg-[#00c8ff]' : 'w-8'}`}/>
        </motion.div>
  
  {/* Container Menu */}
  
  {clickmenu && (
  
  
      <motion.div drag className='fixed top-0 left-0 w-1/4 min-w-72 h-auto bg-purple-600 rounded-3xl flex flex-col justify-between items-center z-9999'
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
  
          <div className='w-100 h-16 top-0 left-0 rounded-t-3xl	 bg-violet-700 flex justify-center items-center'>
            <motion.button className='w-10 h-10 rounded-full border-2 flex items-center justify-center cursor-pointer'
            onClick={() => setClickmenu (false)}
            whileHover= {{ rotate: 180, borderColor: 'white' }}
            transition={{ duration: 0.2 }}
            >
              <AiOutlineClose color={'white'} />
            </motion.button>
          </div>
  
          <header className='p-10 w-68/100 h-100 d-flex justify-center items-center z-999'>
            <ul className='w-100 h-50 flex flex-col justify-around items-center'>
  
              <motion.a className='w-full h-16 text-white text-center font-bold text-xl uppercase flex justify-center items-center rounded-lg z-999'
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
              <motion.a className='w-full h-16 text-white text-center font-bold text-xl uppercase flex justify-center items-center rounded-lg z-999'
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
              <motion.a className='w-full h-16 text-white text-center font-bold text-xl uppercase flex justify-center items-center rounded-lg z-999'
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
            <ul className='w-100 h-16 flex justify-around items-center border-t-solid border-t border-white'>
              <motion.a href='*' className='w-5 h-5 flex justify-around items-center'
                whileHover = {{
                  scale: 1.5,
                  textShadow: '0px 0px 8px #02b9f6'
                }}
              >
                <AiFillInstagram color={'white'}/>
              </motion.a>
              <motion.a href='*' className='w-5 h-5 flex justify-around items-center'
                whileHover = {{
                  scale: 1.5,
                  textShadow: '0px 0px 8px #02b9f6'
                }}
              >
                <AiFillFacebook color={'white'}/>
              </motion.a>
              <motion.a href='*' className='w-5 h-5 flex justify-around items-center'
                whileHover = {{
                  scale: 1.5,
                  textShadow: '0px 0px 8px #02b9f6'
                }}
              >
                <AiFillLinkedin color={'white'}/>
              </motion.a>
            </ul>
          </header>
  
        </motion.div>
  
        )}
      </>
  )
}


export default Burguer
