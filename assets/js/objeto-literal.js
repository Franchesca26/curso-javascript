
let personaje = {
    nombre: 'Maria Rodriguez',
    codeName: 'SuperMan',
    vivo: false,
    edad: 18,
    coords: {
        lat: 34.034,
        ing: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War'
}; 

console.log('personaje', personaje);
console.log('Nombre', personaje.nombre );
console.log('codeName', personaje['codeName'] );

console.log('trajes', personaje.trajes);
console.log('trajes: ', personaje.trajes[1]);
console.log('trajes', personaje.trajes.length);

console.log('ultimo traje', personaje.trajes[ personaje.trajes.length - 1 ] );
console.log('ubicacion', personaje.direccion.ubicacion);
console.log('lat', personaje.coords.lat);

const x = 'vivo';
console.log('vivo', personaje [x] );

console.log('Ultima pelicula', personaje['ultima-pelicula'] );


// si el personaje esta vivo que imprima si esta vivo o no
if(personaje.vivo == true){
    console.log('vivo');
    console.log('el personaje ', personaje.nombre, 'esta vivo');

}else{
    console.log('muerto');
    console.log('el personaje ', personaje.nombre, 'esta muerto');
}

// si es mayor de edad si o no
if(personaje.edad >18){
    console.log('es mayor de edad');

}else{
    console.log('es menor de edad');

}

let franchesca = {
    nombre: 'Luisa',
    apellido: 'Rosario',
    edad: 21,
}

franchesca.altura = 5.2;
franchesca.apellido = 'cruz',
console.log(franchesca);


// Mas detalles

delete personaje.edad;
console.log( personaje );

personaje.casado = true;
personaje.trabaja = false;

const entriesPares = Object.entries( personaje );
console.log( entriesPares );




