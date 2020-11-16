# Prueba-Gulp-Browserify-Sass

## -- Preparar para Babel y Browserify –
1. Crear archivo package.json
	```scriptshell
npm init -y
```
2. Instalar Babel
	npm install –save-dev @babel/cli
3. Instalar preset
	npm install –save-dev babel-preset-env
4. Copiar en el package.json:
,
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
5. Instalar Browserify
//npm install --save-dev babelify @babel/core
  npm i -D browserify babelify
6. Instalar preset-es2015
  npm install --save-dev babel-preset-es2015 

# -- Preparar para Gulp –
1. Instalar Gulp
  npm install gulp
2. Instalar vinyl
	npm install vinyl-source-stream --save-dev

## -- Preparar para Sass –
1. Instalar gulp-sass
  npm install --save-dev gulp-sass 
2. Instalar sass.module-importer
  npm i sass-module-importer --save-dev

## -- Armado del archivo gulpfile.js –
1. Crear archivo gulpfile.js
2. Copiar en el gulpfile.js:
const  gulp  = require('gulp'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    sass = require('gulp-sass'),
    moduleImporter = require('sass-module-importer')
; 

function js () {
    return browserify('script.js')
    .transform(babelify, {presets: ['@babel/preset-env']})
    .bundle()
    .pipe(source('./'))
    .pipe(gulp.dest('armado.js'));
}

function css (){
    return gulp.src('./estilo.scss')
    .pipe(sass( { importer: moduleImporter() } ))
    .pipe(gulp.dest('./'));
}

function watch () {
    gulp.watch('*.js', js); 
    gulp.watch('*.scss', css);
}

exports.default = gulp.series(js, css);
exports.watch = watch;									

Nota: No olvides crear el archivo .gitignore para no subir la carpeta node_modules al repositorio 

## -- Import para .js –-
Main.js
console.log('entra');

import {mensajeOtro} from './otro';

mensajeOtro();

Otro.js
export function mensajeOtro () {
    console.log('Entra a Otro') 
}

## -- Import para .scss --
Main.scss
@import 'otro';

body {
    background: $color-background;
}

Otro.scss
$color-background: pink;
