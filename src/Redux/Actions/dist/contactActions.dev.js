"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addContacts = void 0;

var _actionTypes = require("../Constants/actionTypes");

var addContacts = function addContacts(contact) {
  return {
    type: _actionTypes.CREATE,
    payload: contact
  };
};

exports.addContacts = addContacts;