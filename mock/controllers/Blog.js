'use strict';

var utils = require('../utils/writer.js');
var Blog = require('../service/BlogService');

module.exports.apiBlogGET = function apiBlogGET (req, res, next, _page, _rows, _sort, _search, _projection) {
  Blog.apiBlogGET(_page, _rows, _sort, _search, _projection)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiBlogIdDELETE = function apiBlogIdDELETE (req, res, next, id) {
  Blog.apiBlogIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiBlogIdGET = function apiBlogIdGET (req, res, next, id, _projection) {
  Blog.apiBlogIdGET(id, _projection)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiBlogIdOPTIONS = function apiBlogIdOPTIONS (req, res, next, id) {
  Blog.apiBlogIdOPTIONS(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiBlogIdPATCH = function apiBlogIdPATCH (req, res, next, body, id) {
  Blog.apiBlogIdPATCH(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiBlogIdPUT = function apiBlogIdPUT (req, res, next, body, id) {
  Blog.apiBlogIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiBlogOPTIONS = function apiBlogOPTIONS (req, res, next) {
  Blog.apiBlogOPTIONS()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiBlogPOST = function apiBlogPOST (req, res, next, body) {
  Blog.apiBlogPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
