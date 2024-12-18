import React, { useState } from 'react'
import InputText from '../src/components/InputText'
import Button from '../src/components/Button'
import './App.css'

const cipher = {
  a: 'ZgHsJApBbP',
  b: '185K6k2h34',
  c: 'cD7uV9B0EN',
  d: 'nU_miOdxoj',
  e: 'ESqetGMCsw'
}

const splitIntoPairs = str => {
  let result = []
  for (let i = 0; i < str.length; i += 2) {
    result.push(str.substring(i, i + 2))
  }
  return result
}

const decodeCode = input =>
  splitIntoPairs(input)
    .map(pair => cipher[pair[0]][pair[1]])
    .join('')

const App = () => {
  const [codeInput, setCodeInput] = useState('')
  const [result, setResult] = useState('')

  const onCodeInputChange = ({ target: { value } }) => {
    setCodeInput(value)
  }

  const decode = input => {
    setResult(decodeCode(input))
  }

  return (
    <div className="App flex h-full w-full flex-col items-center justify-center bg-cover">
      <div className="relative flex min-h-96 min-w-96 flex-col items-center justify-start rounded-xl border-2 border-neutral-900 bg-white bg-opacity-85">
        <InputText value={codeInput} onChange={onCodeInputChange} />
        <Button onClick={() => decode(codeInput)} />
        <div className="absolute bottom-0 p-12 text-3xl [text-shadow:_0_4px_8px_rgb(199_202_141_/_0.8)]">
          {result}
        </div>
      </div>
    </div>
  )
}

export default App
