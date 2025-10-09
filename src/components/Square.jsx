import React from 'react'
import { FaTimes, FaRegCircle } from 'react-icons/fa'

// creating a square component that shows a value and handles clicks
function Square({ value, onClick }) {
  // choosing icon based on value
  const renderIcon = () => {
    if (value === 'x') return <FaTimes className='text-red-600' />
    if (value === 'o') return <FaRegCircle className='text-blue-600' />
    return null
  }

  return (
    <button
      onClick={onClick} // running the passed onClick function when clicked
      className='w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center text-4xl font-bold border border-gray-300 shadow-md hover:bg-blue-100 active:bg-blue-200 transition-colors duration-200 rounded-md'
    >
      {renderIcon()}
    </button>
  )
}

export default Square
