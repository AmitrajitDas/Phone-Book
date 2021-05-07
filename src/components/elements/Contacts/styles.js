import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 100,
  },

  actions: {
    opacity : '0',
    '&:hover' : {
      opacity : '1',
    }
  }
  

}));