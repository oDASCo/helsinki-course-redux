import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {filterAnecdotes, getAllAnecdotes} from "../reducers/anecReducer";

const Filter = () => {
    const dispatch = useDispatch()

    const handleChange = (event) => {
        dispatch(getAllAnecdotes())
        dispatch(filterAnecdotes(event.target.value))
    }
    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
            <p>filter </p>
            <input onChange={handleChange} />
        </div>
    )
}

export default Filter
