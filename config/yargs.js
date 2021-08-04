// importacion de yargs especificamente los argumentos
const yargs = require('yargs')
    .option(
        'b', {
            alias: 'base',
            type: 'number',
            demandOption: false,
            describe: 'Es la base de la tabla de multiplicar'
        }, )
    .option(
        'l', {
            alias: 'lista',
            type: 'boolean',
            default: false,
            describe: 'Muestra la tabla en consola'

        }
    )
    .option(
        'h', {
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'Indica el número hasta el cual se va a multiplicar'

        }
    )
    .check(
        (yargs, base) => {
            if (isNaN(yargs.b)) {
                throw 'la base no tiene un número';
            }
            return true;
        }
    )

.argv;

module.exports = yargs;