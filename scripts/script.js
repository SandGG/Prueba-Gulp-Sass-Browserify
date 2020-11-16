import 'regenerator-runtime/runtime';
import {Articulo} from './articulo';
import {cleanInputs, getDatos} from './funcionalidad';

const listInventario = [];
var id = 0;

document.querySelector('#add').addEventListener('click', () => {
    id++;
    let descripcion = document.querySelector('#add_descripcion').value;
    let valor = document.querySelector('#add_valor').value;
    let categoria = document.querySelector('#opc').value;
    if (descripcion != '' && valor != '' && categoria != '') {
        const objArticulo = new Articulo (id, descripcion, valor, categoria);
        listInventario.push(objArticulo);
        cleanInputs();
    } else {
        console.log('Faltan datos');
    }
});

document.querySelector('#request').addEventListener('click', () => {
    document.querySelector('#list').innerHTML = '<tr><td>ID</td><td>Descripcion</td><td>Valor</td><td>Categoria</td></tr>';
    request();
});

const getData = () => {
    return new Promise((resolve, reject) => {
        if (id == 0) {
            reject(new Error ('Inventario vacio'));
        }
        setTimeout(() => {
            resolve(listInventario);
        }, 2000);
    });
}

async function request () {
    try {
        const requestData = await getData();
        console.log(requestData);
        getDatos(requestData);
    } catch (e) {
        console.log(e.message);
    }
} 