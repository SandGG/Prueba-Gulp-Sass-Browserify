(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cliente = void 0;

class Cliente {
  constructor(nombre, pago) {
    this.nombre = nombre;
    this.pago = pago;
  }

  imprimir() {
    return `El cliente ${this.nombre}, uso el metodo de pago: ${this.pago}`;
  }

}

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
  let x = document.getElementsByClassName('tabs');

  for (let i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }

  document.querySelector(`#${cad}`).style.display = 'block';
  clean();
}

document.querySelector('.close').addEventListener('click', () => {
  document.querySelector('#modal').style.display = 'none';
  document.querySelector('.modal__text').innerHTML = '';
  document.querySelector('.modal__titulo').innerHTML = '';
});
document.querySelector('#modal').addEventListener('click', e => {
  if (e.target.id == 'modal') {
    modal.style.display = 'none';
    document.querySelector('.modal__text').innerHTML = '';
    document.querySelector('.modal__titulo').innerHTML = '';
  }
});

function clean() {
  let tamaño = document.getElementsByClassName('form__input');

  for (let j = 0; j < tamaño.length; j++) {
    tamaño[j].checked = false;
  }
}

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Orden = void 0;

class Orden {
  getDatos(tipo) {
    let tipoList = [];

    for (let i = 0; i < tipo.length; i++) {
      if (tipo[i].checked) {
        tipoList.push(tipo[i].value);
      }
    }

    let str = `<p class="modal__text"> Compro ${tipoList[0]} de: `;

    for (let i = 1; i < tipoList.length; i++) {
      if (i == tipoList.length - 1) {
        str += `${tipoList[i]}.</p>`;
      } else {
        str += `${tipoList[i]}, `;
      }
    }

    return str;
  }

}

exports.Orden = Orden;

},{}],4:[function(require,module,exports){
"use strict";

var _funcionalidad = require("./funcionalidad");

var _orden = require("./orden");

var _cliente = require("./cliente");
/*require('./funcionalidad');
var cliente = require('./cliente');
var orden = require('./orden');*/


var tipo = document.getElementsByClassName('form__input');
const pedirOrden = new _orden.Orden();
document.querySelector('#agregarMenu').addEventListener('click', () => {
  document.querySelector('.modal__text').innerHTML += pedirOrden.getDatos(tipo);
  (0, _funcionalidad.clean)();
});
document.querySelector('#terminarMenu').addEventListener('click', () => {
  document.querySelector('#modal').style.display = 'flex';
  let nombre = document.querySelector('#nombre').value;

  if (nombre != '') {
    let pago = document.querySelector('#opc').value;
    const addCliente = new _cliente.Cliente(nombre, pago);
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
