const fs = require('fs');
const colors = require('colors');
const colorsSafe = require('colors/safe');

//module.exports.crearArchivo = (base) => {
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor de la base [${base}] no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor del límite [${limite}] no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(colorsSafe.green(`tabla-${base}-${limite}.txt`));
            }
        });
    });
}

let listarTabla = (base, limite) => {
    if (!Number(base)) {
        console.log(`La base [${base}] no es numérica`);
        return;
    }
    if (!Number(limite)) {
        console.log(`El límite [${limite}] no es numérico`);
        return;
    }

    console.log('========================='.green);
    console.log(`== Tabla del ${base}    =`.green);
    console.log('========================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}