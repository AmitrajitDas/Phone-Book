import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  button: {
    backgroundColor: theme.palette.secondary.main,
    color : theme.palette.primary.main,
    marginTop: '0.5rem',
    marginLeft : '5rem',
    '&:hover': {
            color: theme.palette.secondary.main
          },
  },
  

}));