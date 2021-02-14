import React from 'react';
import { useState, useEffect } from 'react';

import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

;
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import CardContent from '@material-ui/core/CardContent';

import Avatar from '@material-ui/core/Avatar';

import FlagIcon from '@material-ui/icons/Flag';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  avatar: {
    backgroundColor: '#FFCB77',
  },
}));



const userACM = [
    {
        type: "Milestone",
        marker: 20
    },
    {
        type: "Progress",
        marker: 2
    },
    {
        type: "Consistency",
        marker: 7
    }

]

const Achievements = () => {
    const classes = useStyles();

    const getText = (type, marker) => {
        switch(type){
            case 'Milestone': 
              return `Recorded ${marker} hours of productive time!`;
            case 'Progress': 
              return `Average improved by ${marker} hours per session!`; 
            case "Consistency": 
              return `Logged on for ${marker} days straight`;
          }
    }
     return  (
        <div>
            <div>
            {userACM.map((acm) => (
                <Card className={classes.root} variant="outlined">
                    <CardHeader
                    avatar={
                    <Avatar aria-label="Achievement" className={classes.avatar}>
                        <FlagIcon/>
                    </Avatar>
                    }
                    title= {acm.type}
                    />
                    <CardContent>
                        {getText(acm.type, acm.marker)}
                    </CardContent>
               </Card>
            ))}
            </div>

        </div>
    );
}

export default Achievements;