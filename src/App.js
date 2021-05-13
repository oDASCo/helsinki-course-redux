import React, {useEffect} from 'react'
import CreateForm from "./components/CreateForm";
import Anecdotes from "./components/Anecdotes";
import Notification from "./components/Notification";
import Filter from "./components/Filter";
import {useDispatch} from "react-redux";
import {initializeAnecdotes} from "./reducers/anecReducer";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializeAnecdotes())
    },[dispatch])

    return (
    <div>
        <Notification/>
      <h2>Anecdotes</h2>
        <Filter/>
      <Anecdotes/>
      <CreateForm/>
    </div>
  )
}

export default App
