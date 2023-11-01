
function saludar( nombre ) {
    // console.log( arguments );
    // console.log('Hola ' + nombre );
    return [1, 2];

    console.log('Soy un codigo que esta despues del return');
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
console.log( retornoDeSaludar[0], retornoDeSaludar [1] );

// saludar2( 'franchis' );

// saludarFlecha();
// saludarFlecha2('Genesis');


function sumar( a, b ) {
    return a + b;
}

const sumar2 = (a,b) => a + b;

console.log( sumar2(328, 56) );


function resta( h, e ) {
    console.log('El resultado de la resta es ', h - e);
}

resta(650, 65);

const resta2 = (h,e) => h - e;

console.log( resta2(969, 32) );


function multiplicar(numero1, numero2) {
    console.log('La multiplicacion del numero ', numero1, 'y', numero2, 'es igual a ', numero1 * numero2);
}

multiplicar(5, 5);


function dividir(x , y) {
    return x / y ;
}

const dividir2 = (x,y) => x / y;

console.log('Mi resultado es : ', dividir2(16,2));


function getAleatorio() {
    return Math.random();
}

// En una funcion de flecha, que no tenga llaves { }
// getAleatorio2()

const getAleatorio2 = () => Math.random();

console.log( getAleatorio2() );