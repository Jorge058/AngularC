//? Decoradores nos ayudan si creamos librerias o frameworks
//? sON FUNCIONES ESPECIALES QUE SE ADJUNTAN A DIFERENTES OBJETOS

function classDecorator<T extends { new(...args:any[]):{}}>(constructor: T){

    return class extends constructor {
        newProperty = 'New Property';
        hello = 'override'
    }
}

//cOMO PODEMOS VER, SE JUNTAN LAS PROPIEDADES DE NUESTRO DECORADOR A LA SUPERCLASE
@classDecorator
export class SuperClass {

    public myProperty: string = 'Abc123'

    print(){
        console.log('Hola mundo');
    }
}

console.log((SuperClass));

//instancia de la clase
const myClass = new SuperClass();
console.log(myClass);

