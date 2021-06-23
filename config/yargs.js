const opciones = {
    base:{
        demand: true,
        alias: 'b'
    }, 
    limite:{
        default: 10,
        alias: 'l'
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opciones)
    .command('crear', 'Crea un archivo con la tabla de multiplicar', opciones)
    .help()
    .argv;

module.exports = {
    argv
};