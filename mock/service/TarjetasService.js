'use strict';


/**
 * Listar tarjetas
 *
 * _page _page Número de página empezando en 0 (primera página). (optional)
 * _rows Integer Número de filas por página, por defecto 20 si se omite pero aparece el parámetro *_page*. (optional)
 * _sort String Indica la lista de propiedades (separadas por comas) por la que se ordenaran los resultados, en caso de omitirse se utilizará la propiedad que actúa como primary key. Si el nombre de la propiedad está precedido por un guion (signo negativo) la ordenación será descendente. (optional)
 * _search String Selecciona todos aquellos que en alguna de sus propiedades contenga el valor proporcionado. (optional)
 * _projection String Devuelve solo aquellas propiedades de la lista suministrada, los nombres de las propiedades deben ir separadas por comas. (optional)
 * returns inline_response_200_3
 **/
exports.apiTarjetasGET = function(_page,_rows,_sort,_search,_projection) {
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
 * Recuperar tarjeta
 *
 * id Integer Identificador del recurso
 * _projection String Devuelve solo aquellas propiedades de la lista suministrada, los nombres de las propiedades deben ir separadas por comas. (optional)
 * returns TarjetaProjection
 **/
exports.apiTarjetasIdGET = function(id,_projection) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "caducidad" : "03/2020",
  "tipo" : "Visa",
  "idCliente" : "a.auctor.non@dictummi.ca",
  "numero" : "4024 0071 1838 5904",
  "CVC_CVV" : "147",
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
 * Reemplazar tarjeta
 *
 * body TarjetaModel 
 * id Integer Identificador del recurso
 * returns TarjetaProjection
 **/
exports.apiTarjetasIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "caducidad" : "03/2020",
  "tipo" : "Visa",
  "idCliente" : "a.auctor.non@dictummi.ca",
  "numero" : "4024 0071 1838 5904",
  "CVC_CVV" : "147",
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
 * Crear tarjeta
 *
 * body TarjetaModel 
 * no response value expected for this operation
 **/
exports.apiTarjetasPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

