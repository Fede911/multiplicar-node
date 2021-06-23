// Requires
const fs = require('fs');
const colors = require('colors');

let data = '';

let listarTabla = ( base, limite = 10) => {
    
    if( !Number(base) ){
        reject (`El valor introducido ${base} no es un numero!`.bgRed);
        return;
    }else {
        // let data = '';

        for (let i = 0 ;  i <= limite ; i++){
            data += `${base} * ${i} = ${base * i} \n`.blue;    
        }
        console.log(data);
    }
}

let crearArchivo = ( base, limite=10 ) => {
    return new Promise ((resolve, reject) => {
        
        if( !Number(base) ){
            reject (`El valor introducido ${base} no es un numero!`);
            return;
        }else {

            let data = '';

            for (let i = 0 ;  i <= limite ; i++){
                data += `${base} * ${i} = ${base * i} \n`;    
            }

            //console.log(data);

            fs.writeFile(`tablas/tabla_${base}.txt`, data, (err) => {
                if (err) 
                    reject (err)
                else 
                    resolve(`tabla_${ base }.txt`);
            });
        }
    });
}

module.exports = { 
    listarTabla,
    crearArchivo

}

