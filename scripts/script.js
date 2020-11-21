var id = 0;
var text= '<inventario>';
const filename = 'inventario.xml';

document.querySelector('#add').addEventListener('click', () => {
    id++;
    let descripcion = document.querySelector('#add_descripcion').value;
    let valor = document.querySelector('#add_valor').value;
    let categoria = document.querySelector('#opc').value;
    if (descripcion != '' && valor != '' && categoria != '') {
        saveData(id, descripcion, valor, categoria);
        cleanInputs();
    } else {
        console.log('Faltan datos');
    }
});

document.querySelector('#upload').addEventListener('click', () => {
    text += '</inventario>'
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/xml;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    document.body.appendChild(element);
    element.click();
  
    document.body.removeChild(element);
});

function saveData(id, descripcion, valor, categoria) {
    text += 
    `<articulo> 
        <id>${id}</id>
        <descripcion>${descripcion}</descripcion>
        <valor>${valor}</valor>
        <categoria>${categoria}</categoria>
    </articulo>`;
    console.log(text); 
}
  
function cleanInputs() {
    let inputs = document.getElementsByClassName('form__input');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
    document.querySelector('#opc').selectedIndex = 0;
}