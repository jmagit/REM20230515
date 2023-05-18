'use strict';

var utils = require('../utils/writer.js');
var Peliculas = require('../service/PeliculasService');

module.exports.apiPeliculasGET = function apiPeliculasGET (req, res, next, _page, _rows, _sort, _search, _projection) {
  Peliculas.apiPeliculasGET(_page, _rows, _sort, _search, _projection)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiPeliculasIdDELETE = function apiPeliculasIdDELETE (req, res, next, id) {
  Peliculas.apiPeliculasIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiPeliculasIdGET = function apiPeliculasIdGET (req, res, next, id, _projection) {
  Peliculas.apiPeliculasIdGET(id, _projection)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiPeliculasIdOPTIONS = function apiPeliculasIdOPTIONS (req, res, next, id) {
  Peliculas.apiPeliculasIdOPTIONS(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiPeliculasIdPATCH = function apiPeliculasIdPATCH (req, res, next, body, id) {
  Peliculas.apiPeliculasIdPATCH(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiPeliculasIdPUT = function apiPeliculasIdPUT (req, res, next, body, id) {
  Peliculas.apiPeliculasIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiPeliculasOPTIONS = function apiPeliculasOPTIONS (req, res, next) {
  Peliculas.apiPeliculasOPTIONS()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiPeliculasPOST = function apiPeliculasPOST (req, res, next, body) {
  Peliculas.apiPeliculasPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
