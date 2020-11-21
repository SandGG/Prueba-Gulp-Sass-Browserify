const http = new XMLHttpRequest();
const response = document.querySelector('#response');
const get = document.querySelector('#get');

get.addEventListener('click', function () {
    http.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        insertData(this);
      }
    };
    http.open('GET', 'inventario.xml', true);
    http.send();
});

function insertData(xml) {
    const xmlDoc = xml.responseXML;
    let x = xmlDoc.getElementsByTagName('articulo');
    let table = '<tr class="table__tr"> <th class="table__td">ID</th><th class="table__td">Descripcion</th><th class="table__td">Valor</th><th class="table__td">Categoria</th> </tr>';
    console.log(x.length);
    for (i = 0; i < x.length; i++) {
        table += '<tr class="table__tr"><td class="table__td">' +
        x[i].getElementsByTagName('id')[0].textContent +
        '</td><td class="table__td">' +
        x[i].getElementsByTagName('descripcion')[0].textContent +
        '</td><td class="table__td">' +
        x[i].getElementsByTagName('valor')[0].textContent +
        '</td><td class="table__td">' +
        x[i].getElementsByTagName('categoria')[0].textContent +
        '</td></tr>';
    }
    response.innerHTML = table;
}