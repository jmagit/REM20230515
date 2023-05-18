'use strict';

var utils = require('../utils/writer.js');
var Biblioteca = require('../service/BibliotecaService');

module.exports.apiBibliotecaGET = function apiBibliotecaGET (req, res, next, _page, _rows, _sort, _search, _projection) {
  Biblioteca.apiBibliotecaGET(_page, _rows, _sort, _search, _projection)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiBibliotecaIdDELETE = function apiBibliotecaIdDELETE (req, res, next, id) {
  Biblioteca.apiBibliotecaIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiBibliotecaIdGET = function apiBibliotecaIdGET (req, res, next, id, _projection) {
  Biblioteca.apiBibliotecaIdGET(id, _projection)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiBibliotecaIdOPTIONS = function apiBibliotecaIdOPTIONS (req, res, next, id) {
  Biblioteca.apiBibliotecaIdOPTIONS(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiBibliotecaIdPATCH = function apiBibliotecaIdPATCH (req, res, next, body, id) {
  Biblioteca.apiBibliotecaIdPATCH(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiBibliotecaIdPUT = function apiBibliotecaIdPUT (req, res, next, body, id) {
  Biblioteca.apiBibliotecaIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiBibliotecaOPTIONS = function apiBibliotecaOPTIONS (req, res, next) {
  Biblioteca.apiBibliotecaOPTIONS()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiBibliotecaPOST = function apiBibliotecaPOST (req, res, next, body) {
  Biblioteca.apiBibliotecaPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
