'use strict';


/**
 * Obtener estado de sesión
 *
 * returns inline_response_200_10
 **/
exports.authGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "usr" : "usr",
  "roles" : [ "roles", "roles" ],
  "name" : "name",
  "isAuthenticated" : true
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
exports.loginOPTIONS = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Iniciar sesión
 *
 * body Login 
 * cookie Boolean true para que genere y envíe la cookie (optional)
 * returns RespuestaLogin
 **/
exports.loginPOST = function(body,cookie) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "success" : true,
  "roles" : [ "roles", "roles" ],
  "name" : "name",
  "refresh" : "refresh",
  "expires_in" : 0,
  "token" : "token"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Iniciar sesión
 *
 * body Login 
 * cookie Boolean true para que genere y envíe la cookie (optional)
 * returns RespuestaLogin
 **/
exports.loginPOST = function(body,cookie) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "success" : true,
  "roles" : [ "roles", "roles" ],
  "name" : "name",
  "refresh" : "refresh",
  "expires_in" : 0,
  "token" : "token"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Volver a iniciar sesión con el token de refresco
 *
 * body RefreshToken 
 * cookie Boolean true para que genere y envíe la cookie (optional)
 * returns RespuestaLogin
 **/
exports.loginRefreshPOST = function(body,cookie) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "success" : true,
  "roles" : [ "roles", "roles" ],
  "name" : "name",
  "refresh" : "refresh",
  "expires_in" : 0,
  "token" : "token"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Clave publica para validar el token JWT
 *
 * returns String
 **/
exports.loginSignatureGET = function() {
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
 * Cerrar sesión
 *
 * no response value expected for this operation
 **/
exports.logoutPOST = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

