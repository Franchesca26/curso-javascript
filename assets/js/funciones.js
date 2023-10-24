
function saludar( nombre ) {
    console.log( arguments );
    console.log('Hola ' + nombre );
    return 1;
}

const saludar2 = function( nombre ) {
    console.log('Hola ' + nombre );
}

const saludarFlecha = () => {
    console.log('Hola Flecha');
}

const saludarFlecha2 =( nombre ) => {
    console.log('Hola ' + nombre );
}



const retornoDeSaludar = saludar( 'franchesca', 20, true, 'Republica Dominicana' ); // 1
console.log({ retornoDeSaludar });

// saludar2( 'franchis' );

saludarFlecha();
saludarFlecha2('Genesis');