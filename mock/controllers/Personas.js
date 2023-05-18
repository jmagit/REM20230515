'use strict';

var utils = require('../utils/writer.js');
var Personas = require('../service/PersonasService');

module.exports.apiPersonasGET = function apiPersonasGET (req, res, next, _page, _rows, _sort, _search, _projection) {
  Personas.apiPersonasGET(_page, _rows, _sort, _search, _projection)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiPersonasIdDELETE = function apiPersonasIdDELETE (req, res, next, id) {
  Personas.apiPersonasIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiPersonasIdGET = function apiPersonasIdGET (req, res, next, id, _projection) {
  Personas.apiPersonasIdGET(id, _projection)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiPersonasIdPUT = function apiPersonasIdPUT (req, res, next, body, id) {
  Personas.apiPersonasIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiPersonasPOST = function apiPersonasPOST (req, res, next, body) {
  Personas.apiPersonasPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
