import anecdotesService from "../services/anecdotesService";

export const voteForAnecdote = (id) => {
  return {
    type: 'VOTE',
    data: { id }
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

