//Tipos de datos primitivos 
// string
var mensajes;
mensajes = 'Hola Mundo';
//number
var resultados;
resultados = 9.5;
// let resultado error
//Boolean;
var mayorEdad;
// Array
var frutas;
var coches;
coches = ['Renault', 'Opel', 'Mercedes'];
// Any ("eliminar la inferencia")
var edad = 35;
edad = 'Cuarenta';
// Enum ( van indexado de 0 a n)
var TallaPantalon;
(function (TallaPantalon) {
    TallaPantalon[TallaPantalon["small"] = 0] = "small";
    TallaPantalon[TallaPantalon["medium"] = 1] = "medium";
    TallaPantalon[TallaPantalon["large"] = 2] = "large";
})(TallaPantalon || (TallaPantalon = {}));
;
var pantalon = TallaPantalon.small; // devuelve 0 
var TallaZapato;
(function (TallaZapato) {
    TallaZapato[TallaZapato["uk5"] = 43] = "uk5";
    TallaZapato[TallaZapato["uk6"] = 45] = "uk6";
})(TallaZapato || (TallaZapato = {}));
var zapatilla = TallaZapato.uk5; // console.log (zapatilla)  devuelve 43
//Void
funtion;
saludo();
void { //tipado de salida de una funcion
// console.log('Hola Mundo');
};
var variable = undefined;
variable = null;
//tipado de objetos 
var jugador;
//jugador = 'Ronaldo'; // protesta proque no es objeto si no string
jugador = { nombre: 'Cristiano', apellidos: 'Ronaldo' };
var jugador2;
jugador2 = { nombre: 'Cristiano', edad: 40 };
// Tipos de Union 
var fechaNacimiento;
fechaNacimiento = 12;
fechaNacimiento = 'doce';
var ref;
ref = 123;
ref = 'aaaaa';
var toby = 'Dogo';
// tipos en  funciones
function suma(a, b) {
    return a + b;
}
// suma(2,'2'); error
// parametros opcionales
function multi(a, b, mensaje) {
    var resultado = a * b;
    if (mensaje) {
        return mensaje + resultado;
    }
    else {
        return "El resultado es " + resultado; //te convierte el resultado en string
    }
}
multi(2, 4);
multi(2, 4, 'hola');
// tipos genéricos ( "el tipo se define en tiempo de ejecución")
//no se el tipo de parametro pero quiero q a la salida sea el mismo tipo
function devuelveResultado(a) {
    return a;
}
devuelveResultado('hola');
devuelveResultado(12);
