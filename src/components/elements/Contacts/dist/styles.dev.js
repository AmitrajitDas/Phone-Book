"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    table: {
      minWidth: 100,
      marginTop: '3rem'
    }
  };
});
exports.useStyles = useStyles;