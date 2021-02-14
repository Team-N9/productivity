/* eslint-disable default-case */
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
    }
}