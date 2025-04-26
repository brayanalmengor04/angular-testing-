type methodDecoratorStructure =(
    method:Function,
    context:ClassMethodDecoratorContext
)=>PropertyDescriptor | void;

function logMethod(method:Function, context: ClassMethodDecoratorContext){
    const originalMethod = method
   return function(...args:any[]){ 

    console.log(`Calling ${String(context.name)} with args: ${args}`);  
    // que va hacer va agarrar el contexto original osea (suma) y con que parametros con args (a y b)
    const result = originalMethod.apply(this, args); 
    console.log(`Method ${String(context.name)} returned: ${result}`); 
    return result; // devuelve el resultado de la suma
   }
}
class Calculadora {    
    @logMethod
    sum(a:number,b:number){
        return a+b;
    }
}
const calc = new Calculadora();
calc.sum(2,3); // Calling sum with args: 2,3
// Method sum returned: 5