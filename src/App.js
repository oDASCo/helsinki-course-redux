import React from 'react'
import CreateForm from "./components/CreateForm";
import Anecdotes from "./components/Anecdotes";

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Anecdotes/>
      <CreateForm/>
    </div>
  )
}

export default App
