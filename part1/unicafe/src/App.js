import React, { useState } from 'react';


const Statistic = ({text, value}) => {
  return (
  <tr>
    <td>{text}</td><td>{value}</td>
    </tr>
  )
}


const Statistics = ({ good , neutral , bad }) => {

  const total = good+neutral+bad 
  const avg=((good-bad)/total)
  const netpos = good/total*100

  if( total > 0) {
    return (
    <table><tbody>
    
      <Statistic value={good} text='good' />
      <Statistic value={neutral} text='neutral' />
      <Statistic value={bad} text='bad' />
      <Statistic value={avg} text='avg' />
      <Statistic value={netpos+'%'} text='netpos' />    
    
    </tbody></table>

    )
  
  } else {
      return (
        <div>
          No feedback given
        </div>
      )
  
  }
}


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


const App = () => {
  
  const [feedback, setFeedback] = useState({
    good: 0, neutral: 0, bad: 0
  })


  const handleGoodClick = () => {
    setFeedback({...feedback, good: feedback.good + 1})
  }

  const handleNeutralClick = () => {
    setFeedback({...feedback, neutral: feedback.neutral + 1})
  }

  const handleBadClick = () => {
    setFeedback({...feedback, bad: feedback.bad + 1})
  }

  return (
    <div>
      <h1>give feedback</h1>
      
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <h1>stats</h1>

      <Statistics good={feedback.good} neutral={feedback.neutral} bad={feedback.bad} />
      
      
    </div>
  )
}

export default App