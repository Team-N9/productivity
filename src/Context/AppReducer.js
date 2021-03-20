/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
    switch(action.type) {
        case 'GET_TASKS':
            return {
                ...state,
                loading: false,
                tasks: action.payload
            }
        case 'GET_TASK':
            return {
                ...state,
                loading: false,
                tasks: action.payload
            }
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter(task => task._id !== action.payload)
            }
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case 'TASK_ERROR':
            return {
                ...state,
                tasks: action.payload
            }
        case 'GET_TIMERS':
            return {
                ...state,
                loading: false,
                timers: action.payload
            }
        case 'ADD_TIMER':
            return {
                ...state,
                timers: [...state.timers, action.payload]
            }
        case 'TIMERS_ERROR':
            return {
                ...state,
                timers: action.payload
            }
        default:
            return state;
    }
}