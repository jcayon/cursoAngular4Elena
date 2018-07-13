interface Jugador {
    nombre: string;
    edad: number;
}

// como es interfaz no tiene metodo constructor 

let jugador1: Jugador;

jugador1 = {
    nombre: 'Sergio Ramos',
    edad: 22
}

// en la declaración literal del objeto 
// solo se pueden usar propiedades conocidas

let jugador2: Jugador = {
    nombre: 'Mesi',
    edad: 22,
  //  goles: 23  no se puede añadir porque no es un atributo creado

}

// pero podemos poner propiedades de objeto opcionales con ?

interface Equipo {
    tipo: string;
    marca: string;
    precioEuros?: number;
}

let equipo1 : Equipo =  {
    tipo: 'PC',
    marca: 'Asus',
   // precioEuros: 1000
}


