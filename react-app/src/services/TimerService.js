import http from '../http-common'

const getAll = () => {
    return http.get('/logs')
}

const add = request_body => {
    return http.post('/logs', request_body)
}

const update = (timestamp, log_type, request_body) => {
    return http.put(`/logs/${timestamp}/${log_type}`, request_body)
}

const remove = id => {
    return http.delete(`/logs/${id}`)   
}
 

export default {
    getAll, add, update, remove
}


