/*require('./funcionalidad');
var cliente = require('./cliente');
var orden = require('./orden');*/

import clean from './funcionalidad';

var tipo = document.getElementsByClassName('form__input');
const pedirOrden = new orden ();

document.querySelector('#agregarMenu').addEventListener('click', () => {
  document.querySelector('.modal__text').innerHTML += pedirOrden.getDatos(tipo);
  clean();
});

document.querySelector('#terminarMenu').addEventListener('click', () => {
  document.querySelector('#modal').style.display = 'flex';

  let nombre = document.querySelector('#nombre').value;
  if (nombre != '') {
    let pago = document.querySelector('#opc').value;
    const addCliente = new cliente(nombre, pago);
    document.querySelector('.modal__titulo').innerHTML += addCliente.imprimir();

    document.querySelector('#nombre').value = '';
    document.querySelector('#opc').selectedIndex = 0;
    clean();
  } else {
    document.querySelector('.modal__titulo').innerHTML = 'No se almaceno, faltó nombre';
    document.querySelector('.modal__text').innerHTML = '';
  }
}); 
document.querySelector('#button_pizza').addEventListener('click', function() {openTab('pizzas')});
document.querySelector('#button_hamb').addEventListener('click', function() {openTab('hamburguesas')});
document.querySelector('#button_drinks').addEventListener('click', function() {openTab('bebidas')});

function openTab (cad) {
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

document.querySelector('#modal').addEventListener('click', (e) => {
  if (e.target.id == 'modal') {
    modal.style.display = 'none';
    document.querySelector('.modal__text').innerHTML = '';
    document.querySelector('.modal__titulo').innerHTML = '';
  }
}); 

function clean () {
  let tamaño = document.getElementsByClassName('form__input');
  for (let j = 0; j < tamaño.length; j++) {
    tamaño[j].checked = false;
  } 
}

export {clean};
class Orden {

  getDatos (tipo) {
    let tipoList = []
    
    for (let i = 0; i < tipo.length; i++) {
      if (tipo[i].checked) {
        tipoList.push(tipo[i].value);
      }
    }
    let str = `<p class="modal__text"> Compro ${tipoList[0]} de: `;
    for (let i = 1; i < tipoList.length; i++) {
      if (i == (tipoList.length-1)) {
        str += `${tipoList[i]}.</p>`;
      } else {
        str += `${tipoList[i]}, `;
      }
    }
    return str;
  }

}

module.exports = Orden;
class Cliente {
    constructor (nombre, pago) {
      this.nombre = nombre;
      this.pago = pago;
    }
  
    imprimir () {
      return `El cliente ${this.nombre}, uso el metodo de pago: ${this.pago}`;
    }
}

module.exports = Cliente;