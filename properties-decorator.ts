function mayus(_target: any , context : ClassAccessorDecoratorContext){
    return {
        get(this: any) {
            // Que hacemos aqui ? estamos transformando que cada vez que se acceda a la propiedad name se ejecute el decorador  
            // Haremos que siempre lo haga con mayusculas
            // por ejemplo lo tomaria como : "pepe" y lo transformaria a "PEPE"
            return this[`_${String(context.name)}`].toUpperCase()
        },
        set(this: any, value: string) {
            this[`_${String(context.name)}`] = value.toUpperCase
        }

    }
}
class Person {
    // Accessor property with a getter and setter
    // voy hacer que cada vez que se acceda a la propiedad name se ejecute el decorador
    // Haremos que siempre lo haga con mayusculas 
    @mayus
    accessor name : string 

    constructor(name: string) {
        this.name = name
    }
} 