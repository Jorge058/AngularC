//Es una manera de crearse un molde para hacer instancias
/*En typescript funcionan un poco distinto a js */

export class Person {
  /*   public name: string;
    private address: string;*/

    constructor(public name: string, private address: string = 'No address'){
    }
}

export class Hero extends Person {

    /*Podemos llamarla aqui o dentro del constructor, dentro es mejor ya que se solicitan los datos de la clase persona y llegan desde fuera
    (En azul los cambios para usar la composicion)

    */    
    //? public person: Person;
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    ){
        super(realName, 'New York')

       //? this.person = new Person (realName);
    }
}

const Tony = new Person('Ironman', 'New York');
const Ironman = new Hero('Ironman', 45, 'Tony');

//?const tony = new Person('Ironman', 'New York');
//?const Ironman = new Hero('Ironman', 45, 'Tony', tony);

console.log(Ironman);

/* Solo aparecerá el valor de name porque el otro atributo es privado pero como typescript lo traduce a
js entonces si podemos acceder a address */
console.log(Ironman);

/* La composicion se refiere a que podemos llamar un objeto dentro de otro sin la necesidad de extender las
clases, de esta manera si se aplican cambios en una clase la segunda no se vera afectada*/
