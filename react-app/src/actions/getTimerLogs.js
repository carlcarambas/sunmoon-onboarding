import TimerService from '../services/TimerService'
import { GET_TIMERLOGS } from '../constants/action-types'

// action creator with using thunk
export const getTimerLogs = () => async dispatch => { 
    try {
        const response = await TimerService.getAll()
        console.log(response.data);
        dispatch(setTimerLogs(response))
    } 
    catch (error) {
        if (error.response) {
            console.log(error.response.data)
        }
        else if (error.request) {
            console.log(error.request)
        }
        else {
            console.log(error.message)
        }
    }
    console.log('after load timer data')
}

// action creator without using thunk
export const setTimerLogs = (response) => {
    return {
        type: GET_TIMERLOGS,
        payload: response.data
    }
}