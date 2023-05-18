'use strict';


/**
 * Listar contactos
 *
 * _page _page Número de página empezando en 0 (primera página). (optional)
 * _rows Integer Número de filas por página, por defecto 20 si se omite pero aparece el parámetro *_page*. (optional)
 * _sort String Indica la lista de propiedades (separadas por comas) por la que se ordenaran los resultados, en caso de omitirse se utilizará la propiedad que actúa como primary key. Si el nombre de la propiedad está precedido por un guion (signo negativo) la ordenación será descendente. (optional)
 * _search String Selecciona todos aquellos que en alguna de sus propiedades contenga el valor proporcionado. (optional)
 * _projection String Devuelve solo aquellas propiedades de la lista suministrada, los nombres de las propiedades deben ir separadas por comas. (optional)
 * returns inline_response_200
 **/
exports.apiContactosGET = function(_page,_rows,_sort,_search,_projection) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Borrar contacto
 *
 * id Integer Identificador del recurso
 * no response value expected for this operation
 **/
exports.apiContactosIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Recuperar contacto
 *
 * id Integer Identificador del recurso
 * _projection String Devuelve solo aquellas propiedades de la lista suministrada, los nombres de las propiedades deben ir separadas por comas. (optional)
 * returns ContactoProjection
 **/
exports.apiContactosIdGET = function(id,_projection) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "apellidos" : "Woodall",
  "icono" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALJSURBVDjLpVNbS1RRFP72nHGaUedmpamj5pgKSUli0eXJfOipoELs+hA+FFT44oMSRBkZ1GNC/oAoCJ+C8QaSZhdCTEU0rbyP05jTzOTczv20zkz6IBFBBxZrs9f+vv3t76zFNE3D/3zGjYXa01OuKUqtJstZqizPUnSb6+vDem29o8OpiuIFimZFEOZUQXiY09rq0WtMV6B2d98k8F2YTU4YOKjRCKTw+qQqSZcJFKPoTMty7Nu2pwRKJILY2DjiPv9TIrvGlK6uk5osvjSUl4ERGJIEmEyQlpeRmJpeUkQxaikp3mt2u4FwEPoFcDgR6u1FaHzivpGk3uDy88DiccDnBxQVkGWkFReAO3SgUONFcGYLMDxC71RTF1jTYTt2FIEPw1eMJLOCs9mAuXkqyoBGhxQF+PQFBjvtcwyY+aq7BIhyKgeCYCUqFJ636QSmJIAXAEFIEYhSimTFl1STvFkPjfYEqqmUJRFkpmokg9bJ+Z1MpgKfIICSAutAZcs6mSmMBvLCADLRYCCWfnlmBnDlAbEokCASnqcbhFQW+VRO7lPQX0CpG4GB17qCZyzc3u4mFf2WItdu864cYHIKWAv+bg5lU4V3bYxiFLHQd3CZNqT9zIynx7PLuAceTyg2OPiK9/kPqqEfeWmV+8HSqb8WvSkwue5dHUXIHkbFmQaUXmxETrYVIX6FC0YmFtlGK39rabHTm5pIVqOzqtJqzc8F3r2nNoxiaLkT1Q1NsMwOkLFvALsDAWMRPvYNzbOtszDf0FBNRI8dxYWHd9TWJE3rbzuF449egFWd3jwXvpOLkaGAxv40TJ/r6hxEco+8ue4syGVTC88TR85fsmQseSAk/KCWQ2Sdw/QsVtjfpnGipuYs9Ykr4pp3mqwZtwq2y0ajwYvImoyFVU6ReO02+9dxfnuusDkW9F3lFFakcNoKoZ6c6JPbfgHHGqU/+iLy1wAAAABJRU5ErkJggg==",
  "direcciones" : [ {
    "codigo" : "29071",
    "calle" : "488 Pankratz Junction",
    "provincia" : "Malaga",
    "pais" : "España"
  }, {
    "codigo" : "29071",
    "calle" : "488 Pankratz Junction",
    "provincia" : "Malaga",
    "pais" : "España"
  } ],
  "nif" : "12345678Z",
  "avatar" : "https://randomuser.me/api/portraits/men/0.jpg",
  "nombre" : "Pietro",
  "tratamiento" : "Excmo.",
  "nacimiento" : "1963-10-11T00:00:00.000+00:00",
  "conflictivo" : true,
  "id" : 1,
  "telefono" : "642 051 348",
  "sexo" : "H",
  "email" : "pwoodall0@army.mil"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Sondeo CORS
 *
 * id Integer Identificador del recurso
 * no response value expected for this operation
 **/
exports.apiContactosIdOPTIONS = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Actualizar parcialmente contacto
 *
 * body ContactoProjection 
 * id Integer Identificador del recurso
 * returns ContactoProjection
 **/
exports.apiContactosIdPATCH = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "apellidos" : "Woodall",
  "icono" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALJSURBVDjLpVNbS1RRFP72nHGaUedmpamj5pgKSUli0eXJfOipoELs+hA+FFT44oMSRBkZ1GNC/oAoCJ+C8QaSZhdCTEU0rbyP05jTzOTczv20zkz6IBFBBxZrs9f+vv3t76zFNE3D/3zGjYXa01OuKUqtJstZqizPUnSb6+vDem29o8OpiuIFimZFEOZUQXiY09rq0WtMV6B2d98k8F2YTU4YOKjRCKTw+qQqSZcJFKPoTMty7Nu2pwRKJILY2DjiPv9TIrvGlK6uk5osvjSUl4ERGJIEmEyQlpeRmJpeUkQxaikp3mt2u4FwEPoFcDgR6u1FaHzivpGk3uDy88DiccDnBxQVkGWkFReAO3SgUONFcGYLMDxC71RTF1jTYTt2FIEPw1eMJLOCs9mAuXkqyoBGhxQF+PQFBjvtcwyY+aq7BIhyKgeCYCUqFJ636QSmJIAXAEFIEYhSimTFl1STvFkPjfYEqqmUJRFkpmokg9bJ+Z1MpgKfIICSAutAZcs6mSmMBvLCADLRYCCWfnlmBnDlAbEokCASnqcbhFQW+VRO7lPQX0CpG4GB17qCZyzc3u4mFf2WItdu864cYHIKWAv+bg5lU4V3bYxiFLHQd3CZNqT9zIynx7PLuAceTyg2OPiK9/kPqqEfeWmV+8HSqb8WvSkwue5dHUXIHkbFmQaUXmxETrYVIX6FC0YmFtlGK39rabHTm5pIVqOzqtJqzc8F3r2nNoxiaLkT1Q1NsMwOkLFvALsDAWMRPvYNzbOtszDf0FBNRI8dxYWHd9TWJE3rbzuF449egFWd3jwXvpOLkaGAxv40TJ/r6hxEco+8ue4syGVTC88TR85fsmQseSAk/KCWQ2Sdw/QsVtjfpnGipuYs9Ykr4pp3mqwZtwq2y0ajwYvImoyFVU6ReO02+9dxfnuusDkW9F3lFFakcNoKoZ6c6JPbfgHHGqU/+iLy1wAAAABJRU5ErkJggg==",
  "direcciones" : [ {
    "codigo" : "29071",
    "calle" : "488 Pankratz Junction",
    "provincia" : "Malaga",
    "pais" : "España"
  }, {
    "codigo" : "29071",
    "calle" : "488 Pankratz Junction",
    "provincia" : "Malaga",
    "pais" : "España"
  } ],
  "nif" : "12345678Z",
  "avatar" : "https://randomuser.me/api/portraits/men/0.jpg",
  "nombre" : "Pietro",
  "tratamiento" : "Excmo.",
  "nacimiento" : "1963-10-11T00:00:00.000+00:00",
  "conflictivo" : true,
  "id" : 1,
  "telefono" : "642 051 348",
  "sexo" : "H",
  "email" : "pwoodall0@army.mil"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Reemplazar contacto
 *
 * body ContactoModel 
 * id Integer Identificador del recurso
 * returns ContactoProjection
 **/
exports.apiContactosIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "apellidos" : "Woodall",
  "icono" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALJSURBVDjLpVNbS1RRFP72nHGaUedmpamj5pgKSUli0eXJfOipoELs+hA+FFT44oMSRBkZ1GNC/oAoCJ+C8QaSZhdCTEU0rbyP05jTzOTczv20zkz6IBFBBxZrs9f+vv3t76zFNE3D/3zGjYXa01OuKUqtJstZqizPUnSb6+vDem29o8OpiuIFimZFEOZUQXiY09rq0WtMV6B2d98k8F2YTU4YOKjRCKTw+qQqSZcJFKPoTMty7Nu2pwRKJILY2DjiPv9TIrvGlK6uk5osvjSUl4ERGJIEmEyQlpeRmJpeUkQxaikp3mt2u4FwEPoFcDgR6u1FaHzivpGk3uDy88DiccDnBxQVkGWkFReAO3SgUONFcGYLMDxC71RTF1jTYTt2FIEPw1eMJLOCs9mAuXkqyoBGhxQF+PQFBjvtcwyY+aq7BIhyKgeCYCUqFJ636QSmJIAXAEFIEYhSimTFl1STvFkPjfYEqqmUJRFkpmokg9bJ+Z1MpgKfIICSAutAZcs6mSmMBvLCADLRYCCWfnlmBnDlAbEokCASnqcbhFQW+VRO7lPQX0CpG4GB17qCZyzc3u4mFf2WItdu864cYHIKWAv+bg5lU4V3bYxiFLHQd3CZNqT9zIynx7PLuAceTyg2OPiK9/kPqqEfeWmV+8HSqb8WvSkwue5dHUXIHkbFmQaUXmxETrYVIX6FC0YmFtlGK39rabHTm5pIVqOzqtJqzc8F3r2nNoxiaLkT1Q1NsMwOkLFvALsDAWMRPvYNzbOtszDf0FBNRI8dxYWHd9TWJE3rbzuF449egFWd3jwXvpOLkaGAxv40TJ/r6hxEco+8ue4syGVTC88TR85fsmQseSAk/KCWQ2Sdw/QsVtjfpnGipuYs9Ykr4pp3mqwZtwq2y0ajwYvImoyFVU6ReO02+9dxfnuusDkW9F3lFFakcNoKoZ6c6JPbfgHHGqU/+iLy1wAAAABJRU5ErkJggg==",
  "direcciones" : [ {
    "codigo" : "29071",
    "calle" : "488 Pankratz Junction",
    "provincia" : "Malaga",
    "pais" : "España"
  }, {
    "codigo" : "29071",
    "calle" : "488 Pankratz Junction",
    "provincia" : "Malaga",
    "pais" : "España"
  } ],
  "nif" : "12345678Z",
  "avatar" : "https://randomuser.me/api/portraits/men/0.jpg",
  "nombre" : "Pietro",
  "tratamiento" : "Excmo.",
  "nacimiento" : "1963-10-11T00:00:00.000+00:00",
  "conflictivo" : true,
  "id" : 1,
  "telefono" : "642 051 348",
  "sexo" : "H",
  "email" : "pwoodall0@army.mil"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Sondeo CORS
 *
 * no response value expected for this operation
 **/
exports.apiContactosOPTIONS = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Crear contacto
 *
 * body ContactoModel 
 * no response value expected for this operation
 **/
exports.apiContactosPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

