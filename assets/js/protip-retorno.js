
// function crearPersona( nombre, apellido ) {
//    return {
//        nombre: nombre,
//        apellido: apellido
//    }
//}

const crearPersona = ( nombre, apellido ) => {  
    return {nombre,apellido }
}

const persona = crearPersona( 'Franchesca', 'Rosario' );
console.log( persona );

function imprimeArgumentos() {
    console.log( arguments );
}

const imprimeArgumentos2 = ( edad, ...args ) => {
    console.log({edad, args});
    return args;
}

const [ casado, vivo, nombre, animal ] = imprimeArgumentos2(20, true, false, 'Pablo', 'Gato');
console.log({ casado, vivo, nombre, animal });


const { apellido } = crearPersona( 'Franchesca', 'Rosario' );
console.log({ apellido });


const Maria = {
    nombre: 'Maria Rodriguez',
    codeName: 'SuperMan',
    vivo: false,
    edad: 18,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

//const imprimePropiedades = ( personaje ) => {

// console.log( 'nombre',personaje.nombre );
// console.log( 'codeName',personaje.codeName );
// console.log( 'vivo',personaje.vivo );
// console.log( 'edad',personaje.edad );
// console.log( 'trajes',personaje.trajes );

//}

const imprimePropiedades = ({ nombre, codeName, vivo, edad, trajes}) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});

}

imprimePropiedades( Maria );