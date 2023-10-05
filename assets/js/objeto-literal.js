
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
    }

};

console.log('personaje', personaje);
console.log('Nombre', personaje.nombre );
console.log('trajes', personaje.trajes);
console.log('trajes: ', personaje.trajes[1]);
console.log('ubicacion', personaje.direccion.ubicacion);
console.log('lat', personaje.coords.lat);

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
