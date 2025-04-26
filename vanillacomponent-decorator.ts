
// Ejemplo sencillo de como funcionaria un decorador internamente en angular
// Un decorador es una funcion que recibe un argumento y devuelve otra funcion

function Component (config: { selector :string,template :string}) {
   return function (target: any) {
        // Aqui le estoy que el selector que esta aqui lo estoy configurando como selector
        // y el template como template
        // te enseño cono funciona internamente el decorador
        target.prototyupe.selector = config.selector; 
        target.prototype.template = config.template;
    }
}

// Esto es un componente de angular que un decorador que le vamos a pasar 
// Propiedades como desarrollador y vamos jugando con las cosas que le vamos pasando  

@Component({
    selector: 'my-component',
    template: '<h1>Hola desde el componente</h1>'
})

// 
class MyComponent {
    selector: string;
    template: string;
    title: string ="I'm a component";
}