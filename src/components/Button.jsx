import React from 'react'

const Button = ({ onClick }) => (
  <button
    className="flex-center with-transition font-lg rounded-lg border border-gray-800 bg-black px-5 py-3 font-bold text-gray-100 hover:bg-yellow-600 focus:outline-double focus:ring-4 focus:ring-gray-800"
    onClick={() => onClick()}>
    Décoder
  </button>
)

export default Button
