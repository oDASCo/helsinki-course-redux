import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {voteForAnecdote, createAnecdote} from "./../reducers/anecReducer";
import {notifChange, notifRemove} from "../reducers/notifReducer";

const Anecdotes = () => {
    const anecdotes = useSelector(state => {
        return state.anecdotes
    })

    const dispatch = useDispatch()

    const vote = (anec) => {
        dispatch(voteForAnecdote(anec))
        dispatch(notifChange('Voted!'))
        setTimeout(() => {
            dispatch(notifRemove())
        }, 5000)
    }

    return (
        <div>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Anecdotes
