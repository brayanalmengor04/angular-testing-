// Un decorador es agregar funcionalidades extra a algo que no lo tiene 
// clase metodos , propiedades 

//Example 1 :  agregar una propiedad a una clase (add a property to a class)
// Un decorador de clase que se aplica a clases constructoras
function gentlemanApproves<T extends { new (...args: any[]): {} }>(
    constructor: T, // El constructor original de la clase
    context: ClassDecoratorContext // Corregimos aquí el tipo correcto de contexto
  ): T {
    // Puedes usar el contexto para acceder a metadatos de la clase, por ejemplo:
    console.log(`Decorating class: ${String(context.name)}`);
    // Podrías retornar una clase modificada o el mismo constructor
    return class extends constructor { 
        gentleman ="Yes"
    };
}

@gentlemanApproves
class MyClass{
    constructor(){}
}
const instancia = new MyClass();
// Diras para que sirve esto : 
// Digamos que hay varias clases que quieres ponerle la misma cosa 
// Creas un decorador y listo facil y sencillo en este caso la propiedad 
// Es importante porque angular si los utiliza 
console.log((instancia as any).gentleman)