import React from 'react';
import { useState, useEffect, useRef } from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Timer = () => {
    const [time, setTimer] = useState(0)
    const [activity, setActivity] = React.useState('')
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
        if (activity.length == 0){
            
        } else {
            
        }
    }

    const handleYes = () => {
        clearInterval(countRef.current)
        setActivity('')
        setIsActive(false)
        setCanPause(false)
        setTimer(0)
    }

    const handleNo = ( ) => {

    }

    const formatTime = () => {
        const getSeconds = `0${(time % 60)}`.slice(-2)

        const minutes = `${Math.floor(time / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)

        const getHours = `0${Math.floor(time / 3600)}`.slice(-2)
    
        return `${getHours} : ${getMinutes} : ${getSeconds}`
    }

    return (
        <div className="Actitivity Timer">
            <h3>Timer</h3>
            <InputLabel id="activityName">Name</InputLabel>
            <Select labelId="activityName" 
                id="select" 
                value= {activity}
                onChange= {handleChange} >
                <MenuItem value="Study">Study</MenuItem>
                <MenuItem value="Personal Project">Personal Project</MenuItem>
            </Select>
            <div className='stopwatch-card'>
                <p>{formatTime(time)}</p> 
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
                <DialogTitle id="confirm-dialog-title">{"Save Activity"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="confirm-dialog-description">
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