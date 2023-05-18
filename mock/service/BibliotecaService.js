'use strict';


/**
 * Listar biblioteca
 *
 * _page _page Número de página empezando en 0 (primera página). (optional)
 * _rows Integer Número de filas por página, por defecto 20 si se omite pero aparece el parámetro *_page*. (optional)
 * _sort String Indica la lista de propiedades (separadas por comas) por la que se ordenaran los resultados, en caso de omitirse se utilizará la propiedad que actúa como primary key. Si el nombre de la propiedad está precedido por un guion (signo negativo) la ordenación será descendente. (optional)
 * _search String Selecciona todos aquellos que en alguna de sus propiedades contenga el valor proporcionado. (optional)
 * _projection String Devuelve solo aquellas propiedades de la lista suministrada, los nombres de las propiedades deben ir separadas por comas. (optional)
 * returns inline_response_200_6
 **/
exports.apiBibliotecaGET = function(_page,_rows,_sort,_search,_projection) {
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
 * Borrar volumen
 *
 * id Integer Identificador del recurso
 * no response value expected for this operation
 **/
exports.apiBibliotecaIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Recuperar volumen
 *
 * id Integer Identificador del recurso
 * _projection String Devuelve solo aquellas propiedades de la lista suministrada, los nombres de las propiedades deben ir separadas por comas. (optional)
 * returns VolumenProjection
 **/
exports.apiBibliotecaIdGET = function(id,_projection) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "numPag" : 22,
  "titulo" : "Mauris",
  "id" : 0,
  "autor" : "At Mi Imperdiet"
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
exports.apiBibliotecaIdOPTIONS = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Actualizar parcialmente volumen
 *
 * body VolumenProjection 
 * id Integer Identificador del recurso
 * returns VolumenProjection
 **/
exports.apiBibliotecaIdPATCH = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "numPag" : 22,
  "titulo" : "Mauris",
  "id" : 0,
  "autor" : "At Mi Imperdiet"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Reemplazar volumen
 *
 * body VolumenModel 
 * id Integer Identificador del recurso
 * returns VolumenProjection
 **/
exports.apiBibliotecaIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "numPag" : 22,
  "titulo" : "Mauris",
  "id" : 0,
  "autor" : "At Mi Imperdiet"
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
exports.apiBibliotecaOPTIONS = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Crear volumen
 *
 * body VolumenModel 
 * no response value expected for this operation
 **/
exports.apiBibliotecaPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

