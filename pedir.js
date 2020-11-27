const http = new XMLHttpRequest();
const get = document.querySelector('#get');
const response = document.querySelector('#response');

get.addEventListener('click', () => {   
  http.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      response.innerHTML = http.responseText;
    }
  };
  http.open('GET', 'http://localhost:3000/static/otro.html', true);
  http.send();
});