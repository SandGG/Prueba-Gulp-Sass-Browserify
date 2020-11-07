(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _funcionalidad = require('./funcionalidad');

var tipo = document.getElementsByClassName('form__input');
/*require('./funcionalidad');
var cliente = require('./cliente');
var orden = require('./orden');*/

var pedirOrden = new orden();
document.querySelector('#agregarMenu').addEventListener('click', function () {
  document.querySelector('.modal__text').innerHTML += pedirOrden.getDatos(tipo);
  (0, _funcionalidad.clean)();
});
document.querySelector('#terminarMenu').addEventListener('click', function () {
  document.querySelector('#modal').style.display = 'flex';
  var nombre = document.querySelector('#nombre').value;

  if (nombre != '') {
    var pago = document.querySelector('#opc').value;
    var addCliente = new cliente(nombre, pago);
    document.querySelector('.modal__titulo').innerHTML += addCliente.imprimir();
    document.querySelector('#nombre').value = '';
    document.querySelector('#opc').selectedIndex = 0;
    (0, _funcionalidad.clean)();
  } else {
    document.querySelector('.modal__titulo').innerHTML = 'No se almaceno, faltó nombre';
    document.querySelector('.modal__text').innerHTML = '';
  }
});

},{"./funcionalidad":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
document.querySelector('#button_pizza').addEventListener('click', function () {
  openTab('pizzas');
});
document.querySelector('#button_hamb').addEventListener('click', function () {
  openTab('hamburguesas');
});
document.querySelector('#button_drinks').addEventListener('click', function () {
  openTab('bebidas');
});

function openTab(cad) {
  var x = document.getElementsByClassName('tabs');

  for (var i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }

  document.querySelector("#" + cad).style.display = 'block';
  clean();
}

document.querySelector('.close').addEventListener('click', function () {
  document.querySelector('#modal').style.display = 'none';
  document.querySelector('.modal__text').innerHTML = '';
  document.querySelector('.modal__titulo').innerHTML = '';
});
document.querySelector('#modal').addEventListener('click', function (e) {
  if (e.target.id == 'modal') {
    modal.style.display = 'none';
    document.querySelector('.modal__text').innerHTML = '';
    document.querySelector('.modal__titulo').innerHTML = '';
  }
});

function clean() {
  var tamaño = document.getElementsByClassName('form__input');

  for (var j = 0; j < tamaño.length; j++) {
    tamaño[j].checked = false;
  }
}

exports.clean = clean;

},{}]},{},[1]);
