'use strict';

var utils = require('../utils/writer.js');
var Vehiculos = require('../service/VehiculosService');

module.exports.apiMarcasGET = function apiMarcasGET (req, res, next, _page, _rows, _sort, _search, _projection) {
  Vehiculos.apiMarcasGET(_page, _rows, _sort, _search, _projection)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiMarcasIdGET = function apiMarcasIdGET (req, res, next, id, _projection) {
  Vehiculos.apiMarcasIdGET(id, _projection)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiVehiculosGET = function apiVehiculosGET (req, res, next, _page, _rows, _sort, _search, _projection) {
  Vehiculos.apiVehiculosGET(_page, _rows, _sort, _search, _projection)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiVehiculosIdDELETE = function apiVehiculosIdDELETE (req, res, next, id) {
  Vehiculos.apiVehiculosIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiVehiculosIdGET = function apiVehiculosIdGET (req, res, next, id, _projection) {
  Vehiculos.apiVehiculosIdGET(id, _projection)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiVehiculosIdOPTIONS = function apiVehiculosIdOPTIONS (req, res, next, id) {
  Vehiculos.apiVehiculosIdOPTIONS(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiVehiculosIdPATCH = function apiVehiculosIdPATCH (req, res, next, body, id) {
  Vehiculos.apiVehiculosIdPATCH(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiVehiculosIdPUT = function apiVehiculosIdPUT (req, res, next, body, id) {
  Vehiculos.apiVehiculosIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiVehiculosOPTIONS = function apiVehiculosOPTIONS (req, res, next) {
  Vehiculos.apiVehiculosOPTIONS()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiVehiculosPOST = function apiVehiculosPOST (req, res, next, body) {
  Vehiculos.apiVehiculosPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
