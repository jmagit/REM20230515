'use strict';

var utils = require('../utils/writer.js');
var Libros = require('../service/LibrosService');

module.exports.apiLibrosGET = function apiLibrosGET (req, res, next, _page, _rows, _sort, _search, _projection) {
  Libros.apiLibrosGET(_page, _rows, _sort, _search, _projection)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiLibrosIdDELETE = function apiLibrosIdDELETE (req, res, next, id) {
  Libros.apiLibrosIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiLibrosIdGET = function apiLibrosIdGET (req, res, next, id, _projection) {
  Libros.apiLibrosIdGET(id, _projection)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiLibrosIdOPTIONS = function apiLibrosIdOPTIONS (req, res, next, id) {
  Libros.apiLibrosIdOPTIONS(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiLibrosIdPATCH = function apiLibrosIdPATCH (req, res, next, body, id) {
  Libros.apiLibrosIdPATCH(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiLibrosIdPUT = function apiLibrosIdPUT (req, res, next, body, id) {
  Libros.apiLibrosIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiLibrosOPTIONS = function apiLibrosOPTIONS (req, res, next) {
  Libros.apiLibrosOPTIONS()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiLibrosPOST = function apiLibrosPOST (req, res, next, body) {
  Libros.apiLibrosPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
