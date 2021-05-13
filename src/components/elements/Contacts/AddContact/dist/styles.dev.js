"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      maxWidth: 1000,
      marginTop: '10rem'
    },
    form: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '50rem'
      }
    },
    button: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.secondary.main,
      '&:hover': {
        color: theme.palette.primary.main
      }
    }
  };
});
exports.useStyles = useStyles;