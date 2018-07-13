class Jugador {
    // si no ponemos nada por defecto publicas
    public nombre: string;
    public dorsal: number;
    public goles: number = 0;


    // metodo constructor para luego intanciarlas

    constructor(nombre: string, dorsal: number, goles?: number){
        // this hace referencia al objeto "este"
        this.nombre = nombre;
        this.dorsal = dorsal;
        // como los goles los tengo definidos en el constructor no lo defino
        // y creamos un metodo para marcar goles
    }

    marcarGol(): void {
        this.goles++;
    }
    
}


let jugador1 = new Jugador('CR7', 7 );
jugador1.marcarGol();

// Constructor breve, método simplificado

class Player {
    // aqui hay que poner si o si es publico o privado para que sepa que no hay constructor mas arriba
    constructor(public nombre: string, public dorsal: number, public goles?: number){
        this.nombre = nombre;
        this.dorsal = dorsal;
        this.goles = goles ? goles : 0;
    }

    marcarGol(): void {
        this.goles++;
    }
}

let jugador2 = new Player('David', 1);

console.log(jugador2);

jugador2.goles = 10;

// modulos = son elementos que te permiten exportar a JS

export class Empleado {
     public nombre: string;
     public departamento: string;

     constructor( nombre: string, departamento: string){
         this.nombre = nombre;
         this.departamento = departamento;
     }
}





