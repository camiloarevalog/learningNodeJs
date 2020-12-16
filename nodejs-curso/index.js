const fs = require('fs');

fs.writeFile('./texto.txt', 'linea uno', function (err) {
    if (err) {
        console.log(err);
    }
    console.log('Archivo creado');
});

console.log('AUltima linea');


