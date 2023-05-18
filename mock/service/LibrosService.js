'use strict';


/**
 * Listar libros
 *
 * _page _page Número de página empezando en 0 (primera página). (optional)
 * _rows Integer Número de filas por página, por defecto 20 si se omite pero aparece el parámetro *_page*. (optional)
 * _sort String Indica la lista de propiedades (separadas por comas) por la que se ordenaran los resultados, en caso de omitirse se utilizará la propiedad que actúa como primary key. Si el nombre de la propiedad está precedido por un guion (signo negativo) la ordenación será descendente. (optional)
 * _search String Selecciona todos aquellos que en alguna de sus propiedades contenga el valor proporcionado. (optional)
 * _projection String Devuelve solo aquellas propiedades de la lista suministrada, los nombres de las propiedades deben ir separadas por comas. (optional)
 * returns inline_response_200_5
 **/
exports.apiLibrosGET = function(_page,_rows,_sort,_search,_projection) {
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
 * Borrar libro
 *
 * id String Identificador del recurso
 * no response value expected for this operation
 **/
exports.apiLibrosIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Recuperar libro
 *
 * id String Identificador del recurso
 * _projection String Devuelve solo aquellas propiedades de la lista suministrada, los nombres de las propiedades deben ir separadas por comas. (optional)
 * returns LibroProjection
 **/
exports.apiLibrosIdGET = function(id,_projection) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "fecha" : "1605",
  "paginas" : "377",
  "idLibro" : "1",
  "wiki" : "https://es.wikipedia.org/wiki/Don_Quijote_de_la_Mancha",
  "titulo" : "El ingenioso hidalgo don Quijote de la Mancha ",
  "autor" : "Miguel de Cervantes",
  "pais" : "España"
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
 * id String Identificador del recurso
 * no response value expected for this operation
 **/
exports.apiLibrosIdOPTIONS = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Actualizar parcialmente libro
 *
 * body LibroProjection 
 * id String Identificador del recurso
 * returns LibroProjection
 **/
exports.apiLibrosIdPATCH = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "fecha" : "1605",
  "paginas" : "377",
  "idLibro" : "1",
  "wiki" : "https://es.wikipedia.org/wiki/Don_Quijote_de_la_Mancha",
  "titulo" : "El ingenioso hidalgo don Quijote de la Mancha ",
  "autor" : "Miguel de Cervantes",
  "pais" : "España"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Reemplazar libro
 *
 * body LibroModel 
 * id String Identificador del recurso
 * returns LibroProjection
 **/
exports.apiLibrosIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "fecha" : "1605",
  "paginas" : "377",
  "idLibro" : "1",
  "wiki" : "https://es.wikipedia.org/wiki/Don_Quijote_de_la_Mancha",
  "titulo" : "El ingenioso hidalgo don Quijote de la Mancha ",
  "autor" : "Miguel de Cervantes",
  "pais" : "España"
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
exports.apiLibrosOPTIONS = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Crear libro
 *
 * body LibroModel 
 * no response value expected for this operation
 **/
exports.apiLibrosPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

