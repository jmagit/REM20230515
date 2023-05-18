'use strict';


/**
 * Listar peliculas
 *
 * _page _page Número de página empezando en 0 (primera página). (optional)
 * _rows Integer Número de filas por página, por defecto 20 si se omite pero aparece el parámetro *_page*. (optional)
 * _sort String Indica la lista de propiedades (separadas por comas) por la que se ordenaran los resultados, en caso de omitirse se utilizará la propiedad que actúa como primary key. Si el nombre de la propiedad está precedido por un guion (signo negativo) la ordenación será descendente. (optional)
 * _search String Selecciona todos aquellos que en alguna de sus propiedades contenga el valor proporcionado. (optional)
 * _projection String Devuelve solo aquellas propiedades de la lista suministrada, los nombres de las propiedades deben ir separadas por comas. (optional)
 * returns inline_response_200_1
 **/
exports.apiPeliculasGET = function(_page,_rows,_sort,_search,_projection) {
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
 * Borrar pelicula
 *
 * id Integer Identificador del recurso
 * no response value expected for this operation
 **/
exports.apiPeliculasIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Recuperar pelicula
 *
 * id Integer Identificador del recurso
 * _projection String Devuelve solo aquellas propiedades de la lista suministrada, los nombres de las propiedades deben ir separadas por comas. (optional)
 * returns PeliculaProjection
 **/
exports.apiPeliculasIdGET = function(id,_projection) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 0
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
exports.apiPeliculasIdOPTIONS = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Actualizar parcialmente pelicula
 *
 * body PeliculaProjection 
 * id Integer Identificador del recurso
 * returns PeliculaProjection
 **/
exports.apiPeliculasIdPATCH = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Reemplazar pelicula
 *
 * body PeliculaModel 
 * id Integer Identificador del recurso
 * returns PeliculaProjection
 **/
exports.apiPeliculasIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 0
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
exports.apiPeliculasOPTIONS = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Crear pelicula
 *
 * body PeliculaModel 
 * no response value expected for this operation
 **/
exports.apiPeliculasPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

