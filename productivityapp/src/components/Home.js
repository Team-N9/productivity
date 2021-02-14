import React, { useEffect, useState, useContext } from 'react';
import Typography from "@material-ui/core/Typography";
import { Box, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Timer from './Timer';
import { GlobalContext } from '../Context/GlobalState';
import { useTransition, animated } from 'react-spring';
import Achievement from './Achievement';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(11),
      height: theme.spacing(11),
      marginLeft: '25%'
    },
    view: {
        height: '100vh',
        background: '#227c9d',
        margin: 0
    },
    avBox: {
        paddingLeft: '3rem',
        paddingTop: '2rem'
    },
    todoBox: {
        
    },
    timerBox: {
        margin: 'auto',
        
    },
    achBox: {
        paddingRight: '3rem',
        paddingTop: '2rem'
    },
    userName: {
        fontSize: '2rem',
        paddingBottom: '2rem'
    },
    userIcon: {
        margin: 'auto'
    },
    todo: {
        color: '#ededed'
    }
  }));

export default function Home() {
    const classes = useStyles();
    const [todos, setTodos] = useState([]);
    const [showTimer, setShowTimer] = useState(false);

    const timerTransitions = useTransition(showTimer, null, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(0%)' }
    })

    useEffect(() => {
        setShowTimer(true);
    }, [])

    function addTodo(todo) {
        // adds new todo to beginning of todos array
        setTodos([todo, ...todos]);
      }
    
    function toggleComplete(id) {
        setTodos(
            todos.map(todo => {
            if (todo.id === id) {
                return {
                ...todo,
                completed: !todo.completed
                };
            }
            return todo;
            })
        );
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return (
        <Box className={classes.view} display='flex' flexDirection="row" justifyContent="space-between" >
            <Box display='flex' flexDirection="column">
                <Box className={classes.avBox}>
                    <p class={classes.userName}>Aries Dimaranan</p>
                    <Avatar alt="Place Holder" className={classes.large} src="https://avatars.githubusercontent.com/u/17509638?s=460&u=61d58901ecdd678f84dc21a38a6d7cdebdef2ad3&v=4" />
                </Box>
                <Box className={classes.avBox}>
                    <Typography style={{ padding: 16 }} variant="h3">
                        Todo List
                    </Typography>
                    <TodoForm addTodo={addTodo} />
                    <TodoList
                        className={classes.todo}
                        todos={todos}
                        removeTodo={removeTodo}
                        toggleComplete={toggleComplete}
                    />
                </Box>
            </Box>
            <Box display="flex" alignItems="center" className={classes.timerBox}>
                <Timer />
            </Box>
            <Box className={classes.achBox}>
                <Achievement />
            </Box>
        </Box>
    )
}
