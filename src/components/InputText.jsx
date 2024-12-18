import React from 'react'

const InputText = ({ value, onChange }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    className="my-16 w-80 rounded-xl border-2 border-black px-5 py-2.5 text-base ring-yellow-400 focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"
  />
)

export default InputText
