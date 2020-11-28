# Prueba-Gulp-Browserify-Sass

## 1. Preparar para Babel y Browserify 
1.1 Crear archivo package.json
```scriptshell
npm init -y
```
1.2 Instalar Babel
```scriptshell
npm install –save-dev @babel/cli
```
1.3 Instalar preset
```scriptshell
npm install –save-dev babel-preset-env
```
1.4 Copiar en el package.json:
```json
{
 "env": {
    "development": {
      "targets": {
        "browsers": [
          "last 2 versions",
          "safari >= 7"
        ]
      }
    }
  }
}
```
1.5 Instalar Browserify
```scriptshell
npm install --save-dev babelify @babel/core
npm i -D browserify babelify
```
1.6 Instalar preset-es2015
```scriptshell
npm install --save-dev babel-preset-es2015 
```

## Preparar para Gulp 
1.2.1 Instalar Gulp
```scriptshell
npm install gulp
```
1.2.2 Instalar vinyl
```scriptshell
npm install vinyl-source-stream --save-dev
```

## Preparar para Sass 
1.3.1 Instalar gulp-sass
```scriptshell
npm install --save-dev gulp-sass 
```
1.3.2 Instalar sass-module-importer
```scriptshell
npm i sass-module-importer --save-dev
```

## Armado del archivo gulpfile.js 
1.4.1 Crear archivo gulpfile.js
1.4.2 Copiar en el gulpfile.js:
```javascript
const  gulp  = require('gulp'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    sass = require('gulp-sass'),
    moduleImporter = require('sass-module-importer')
; 

function js () {
    return  browserify('scripts/script.js')
    .transform(babelify, {presets: ['@babel/preset-env']})
    .bundle()
    .pipe(source('./'))
    .pipe(gulp.dest('dist/main.js'));
}

function css (){
    return gulp.src('styles/estilo.scss')
    .pipe(sass( { importer: moduleImporter() } ))
    .pipe(gulp.dest('dist'));
}

function watch () {
    gulp.watch('scripts/*.js', js); 
    gulp.watch('styles/*.scss', css);
}

exports.default = gulp.series(js, css);
exports.watch = watch;		
```

> Nota: No olvides crear el archivo .gitignore para no subir la carpeta node_modules al repositorio 

## Import para .js
Main.js
```javascript
console.log('entra');

import {mensajeOtro} from './otro';

mensajeOtro();
```
Otro.js
```javascript
export function mensajeOtro () {
    console.log('Entra a Otro') 
}
```

## Import para .scss 
Main.scss
```scss
@import 'otro';

body {
    background: $color-background;
}
```
Otro.scss
```scss
$color-background: pink;
```

## 2. Preparar para trabajar con peticiones http
2.1 Crear archivo package.json
```scriptshell
npm init -y
```
2.2 Instalar Express
```scriptshell
npm install express --save
```
2.3 Crear archivo index.js  
2.4 Copiar en el archivo index.js
```javascript
const express = require('express');
const app = express();

app.use('/static', express.static(__dirname + '/static'));
app.listen(3000);
```
2.5 Crear carpeta static y cargar con todo lo que quieras relacionado con el servidor
> Nota: Se debe hacer referencia a los archivos cargados al servidor desde la ruta '/static/archivo'
## 3. Ejecución de la petición http
3.1 Iniciar index.js
```scriptshell
node index.js
```
3.2 Copiar en el navegador para ver el servidor
```
http://localhost:3000/static/otro.html
```
3.3 Para index colocar
```
http://localhost:3000/static/
```
