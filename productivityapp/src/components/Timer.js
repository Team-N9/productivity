import React from 'react';
import { useState,  useRef } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    timer_container: {
        backgroundColor: '#EEEEFF',
        margin: '0 auto',
        width: '500px',
        height: '500px',
        position: 'relative',
        borderRadius: '50%',
      },
    h3: {
        textAlign: 'center',
        paddingTop: '8px',
        letterSpacing: '1.2px',
        fontWeight: 500,
      },
    timer_card: {
        position: 'absolute',
        textAlign: 'center',
        backgroundColor: 'white',
        width: '325px',
        height: '130px',
        top: '110px',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
  }));
  

const Timer = () => {
    const classes = useStyles();
    const [timer, setTimer] = useState(0)
    const [activity, setActivity] = React.useState('Study')
    const [isActive, setIsActive] = useState(false)
    const [canPause, setCanPause] = useState(false)
    const [isComplete, setIsComplete] = useState(false)
    const countRef = useRef(null)

    const handleChange = (event) => {
        setActivity(event.target.value);
      };

    const handleStart = () => {
        setIsActive(true)
        setCanPause(true)
        countRef.current = setInterval(() => {
            setTimer((time) => time + 1)
        }, 1000)
    }

    const handlePause = () => {
        clearInterval(countRef.current)
        setCanPause(false)
    }

    const handleResume = () => {
        setCanPause(true)
        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
    }

    const handleComplete = () => {
        handlePause()
        setIsComplete(true)
    }

    const handleYes = () => {
        setIsComplete(false)
        
        clearInterval(countRef.current)
        setActivity('Study')
        setIsActive(false)
        setCanPause(false)
        setTimer(0)
    }

    const handleNo = ( ) => {
        setIsComplete(false)
    }

    const formatTime = () => {
        const getSeconds = `0${(timer % 60)}`.slice(-2)

        const minutes = `${Math.floor(timer / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)

        const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)
    
        return `${getHours} : ${getMinutes} : ${getSeconds}`
    }

    return (
        <div className= {classes.timer_container}>
            <h3 className={classes.h3}>Timer</h3>
            <InputLabel id="activityName">Name</InputLabel>
            <Select labelId="activityName" 
                id="select" 
                value= {activity}
                onChange= {handleChange} >
                <MenuItem value="Study">Study</MenuItem>
                <MenuItem value="Personal Project">Personal Project</MenuItem>
                <MenuItem value="Misc">Misc</MenuItem>
            </Select>
            <div className={classes.timer_card}>
                <p>{formatTime(timer)}</p> 
                <div className='Buttons'>
                    {!isActive && !canPause ?
                        <Button onClick={handleStart}>Start</Button>
                        : (
                            canPause ? <Button onClick={handlePause}>Pause</Button> :
                            <Button onClick={handleResume}>Resume</Button>
                        )
                    }
                <Button onClick={handleComplete}>Complete</Button>
                </div>
            </div>
            <Dialog
                open={isComplete}
                aria-labelledby="confirm-dialog-title"
                aria-describedby="confirm-dialog-description"
            >
                <DialogTitle id="confirm-dialog-title"> Save Activity </DialogTitle>
                <DialogContent>
                <DialogContentText id="confirm-dialog-description">
                    Activity: {activity}, Duration: {formatTime(timer)} {"\n"}
                   Do you want to save this activity? 
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleYes} color="primary">
                    Yes!
                </Button>
                <Button onClick={handleNo} color="primary" autoFocus>
                    No, Continue activity
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
 
export default Timer;