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
    view: {
        height: '98vh',
        width: '98vw',
        background: '#red'
    },
    room: {
        width: '35vw',
        background: '#037ef3'
    },
    appScreen: {
        width: '65vw',
        background: 'grey'
    }
  }));

export default function Home() {
    const classes = useStyles();

    return (
        <Box className={classes.view} display='flex' flexDirection="row">
            <Box className={classes.room}>

            </Box>
            <Box className={classes.appScreen}>

            </Box>
        </Box>
    )
}
