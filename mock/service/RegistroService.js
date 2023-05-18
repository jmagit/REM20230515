'use strict';


/**
 * Consultar su usuario
 *
 * returns inline_response_200_9
 **/
exports.registerGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "idUsuario" : "",
  "roles" : [ "roles", "roles" ],
  "nombre" : "nombre"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Registrar un nuevo usuario
 *
 * body Register_body_1 
 * no response value expected for this operation
 **/
exports.registerPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Modificar el nombre de su usuario
 *
 * body Register_body 
 * no response value expected for this operation
 **/
exports.registerPUT = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Cambiar su contraseña
 * Es necesario conocer la contraseña actual antes de cambiarla
 *
 * body Register_password_body 
 * no response value expected for this operation
 **/
exports.registerPasswordPUT = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

