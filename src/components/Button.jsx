import React from 'react'

const Button = ({ onClick, classname, children }) => (
  <button
    className={`flex-center font-lg mx-4 rounded-lg border border-gray-800 px-5 py-3 font-bold text-gray-100 transition duration-300 focus:outline-double focus:ring-4 focus:ring-gray-800 ${classname}`}
    onClick={() => onClick()}>
    {children}
  </button>
)

export default Button
