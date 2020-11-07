'use strict';

var _funcionalidad = require('./funcionalidad');

var _orden = require('./orden');

var _orden2 = _interopRequireDefault(_orden);

var _cliente = require('./cliente');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tipo = document.getElementsByClassName('form__input'); /*require('./funcionalidad');
                                                           var cliente = require('./cliente');
                                                           var orden = require('./orden');*/

var pedirOrden = new _orden2.default();

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
