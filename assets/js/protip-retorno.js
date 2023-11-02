
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

