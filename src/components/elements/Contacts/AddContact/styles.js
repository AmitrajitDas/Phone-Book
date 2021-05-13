import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    
    root: {
        maxWidth: 1000,
        marginTop: '10rem',
    },

    form: {
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '50rem',
        },
     },

    button: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.main,
        '&:hover': {
            color: theme.palette.primary.main
          },
    }, 

}));