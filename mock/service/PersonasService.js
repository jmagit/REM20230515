'use strict';


/**
 * Listar personas
 *
 * _page _page Número de página empezando en 0 (primera página). (optional)
 * _rows Integer Número de filas por página, por defecto 20 si se omite pero aparece el parámetro *_page*. (optional)
 * _sort String Indica la lista de propiedades (separadas por comas) por la que se ordenaran los resultados, en caso de omitirse se utilizará la propiedad que actúa como primary key. Si el nombre de la propiedad está precedido por un guion (signo negativo) la ordenación será descendente. (optional)
 * _search String Selecciona todos aquellos que en alguna de sus propiedades contenga el valor proporcionado. (optional)
 * _projection String Devuelve solo aquellas propiedades de la lista suministrada, los nombres de las propiedades deben ir separadas por comas. (optional)
 * returns inline_response_200_2
 **/
exports.apiPersonasGET = function(_page,_rows,_sort,_search,_projection) {
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
 * Borrar persona
 *
 * id Integer Identificador del recurso
 * no response value expected for this operation
 **/
exports.apiPersonasIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Recuperar persona
 *
 * id Integer Identificador del recurso
 * _projection String Devuelve solo aquellas propiedades de la lista suministrada, los nombres de las propiedades deben ir separadas por comas. (optional)
 * returns PersonaProjection
 **/
exports.apiPersonasIdGET = function(id,_projection) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "apellidos" : "Grillo",
  "correo" : "pepito@grillo.tv",
  "id" : 1,
  "telefono" : [ "999 555 555", "999 555 555" ],
  "nombre" : "Pepito",
  "edad" : 37
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Reemplazar persona
 *
 * body PersonaModel 
 * id Integer Identificador del recurso
 * returns PersonaProjection
 **/
exports.apiPersonasIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "apellidos" : "Grillo",
  "correo" : "pepito@grillo.tv",
  "id" : 1,
  "telefono" : [ "999 555 555", "999 555 555" ],
  "nombre" : "Pepito",
  "edad" : 37
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Crear persona
 *
 * body PersonaModel 
 * no response value expected for this operation
 **/
exports.apiPersonasPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

