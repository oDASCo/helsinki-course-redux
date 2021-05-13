import anecdotesService, {initialAnecdotes} from "../services/anecdotesService";

export const voteForAnecdote = (anec) => {
    return async dispatch => {
        const newAnec = await anecdotesService.voteForAnecdote(anec)
        dispatch({
            type: 'VOTE',
            data: newAnec,
        })
    }
}

export const createAnecdote = content => {
    return async dispatch => {
        const newAnec = await anecdotesService.createNew(content)
        dispatch({
            type: 'NEW_ANEC',
            data: newAnec,
        })
    }
}

export const filterAnecdotes = (value) => {
    console.log(value);
    return {
        type: 'FILTER',
        value
    }
}

export const getAllAnecdotes = (value) => {
    return {
        type: 'ALL'
    }
}

const compare = ( a, b ) => {
    if ( a.votes > b.votes ){
        return -1;
    }
    if ( a.votes < b.votes ){
        return 1;
    }
    return 0;
}



export const initializeAnecdotes = () => {
    return async dispatch => {
        const anecdotes = await anecdotesService.getAll()
        dispatch({
            type: 'INIT_ANECS',
            data: anecdotes,
        })
    }
}


const anecdoteReducer = (state = [], action) => {
    switch(action.type) {
      case 'VOTE': {
          console.log(action.data);
          const id = action.data.id
        const anecToChange = state.find(n => n.id === id)
        const changedAnec = {
          ...anecToChange,
          votes: anecToChange.votes + 1
        }
          const newState = state.map(item =>
            item.id !== id ? item : changedAnec
        )
        return newState.sort( compare )
      }
      case 'NEW_ANEC': {
        return state.concat(action.data)
      }
        case 'INIT_ANECS':
            return action.data.sort( compare )
        case 'FILTER': {
            return state.filter(item => item.content.includes(action.value))
        }
        case 'ALL': {
            return initialAnecdotes.sort( compare )
        }
      default:
        return state
    }
}

export default anecdoteReducer
