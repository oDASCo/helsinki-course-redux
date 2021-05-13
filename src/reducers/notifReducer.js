
const notifReducer = (state = '', action) => {
    switch(action.type) {
        case 'SET_NOTIF': {
            return action.notifMsg
        }
        case 'REMOVE_NOTIF': {
            return ''
        }
        default:
            return state
    }
}

export const notifChange = notifMsg => {
    return {
        type: 'SET_NOTIF',
        notifMsg,
    }
}

export const notifRemove = () => {
    return {
        type: 'REMOVE_NOTIF'
    }
}

export default notifReducer
