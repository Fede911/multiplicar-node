// Requires
const colors = require('colors');
const  argv  = require('./config/yargs').argv;

const { listarTabla ,crearArchivo } = require ('./multiplicar/multiplicar');



//console.log(process.argv);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo (argv.base, argv.limite)
            .then(archivo => console.log(`Archivo ${ archivo.bgYellow.red } creado!`))
            .catch(e => console.log(e));
        break;
    
    default:
        console.log('Comando no reconocido!');
        break;
}

