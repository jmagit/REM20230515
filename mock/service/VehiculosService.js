'use strict';


/**
 * Listar marcas
 *
 * _page _page Número de página empezando en 0 (primera página). (optional)
 * _rows Integer Número de filas por página, por defecto 20 si se omite pero aparece el parámetro *_page*. (optional)
 * _sort String Indica la lista de propiedades (separadas por comas) por la que se ordenaran los resultados, en caso de omitirse se utilizará la propiedad que actúa como primary key. Si el nombre de la propiedad está precedido por un guion (signo negativo) la ordenación será descendente. (optional)
 * _search String Selecciona todos aquellos que en alguna de sus propiedades contenga el valor proporcionado. (optional)
 * _projection String Devuelve solo aquellas propiedades de la lista suministrada, los nombres de las propiedades deben ir separadas por comas. (optional)
 * returns inline_response_200_8
 **/
exports.apiMarcasGET = function(_page,_rows,_sort,_search,_projection) {
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
 * Recuperar marca
 *
 * id String Identificador del recurso
 * _projection String Devuelve solo aquellas propiedades de la lista suministrada, los nombres de las propiedades deben ir separadas por comas. (optional)
 * returns MarcaProjection
 **/
exports.apiMarcasIdGET = function(id,_projection) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "marca" : "ALFA ROMEO",
  "modelos" : [ "Giulietta", "Giulietta" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Listar vehiculos
 *
 * _page _page Número de página empezando en 0 (primera página). (optional)
 * _rows Integer Número de filas por página, por defecto 20 si se omite pero aparece el parámetro *_page*. (optional)
 * _sort String Indica la lista de propiedades (separadas por comas) por la que se ordenaran los resultados, en caso de omitirse se utilizará la propiedad que actúa como primary key. Si el nombre de la propiedad está precedido por un guion (signo negativo) la ordenación será descendente. (optional)
 * _search String Selecciona todos aquellos que en alguna de sus propiedades contenga el valor proporcionado. (optional)
 * _projection String Devuelve solo aquellas propiedades de la lista suministrada, los nombres de las propiedades deben ir separadas por comas. (optional)
 * returns inline_response_200_7
 **/
exports.apiVehiculosGET = function(_page,_rows,_sort,_search,_projection) {
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
 * Borrar vehiculo
 *
 * id Integer Identificador del recurso
 * no response value expected for this operation
 **/
exports.apiVehiculosIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Recuperar vehiculo
 *
 * id Integer Identificador del recurso
 * _projection String Devuelve solo aquellas propiedades de la lista suministrada, los nombres de las propiedades deben ir separadas por comas. (optional)
 * returns VehiculoProjection
 **/
exports.apiVehiculosIdGET = function(id,_projection) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "marca" : "AUDI",
  "propietario" : {
    "apellidos" : "Glamour",
    "nombre" : "Penélope",
    "dni" : "12345678Z",
    "email" : "pglamour@example.com"
  },
  "direcciones" : [ {
    "calle" : "Compact Pussycat",
    "localidad" : "Rota",
    "id" : 1,
    "provincia" : 11,
    "cp" : "11080"
  }, {
    "calle" : "Compact Pussycat",
    "localidad" : "Rota",
    "id" : 1,
    "provincia" : 11,
    "cp" : "11080"
  } ],
  "matricula" : "1234ABC",
  "id" : 1,
  "modelo" : "A3",
  "edad" : 2
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
exports.apiVehiculosIdOPTIONS = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Actualizar parcialmente vehiculo
 *
 * body VehiculoProjection 
 * id Integer Identificador del recurso
 * returns VehiculoProjection
 **/
exports.apiVehiculosIdPATCH = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "marca" : "AUDI",
  "propietario" : {
    "apellidos" : "Glamour",
    "nombre" : "Penélope",
    "dni" : "12345678Z",
    "email" : "pglamour@example.com"
  },
  "direcciones" : [ {
    "calle" : "Compact Pussycat",
    "localidad" : "Rota",
    "id" : 1,
    "provincia" : 11,
    "cp" : "11080"
  }, {
    "calle" : "Compact Pussycat",
    "localidad" : "Rota",
    "id" : 1,
    "provincia" : 11,
    "cp" : "11080"
  } ],
  "matricula" : "1234ABC",
  "id" : 1,
  "modelo" : "A3",
  "edad" : 2
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Reemplazar vehiculo
 *
 * body VehiculoModel 
 * id Integer Identificador del recurso
 * returns VehiculoProjection
 **/
exports.apiVehiculosIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "marca" : "AUDI",
  "propietario" : {
    "apellidos" : "Glamour",
    "nombre" : "Penélope",
    "dni" : "12345678Z",
    "email" : "pglamour@example.com"
  },
  "direcciones" : [ {
    "calle" : "Compact Pussycat",
    "localidad" : "Rota",
    "id" : 1,
    "provincia" : 11,
    "cp" : "11080"
  }, {
    "calle" : "Compact Pussycat",
    "localidad" : "Rota",
    "id" : 1,
    "provincia" : 11,
    "cp" : "11080"
  } ],
  "matricula" : "1234ABC",
  "id" : 1,
  "modelo" : "A3",
  "edad" : 2
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
exports.apiVehiculosOPTIONS = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Crear vehiculo
 *
 * body VehiculoModel 
 * no response value expected for this operation
 **/
exports.apiVehiculosPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

