import React, { useState } from 'react'



const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [top, setTop] = useState(0)


  function randomAnecdote() {
    const index = Math.floor(Math.random() * anecdotes.length);
    setSelected(index)
  }

  const upvote = (val) => {
    const copy = [ ...votes ]
    copy[val] += 1
    setVotes(copy)
    setTop(copy.indexOf(Math.max(...copy)))
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]} <br />
      This has {votes[selected]} votes <br />
      
      <Button handleClick={randomAnecdote} text='next'/>
      <Button handleClick={()=>upvote(selected)} text='vote' />
      
      <h1>Anecdote Top Upvoted</h1>
      {anecdotes[top]} <br />
      This has {votes[top]} votes
      

    </div>
  )
}

export default App