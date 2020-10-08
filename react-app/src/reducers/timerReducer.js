import { GET_TIMERLOGS, ADD_TIMER, UPDATE_TIMER } from '../constants/action-types'
import { start } from '../constants/log-types'



const initialState = {
    timer: {
        log_type: start,
        timestamp: ''
    },
    timerlogs: []
}

const timerReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TIMERLOGS:
            return {
                ...state,
                timerlogs: action.payload
            }
        case ADD_TIMER:
            return {
                ...state,
                timer: action.payload
            }
        case UPDATE_TIMER:
            return {
                ...state,
                timer: action.payload
            }
        default:
            return state
    }
}

export default timerReducer

