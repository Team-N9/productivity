import React from 'react';
import { Box, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Todo from './Todo';

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
    },
    userCol: {
        background: '#037ef3',
        
    },
    view: {
        height: '98vh',
        background: '#037ef3'
    }
  }));

export default function Home() {
    const classes = useStyles();

    return (
        <Box className={classes.view} display='flex' flexDirection="row" justifyContent="space-between" >
            <Box  display='flex' flexDirection="column" justifyContent="space-evenly">
                <Box>
                    <p>User Placeholder</p>
                    <Avatar alt="Place Holder" className={classes.large} src="https://avatars.githubusercontent.com/u/17509638?s=460&u=61d58901ecdd678f84dc21a38a6d7cdebdef2ad3&v=4" />
                </Box>
                <Box>
                    <Todo />
                </Box>
            </Box>
            <Box>
                Second column
            </Box>
            <Box>
                Third column
            </Box>
        </Box>
    )
}
