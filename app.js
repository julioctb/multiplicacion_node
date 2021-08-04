const { multiplicar } = require('./helpers/multiplicar');
const yargs = require('./config/yargs');

require('colors');

console.clear();



// cuando se llama por medio de los procesos de la consola
/* const [, , arg3] = process.argv;
const [, base] = arg3.split('='); */



// comando para iniciar el la multiplicacion

multiplicar(yargs.b, yargs.l, yargs.h)
    .then(nombreArchivo => console.log(nombreArchivo.green, 'creado'))
    .catch(err => console.log(err));