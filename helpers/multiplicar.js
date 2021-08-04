const fs = require('fs');
const colors = require('colors');


const multiplicar = async(base, lista, limite) => { // cuando se usa async por default se retorna una promesa

    try {



        let salida = '';
        let consola = '';

        for (let i = 1; i <= limite; i++) {

            salida += `${base} x ${ i } = ${ base * i }\n`;
            consola += `${base} ${colors.red('x')} ${ i } ${colors.red('=')} ${ base * i }\n`;

        }

        if (lista) {

            console.log('========================');
            console.log(colors.bgRed(`  Tabla del  ${base}  `));

            console.log('========================');
            console.log(consola);

        }


        // se crea un archivo de texto con la salida

        fs.writeFileSync(`./salida/tabla del ${base}.txt`, salida);

        return `tabla del ${base}.txt`;


    } catch (error) {
        throw error;
    }

};

module.exports = {
    multiplicar
};