"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    navButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    },
    button: {
      backgroundColor: theme.palette.secondary.main,
      marginTop: '0.5rem',
      marginLeft: '5rem'
    }
  };
});
exports.useStyles = useStyles;