
function registrarYModificarArgumentos 
(
  method: Function,
  context: ClassMethodDecoratorContext
){
  return function (...args: any[]) {
    const argsModificados = args.map((arg) => {
      typeof arg === 'string' ? arg.toUpperCase() : arg;
  }) 
  console.log(argsModificados);
  return method.apply(this, argsModificados);
}
}

// El decorador hara que cada ves que llame a saludar le aplicara mayusculas
class Saludar { 

@registrarYModificarArgumentos
 saludar(parametro: string) {
  console.log(`Hola ${parametro}`);
 }
}