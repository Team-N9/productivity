import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = {
    recipes: [],
    recipe: {},
    error: null,
    loading: true
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    async function getTasks() {
        try {
            const res = await axios.get('/api/tasks');

            dispatch({
                type: 'GET_TASKS',
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: 'TASK_ERROR',
                payload: err.response.data.error
            })
        }
    }

    async function getTask(id) {
        try {
            const res = await axios.get(`/api/tasks/${id}`);

            dispatch({
                type: 'GET_TASK',
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: 'TASK_ERROR',
                payload: err.response.data.error
            })
        }
    }

    async function deleteTask(id) {
        try {
            await axios.delete(`/api/tasks/${id}`);

            dispatch({
                type: 'DELETE_TASK',
                payload: id
            })
        } catch (err) {
            dispatch({
                type: 'TASK_ERROR',
                payload: err.response.data.error
            })
        }
    }

    async function addTask(task) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/recipes', task, config);

            dispatch({
                type: 'ADD_TASK',
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: 'TASK_ERROR',
                payload: err.response.data.error
            })
        }
    }

    return (<GlobalContext.Provider value = {{
        tasks: state.tasks,
        task: state.task,
        error: state.error,
        loading: state.loading,
        getTasks,
        getTask,
        deleteTask,
        addTask,
    }}>
        {children}
    </GlobalContext.Provider>)
}