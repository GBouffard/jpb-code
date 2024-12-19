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

const invertedCipher = Object.keys(cipher).reduce((obj, key) => {
  obj[cipher[key]] = key
  return obj
}, {})

const splitIntoPairs = str => {
  let result = []
  for (let i = 0; i < str.length; i += 2) {
    result.push(str.substring(i, i + 2))
  }
  return result
}

const invertedKeys = Object.keys(invertedCipher)
const encodeCode = input =>
  [...input]
    .map(letter => {
      const letters = invertedKeys.find(element => element.indexOf(letter) > -1)
      return invertedCipher[letters] + letters.indexOf(letter)
    })
    .join('')

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

  const encode = input => {
    setResult(encodeCode(input))
  }

  const decode = input => {
    setResult(decodeCode(input))
  }

  return (
    <div className="App flex h-full w-full flex-col items-center justify-center bg-cover">
      <div className="relative flex min-h-96 min-w-96 flex-col items-center justify-start rounded-xl border-2 border-neutral-900 bg-white bg-opacity-85">
        <InputText value={codeInput} onChange={onCodeInputChange} />
        <div>
          <Button onClick={() => encode(codeInput)} classname="hover:bg-red-900 bg-red-700">
            Encoder
          </Button>
          <Button onClick={() => decode(codeInput)} classname="hover:bg-black bg-neutral-700">
            Décoder
          </Button>
        </div>
        <div className="absolute bottom-0 p-12 text-3xl [text-shadow:_0_4px_8px_rgb(199_202_141_/_0.8)]">
          {result}
        </div>
      </div>
    </div>
  )
}

export default App
