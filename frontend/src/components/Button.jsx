import React from 'react'

export default function Button({
    children,
    type = 'button',
    bgColor = '',
    textColor = 'text-white',
    className = '',
    ...props

}) {
  return (
    <button className={`px-5 py-2 rounded-md font-semibold border-2 border-green-500 text-green-400 transition-all duration-300 hover:bg-green-500 hover:text-white dark:text-white ${bgColor} ${textColor} ${className}`} {...props}>
        {children}
    </button>
  )
}