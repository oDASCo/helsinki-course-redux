import React from 'react'
import { useDispatch } from 'react-redux'
import {voteForAnecdote, createAnecdote} from "./../reducers/anecdoteReducer";
import {notifChange, notifRemove} from "../reducers/notifReducer";

const CreateForm = () => {
    const dispatch = useDispatch()

    const addAnec = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnecdote(content))

        dispatch(notifChange('Created!'))
        setTimeout(() => {
            dispatch(notifRemove())
        }, 5000)
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnec}>
                <div><input name="anecdote"/></div>
                <button type="submit">create</button>
            </form>
        </div>
    )
}

export default CreateForm
