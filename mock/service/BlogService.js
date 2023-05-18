'use strict';


/**
 * Listar blog
 *
 * _page _page Número de página empezando en 0 (primera página). (optional)
 * _rows Integer Número de filas por página, por defecto 20 si se omite pero aparece el parámetro *_page*. (optional)
 * _sort String Indica la lista de propiedades (separadas por comas) por la que se ordenaran los resultados, en caso de omitirse se utilizará la propiedad que actúa como primary key. Si el nombre de la propiedad está precedido por un guion (signo negativo) la ordenación será descendente. (optional)
 * _search String Selecciona todos aquellos que en alguna de sus propiedades contenga el valor proporcionado. (optional)
 * _projection String Devuelve solo aquellas propiedades de la lista suministrada, los nombres de las propiedades deben ir separadas por comas. (optional)
 * returns inline_response_200_4
 **/
exports.apiBlogGET = function(_page,_rows,_sort,_search,_projection) {
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
 * Borrar articulo
 *
 * id Integer Identificador del recurso
 * no response value expected for this operation
 **/
exports.apiBlogIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Recuperar articulo
 *
 * id Integer Identificador del recurso
 * _projection String Devuelve solo aquellas propiedades de la lista suministrada, los nombres de las propiedades deben ir separadas por comas. (optional)
 * returns ArticuloProjection
 **/
exports.apiBlogIdGET = function(id,_projection) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "texto" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eveniet eum nisi expedita ab dolorum labore similique provident officia ipsa, aliquam recusandae dicta id, praesentium quasi consequatur minus laborum perferendis?",
  "fecha" : "2016-02-29T00:00:00.000+00:00",
  "fotourl" : "https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg",
  "titulo" : "Saludo",
  "megusta" : 0,
  "id" : 1,
  "autor" : "Javier"
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
exports.apiBlogIdOPTIONS = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Actualizar parcialmente articulo
 *
 * body ArticuloProjection 
 * id Integer Identificador del recurso
 * returns ArticuloProjection
 **/
exports.apiBlogIdPATCH = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "texto" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eveniet eum nisi expedita ab dolorum labore similique provident officia ipsa, aliquam recusandae dicta id, praesentium quasi consequatur minus laborum perferendis?",
  "fecha" : "2016-02-29T00:00:00.000+00:00",
  "fotourl" : "https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg",
  "titulo" : "Saludo",
  "megusta" : 0,
  "id" : 1,
  "autor" : "Javier"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Reemplazar articulo
 *
 * body ArticuloModel 
 * id Integer Identificador del recurso
 * returns ArticuloProjection
 **/
exports.apiBlogIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "texto" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eveniet eum nisi expedita ab dolorum labore similique provident officia ipsa, aliquam recusandae dicta id, praesentium quasi consequatur minus laborum perferendis?",
  "fecha" : "2016-02-29T00:00:00.000+00:00",
  "fotourl" : "https://cdn-images-1.medium.com/max/800/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg",
  "titulo" : "Saludo",
  "megusta" : 0,
  "id" : 1,
  "autor" : "Javier"
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
exports.apiBlogOPTIONS = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Crear articulo
 *
 * body ArticuloModel 
 * no response value expected for this operation
 **/
exports.apiBlogPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

