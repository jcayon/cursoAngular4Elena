//Tipos de datos primitivos 

// string
let mensajes: string;
mensajes = 'Hola Mundo';

//number
let resultados: number;
resultados = 9.5;

// let resultado error

//Boolean;
let mayorEdad: boolean;


// Array

let frutas: string[];
let coches: Array<string>;

coches= ['Renault', 'Opel', 'Mercedes'];

// Any ("eliminar la inferencia")

let edad: any = 35;
edad = 'Cuarenta';

// Enum ( van indexado de 0 a n)

enum TallaPantalon {small, medium, large};

let pantalon: TallaPantalon = TallaPantalon.small; // devuelve 0 

enum TallaZapato {uk5 = 43, uk6 = 45}

let zapatilla: TallaZapato = TallaZapato.uk5; // console.log (zapatilla)  devuelve 43

//Void

funtion saludo(): void { //tipado de salida de una funcion
   // console.log('Hola Mundo');
}

let variable: void = undefined;
variable = null;

//tipado de objetos 

let jugador: object;

//jugador = 'Ronaldo'; // protesta proque no es objeto si no string

jugador = { nombre: 'Cristiano', apellidos: 'Ronaldo'};

let jugador2: {nombre: string, edad: number};

jugador2 = {nombre: 'Cristiano' , edad: 40};


// Tipos de Union 

let fechaNacimiento: number | string;

fechaNacimiento = 12;
fechaNacimiento = 'doce';

type id = string | number; 

let ref: id;

ref = 123;
ref = 'aaaaa';



// tipos de union complejos

type perro = 'Pastor Aleman' | 'Dogo' | 'Mastin';

let toby: perro = 'Dogo';

// tipos en  funciones

function suma (a: number, b:number): number {
    return a + b ;
}

// suma(2,'2'); error

// parametros opcionales

function multi (a: number, b:number, mensaje?: string): string {
    let resultado = a * b;
    if(mensaje){
        return mensaje + resultado;
    } else {
        return `El resultado es ${resultado}`; //te convierte el resultado en string
    }
} 

multi (2, 4);
multi (2, 4, 'hola');

// tipos genéricos ( "el tipo se define en tiempo de ejecución")

//no se el tipo de parametro pero quiero q a la salida sea el mismo tipo

function devuelveResultado<T> (a : T) : T{
    return a;
}

devuelveResultado<string> ('hola');
devuelveResultado<number> (12);















