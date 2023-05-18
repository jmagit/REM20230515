'use strict';

var utils = require('../utils/writer.js');
var Contactos = require('../service/ContactosService');

module.exports.apiContactosGET = function apiContactosGET (req, res, next, _page, _rows, _sort, _search, _projection) {
  Contactos.apiContactosGET(_page, _rows, _sort, _search, _projection)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiContactosIdDELETE = function apiContactosIdDELETE (req, res, next, id) {
  Contactos.apiContactosIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiContactosIdGET = function apiContactosIdGET (req, res, next, id, _projection) {
  Contactos.apiContactosIdGET(id, _projection)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiContactosIdOPTIONS = function apiContactosIdOPTIONS (req, res, next, id) {
  Contactos.apiContactosIdOPTIONS(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiContactosIdPATCH = function apiContactosIdPATCH (req, res, next, body, id) {
  Contactos.apiContactosIdPATCH(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiContactosIdPUT = function apiContactosIdPUT (req, res, next, body, id) {
  Contactos.apiContactosIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiContactosOPTIONS = function apiContactosOPTIONS (req, res, next) {
  Contactos.apiContactosOPTIONS()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiContactosPOST = function apiContactosPOST (req, res, next, body) {
  Contactos.apiContactosPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
