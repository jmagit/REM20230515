'use strict';

var utils = require('../utils/writer.js');
var Autenticacin = require('../service/AutenticacinService');

module.exports.authGET = function authGET (req, res, next) {
  Autenticacin.authGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.loginOPTIONS = function loginOPTIONS (req, res, next) {
  Autenticacin.loginOPTIONS()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.loginPOST = function loginPOST (req, res, next, body, cookie) {
  Autenticacin.loginPOST(body, cookie)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.loginPOST = function loginPOST (req, res, next, body, cookie) {
  Autenticacin.loginPOST(body, cookie)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.loginRefreshPOST = function loginRefreshPOST (req, res, next, body, cookie) {
  Autenticacin.loginRefreshPOST(body, cookie)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.loginSignatureGET = function loginSignatureGET (req, res, next) {
  Autenticacin.loginSignatureGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.logoutPOST = function logoutPOST (req, res, next) {
  Autenticacin.logoutPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
