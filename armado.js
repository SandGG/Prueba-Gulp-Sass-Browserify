(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cliente = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cliente = /*#__PURE__*/function () {
  function Cliente(nombre, pago) {
    _classCallCheck(this, Cliente);

    this.nombre = nombre;
    this.pago = pago;
  }

  _createClass(Cliente, [{
    key: "imprimir",
    value: function imprimir() {
      return "El cliente ".concat(this.nombre, ", uso el metodo de pago: ").concat(this.pago);
    }
  }]);

  return Cliente;
}();

exports.Cliente = Cliente;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clean = clean;
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

  document.querySelector("#".concat(cad)).style.display = 'block';
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

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Orden = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Orden = /*#__PURE__*/function () {
  function Orden() {
    _classCallCheck(this, Orden);
  }

  _createClass(Orden, [{
    key: "getDatos",
    value: function getDatos(tipo) {
      var tipoList = [];

      for (var i = 0; i < tipo.length; i++) {
        if (tipo[i].checked) {
          tipoList.push(tipo[i].value);
        }
      }

      var str = "<p class=\"modal__text\"> Compro ".concat(tipoList[0], " de: ");

      for (var _i = 1; _i < tipoList.length; _i++) {
        if (_i == tipoList.length - 1) {
          str += "".concat(tipoList[_i], ".</p>");
        } else {
          str += "".concat(tipoList[_i], ", ");
        }
      }

      return str;
    }
  }]);

  return Orden;
}();

exports.Orden = Orden;

},{}],4:[function(require,module,exports){
"use strict";

var _funcionalidad = require("./funcionalidad");

var _orden = require("./orden");

var _cliente = require("./cliente");

var tipo = document.getElementsByClassName('form__input');
var pedirOrden = new _orden.Orden();
document.querySelector('#agregarMenu').addEventListener('click', function () {
  document.querySelector('.modal__text').innerHTML += pedirOrden.getDatos(tipo);
  (0, _funcionalidad.clean)();
});
document.querySelector('#terminarMenu').addEventListener('click', function () {
  document.querySelector('#modal').style.display = 'flex';
  var nombre = document.querySelector('#nombre').value;

  if (nombre != '') {
    var pago = document.querySelector('#opc').value;
    var addCliente = new _cliente.Cliente(nombre, pago);
    document.querySelector('.modal__titulo').innerHTML += addCliente.imprimir();
    document.querySelector('#nombre').value = '';
    document.querySelector('#opc').selectedIndex = 0;
    (0, _funcionalidad.clean)();
  } else {
    document.querySelector('.modal__titulo').innerHTML = 'No se almaceno, faltó nombre';
    document.querySelector('.modal__text').innerHTML = '';
  }
});

},{"./cliente":1,"./funcionalidad":2,"./orden":3}]},{},[4]);
