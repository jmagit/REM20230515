'use strict';

var utils = require('../utils/writer.js');
var Tarjetas = require('../service/TarjetasService');

module.exports.apiTarjetasGET = function apiTarjetasGET (req, res, next, _page, _rows, _sort, _search, _projection) {
  Tarjetas.apiTarjetasGET(_page, _rows, _sort, _search, _projection)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiTarjetasIdGET = function apiTarjetasIdGET (req, res, next, id, _projection) {
  Tarjetas.apiTarjetasIdGET(id, _projection)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiTarjetasIdPUT = function apiTarjetasIdPUT (req, res, next, body, id) {
  Tarjetas.apiTarjetasIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiTarjetasPOST = function apiTarjetasPOST (req, res, next, body) {
  Tarjetas.apiTarjetasPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
