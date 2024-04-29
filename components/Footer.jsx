import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black text-white flex justify-center w-100 items-center p-7 h-16 flex-col'>
      <span className='my-3'>Purple Transfer &copy; {new Date().getFullYear()}</span>
      <span className='my-3'>All Rights Reserved</span>
    </footer>
  )
}

export default Footer
