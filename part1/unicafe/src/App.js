import React, { useState } from 'react';

const Statistics = ({ value , text }) => {

  return (
    <div>
      <tr><td>{text}</td> <td>{value}</td></tr>
    </div>
  )
}
//bad={bad} neutral={neutral} netpos={netpos} avg={avg} allClicks={allClicks} />    
//
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll ] = useState(0)


  let avg=((good-bad)/allClicks)
  let netpos = good/allClicks

  const handleGoodClick = () => {
    setAll(allClicks + 1)
    setGood(good + 1 )
  }

  const handleNeutralClick = () => {
    setAll(allClicks + 1)
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setAll(allClicks + 1)
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <h1>stats</h1>
      
      <table><tbody>
      <Statistics value={good} text='good' />
      <Statistics value={neutral} text='neutral' />
      <Statistics value={bad} text='bad' />
      <Statistics value={avg} text='avg' />
      <Statistics value={netpos} text='positive' />
      </tbody></table>
    
    </div>
  )
}

export default App