function cleanInputs() {
    let inputs = document.getElementsByClassName('form__input');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
    document.querySelector('#opc').selectedIndex = 0;
}

function getDatos(datos) {
    for (let i = 0; i < datos.length; i++) {
        let id = datos[i].id;
        let descripcion = datos[i].descripcion;
        let valor = datos[i].valor;
        let categoria = datos[i].categoria;
        document.querySelector('#list').innerHTML += `<tr class="table__tr"><td class="table__td">${id}</td><td class="table__td">${descripcion}</td><td class="table__td">${valor}</td><td class="table__td">${categoria}</td></tr>`;
    }
}

export {cleanInputs,getDatos}