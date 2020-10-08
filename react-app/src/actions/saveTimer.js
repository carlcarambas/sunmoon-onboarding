import { ADD_TIMER, UPDATE_TIMER } from '../constants/action-types'


// action creator without using thunk
export const addTimer = (response) => {
    return {
        type: ADD_TIMER,
        payload: response
    }
}

export const updateTimer = (response) => {
    return {
        type: UPDATE_TIMER,
        payload: response
    }
}

