import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'
const getId = () => (100000 * Math.random()).toFixed(0)
export let initialAnecdotes = [];

const getAll = async () => {
    const response = await axios.get(baseUrl)
    initialAnecdotes = response.data
    return response.data
}

const createNew = async (content) => {
    const object = { content, votes: 0, id: getId() }
    const response = await axios.post(baseUrl, object)
    return response.data
}

const voteForAnecdote = async (anec) => {
    const object = { votes: anec.votes + 1, content: anec.content }
    const response = await axios.put(baseUrl + '/' + anec.id, object)
    return response.data
}

export default { getAll, createNew, voteForAnecdote }
