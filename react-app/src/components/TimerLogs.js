import React, { useState, useEffect } from 'react'

import { Button, Container, Table } from 'semantic-ui-react'

import { start, stop } from '../constants/log-types'

import TimerService from '../services/TimerService'

import { current_date } from '../utils/DateFormatter'

import DataTable from '../ui/DataTable'

import { connect } from 'react-redux'

import { getTimerLogs, setTimerLogs } from '../actions/getTimerLogs'
import { addTimer, updateTimer } from '../actions/saveTimer'


function TimerLogs(props) {
    const {timerlogs, timer, getTimerLogs} = props
    const tblheader = [
        'ID',
        'Timestamp',
        'Log Type',
        'Action'
    ]
    // const initTimer = {
    //     log_type: start,
    //     timestamp: ''
    // }

    // const [timer, setTimer] = useState(initTimer)
    // const [timerlogs, setTimerLogs] = useState([])

    useEffect(() => {
        // getTimerList()
        getTimerLogs() // with thunk
    }, [])

    // load timer list wihout using thunk
    // const getTimerList = async () => {
    //     try {
    //         const response = await TimerService.getAll()
    //         console.log(response.data);
    //         props.setTimerLogs(response)
    //         console.log(timerlogs)
    //     } 
    //     catch (error) {
    //         if (error.response) {
    //             console.log(error.response.data)
    //         }
    //         else if (error.request) {
    //             console.log(error.request)
    //         }
    //         else {
    //             console.log(error.message)
    //         }
    //     }
    //     console.log('after load timer data')
    // }

    // add and & update timer
    const saveTimer = async () => {
        if (timer.log_type === start) {
            // add timer
            const req_body = {
                ...timer,
                timestamp: current_date()
            }
            try {
                const response = await TimerService.add(req_body)
                //getTimerList()
                getTimerLogs() // with thunk
                props.addTimer({...req_body, log_type: stop})
                console.log(response.data)
            } 
            catch (error) {
                if (error.response) {
                    console.log(error.response.data)
                }
                else if (error.request) {
                    console.log(error.request)
                }
                else
                {
                    console.log(error.message)
                }
            }
            console.log('after save')
        }
        else {
            // update timer
            const params = {
                ...timer,
                log_type: start
            }
            const req_body = {
                ...timer,
                timestamp: current_date()
            }
            try {
                const response = await 
                TimerService.update(params.timestamp, params.log_type, req_body)
                // getTimerList()
                getTimerLogs() // with thunk
                props.updateTimer({...req_body, log_type: start})
                console.log(response.data)
            } 
            catch (error) {
                if (error.response) {
                    console.log(error.response.data)
                }
                else if (error.request) {
                    console.log(error.request)
                }
                else
                {
                    console.log(error.message)
                }
            }
            console.log('after update')
        }
        // console.log(logtype);
    }
    
    // const handleDeleteClick = id => () => {
    // }
    // delete timer
    const deleteTimer = async id => {
        // const timerlist = timerlogs.filter(timerlog => timerlog.id !== id)
        try {
            const response = await TimerService.remove(id)
            // getTimerList()
            getTimerLogs() // with thunk
            //setTimerLogs(timerlist)
            console.log(response.data)
        } 
        catch (error) {
            if (error.response) {
                console.log(error.response.data)
            }
            else if (error.request) {
                console.log(error.request)
            }
            else
            {
                console.log(error.message)
            }
        }
    }

    return (
        <Container>
            <center style={{ 'paddingTop': '20px' }}>
                <Button onClick={saveTimer}>{timer.log_type}</Button>
            </center>
            <DataTable small className='timer-table' header={tblheader} data={timerlogs} onDelete={deleteTimer} />
        </Container>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        timerlogs: state.timerlogs, 
        timer: state.timer
    }
}
// const mapDispatchToProps = {}
//     return {
//         onLoad: timerlogs => dispatch(getTimerLogs(timerlogs))
//     }
// }
const mapDispatchToProps = {
    getTimerLogs,
    // setTimerLogs, 
    addTimer, updateTimer
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerLogs)
