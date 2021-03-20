import { makeStyles } from '@material-ui/core/styles';

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
        
        margin: 0
    }
}));

export { useStyles };
