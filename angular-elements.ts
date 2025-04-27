// Angular es un tipo de plataforma  que es un conjunto de frameworks 
// Es una plataforma mas que un frameworks (porque conteiene express, material, etc)

// Es una plataforma estructal  
// Brinda funcionalidad a algo que no lo tenia antes
 
// Lo que le diferencia que angular a diferencia de react 
// tiene cosas internas que renderizan el dom  de forma interna y react no lo hace react lo hace
// de forma que el desarrollador lo haga 

// Tips cuando se trabaja uno en un software siempre es depende 
// depende de que? 
/**
 *  ->> Recursos 
 * -->> Limitaciones
 * -->> Requerimientos 
 * 
 * esto nos hara elegir la tecnolgia para desarrollar un software
 */

// Que es un componente? ->> es la unidad logica MINIMA=>> tenemos que manejar una cosa por vez 

// Example de un componente 
/**
 * Login 
 * *Formulario de login , va pegarle un servicio validar , renderizar lista etc
 * 
 * Tips para dividirlo bien : 
 *  *Renderizar una lista de persajes 
 *   *Lista de personajes 
 *      . El personaje 
 *          -editar personaje
 *          -eliminar personaje
 * 
 */


// Esta el componente tonto y el Inteligente

// Patron contenedor / presentacional 
// Scream Architecture 
// Clean Architecture
// Single Source of Truth (SSOT)

// Presentacional ->> usar para mostrar datos y mostra a la UI 
// Container -->> es el que maneja la logica de negocio y tambien comunicacion con entidades externas

@Component({
    standalone: true,
    selector: 'app-user-container',
    template : `<app-user-container [Username]="userNameSignal()/>"` 
    imports: [UserProfileComponent ],

})

export class UserContainerComponent {
    userService = inject(UserService); 
    userNameSignal = this.userService.userNameSignal;
} 

// Presentacional 
@Component({
    standlone: true,
    selector: 'app-user-profile', 
    template: `<div>{{userName}}</div>`, 
    imports : [ReactiveFormsModule],
})

export class UserProfileComponent {
    username : string="Brayan";

}

// EL TEMA DE LOS MODULOS ANTES  se usaba bgModule 
// Es como una caja que importas todo lo que se necesita 
// Ahora con angular se utiliza un atributo o funcional extra llamada 
// Standalone que permite importar los modulos de forma independiente
// Y internamente cada componente tiene su propio modulo
// Mediante imports 


// Desde un elemento padre si nosotros llamamos al hijo con imports 
// Ejemplo : (IMPORTANTE)

/**
 * @Component({
    standalone: true,
    selector: 'app-user-container',
    template : `<app-user-container [Username]="userNameSignal()/>"` 
    imports: [UserProfileComponent ], aqui se importa el modulo del hijo
})
 *  

entonces en User Profile recien comienza a importar el modulo de ReactiveFormsModule
// Y no el padre 
// Para que funcione asi necesita el standalone true
 */

// Con un commando que es ng g @angular/core:standalone 
// Esto hace que de un proyecto que tenga ng module lo convierta en standalone
 // Hay que ejecutarlo 3 veces 
 // 1. convierte las directivas a standalone
 // 2. elimina los modulos ngModule inecesarios 
 // 3. Seleciona la api bootsrap usando standalone  


 // Temas directivas  
 // QuE ES UNA DIRECTIVA ? ->> Son las cuales van a dar ese toque estructural a la aplicacion
 // Son aquellas que brindas funcionalidad a algo extra a algo que no lo tiene 

// Angular tenia ->> ngClass ,ngStyle , ngIf, ngFor 

// Directiva Estructural ->> 
// Ejemplos <div *ngIf="isVisible"> </div> 
// <div *ngFor="let item of items"> </div>

// Directivas de Atributo ->>
// no se recomiendan usar 
// Ejemplos <div [ngClass]="{'class': isVisible}"> </div>
// <div [ngStyle]="{'color': color}"> </div>

// Ejemplo de una directiva estructural

// <div [ngClass]= "{'active': isActive }"> </div>


// Esta es una directiva estructural eso significa que esta modificando el DOM  
// Y no es una directiva de atributo porque no modifica el DOM
@Directive ({
    standalaone: true,
    selector:'[appShowScreenSize]',

})

export class appShowScreenSizeDirective implements OnInit {
    @Input () appShowScreenSize: 'small' | 'medium' | 'large' ;

    construct(){
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
    }{}
    ngOnInit(){
        // Son Hooks que se ejecutan cuando el componente se inicializa
        // Son ciclos de vida de un componente
        this.updateView();
        // Tamos diciendo cada vez que se inicie este componente 
        // vas a llamar actualizar vista y resize tambien lo vas a llamar 

        window.addEventListener('resize', this.updateView.bind(this));
        
    }

    private updateView(){
        const width = window.innerWidth;
        this.viewContainer.clear();

        // Si esto se puede rendeizar o no lo agrego en el templatereft
        if (this.shouldShowContent(width)) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }


    private shouldShowContent(width: number): boolean {
        if (this.appShowScreenSize === 'small' && width < 600) {
            return true;    
        }
        if (this.appShowScreenSize === 'medium' && width >= 600 && width < 1024) {
            return true;
        }
        if (this.appShowScreenSize === 'large' && width > 1024) {
            return true;
        }
        return false;
    }
}

// En el html lo usariamos asi  
// <div *appShowScreenSize="small">Contenido para pantalla pequeñas</div>

// Ahora una directiva de atributo
@Directive ({
    standalone: true,
    selector: '[appHighlight]',

})

export class HighlightDirective{
    constructor(private element: ElementRef , private renderer: Renderer2){}

    @HostListener('mouseenter') onMouseEnter() {}

        this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'yellow');
  
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.renderer.removeStyle(this.element.nativeElement, 'backgroundColor');
    }
}

// Se utilizaria asi ->> <p appHighlight> Pasa el mause para resaltar el contenido </p>
// Para que sirve para utilizarlo en lugares donde se repita muchas veces
 // Reutilizar el codigo y no repetirlo

// Service 

// Pregunta tecnica de entrevista : 

// Porque piensan que un serivicio es mejor para compartir informacion que un componente ?
// porque el servicio es un singleton y el componente no lo es
// que quiere ddecir eso ? es que hay una unica instancia del servicio  
// Esa instancia se comparte a traves de la app ->> la infor que este contiene se comparte atravez de toda la app 


// Por que un componente tiene un ciclo de vida y se destruye 
// un servicio es inyectable y se puede inyectar en cualquier parte de la app

// ProviderIn : root ->> unica instancia de la app
// Ejemplo de servicio  
@Injectable({

    providedIn : 'root',

})

export class AppService {
    isAuthenticated:boolean = false; // Variable que indica si el usuario esta autenticado o no

    changeAuthenticationStatus() {
        this.isAuthenticated = true // Cambia el estado de autenticacion  
    }
       
    login(){
        // Aqui podemos hacer una llamada http a un endpoint de login
        console.log('user no aunthenticated');
    }
}


// Ejemplo 
@Injectable({
    providedIn: 'any'
})

export class LoginService {
    log(message: string) {
        console.log('log',message);
    }
}

// por el componente

@Component({
    selector: 'app-local',
    privaders: [LocalService], // Esto hace que el servicio sea local y no global
    template: `
        <p> cotenido del componente local</p>
    `,
})


export class LocalComponent {
    // Tenemos el servicio inyectado. 
    localService: LocalService = inject(LocalService); // Inyectamos el servicio local
}
