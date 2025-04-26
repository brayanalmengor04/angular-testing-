// Puntos importantes cuando el bundle de angular => hace una transpilacion 
// La transpilacion es convertir lenguaje de alto nivel (TypesCript) a otro lenguaje a alto nivel (JavaScript)
// unglifying que es como hacer el codigo mas ilegible (transformar todod el codigo para que no sea legible)
// minificacion que hace sacar todos los espacio ---> osea todo en una sola linea 
// tree shaking como es que elimina o no toma en cuenta lo que no se este utilizando 


// Esto es un contrato -> que no se puede romper
interface User{
    name:String
    getName: ()=> string;
    setName: (name:string)=>void 
} 

class userClass{
    name:String;

    constructor(name:string){
        this.name= name;
    }

    getName(){
        return this.name;
    }
    setName(name:string){
        this.name=name;
    }
}

// Pregunta de entrevista = porque user de interfaz y userclass funcionan igual (porque cumple)
// El esquema tanto de la interfaz como de la clase
const user: User={
    name:"Brayan",
    getName:()=>{return "Brayan"},
    setName:(name:string)=>{}
} 

interface Alumno {
    grado:string
}

// Esto es como un extends (unifiacion)
// & CUmple con todo y | cumple con algunas de las dos 
type userType = User | Alumno  

const userAlias:userType={
    name:"Brayan",
    setName:(name:string)=>{},
    getName:()=>{return "Brayansito"},
    grado:"9LS2001"
}