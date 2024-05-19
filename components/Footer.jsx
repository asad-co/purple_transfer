import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-purple-1000 text-white flex justify-center w-100 items-center pt-7  flex-col'>
      <span className='my-3'>Purple Transfer &copy; {new Date().getFullYear()}</span>
      <span className='my-3'>All Rights Reserved</span>
    </footer>
  )
}

export default Footer
