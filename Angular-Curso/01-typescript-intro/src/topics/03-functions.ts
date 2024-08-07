/* Iniciamos funciones con tipos de datos */
function addNumbers(a:number, b:number):number {
    return a+b;
}
//Funcion flecha con string 
const addNumbersArrow = (a: number, b: number):string => {
    return `${a+b}`;
}
function multiply( firstNumber:number, secondNumber?:number, base:number = 2){
    return firstNumber*base;
}

/* const result:number = addNumbers(1,2)
const result2: string = addNumbersArrow(1,2)
const multiplyresult:number = multiply(5)
console.log({result, result2, multiplyresult}); */

//Funciones con objetos 

    //Creamos una interfaz
    interface Character {
        name: string;
        hp: number;
        showHp: () => void;
    }

    //Funcion para curar el personaje
    const healCharacter = (character: Character, amount: number) => {

        character.hp += amount;

    }

    //Creamos el personaje utilizando el character 
    const strider: Character = {
        name: 'Strider',
        hp: 50,
        showHp() {
            console.log(`Puntos de vida ${this.hp}`);
        }
    }

    //LLamamos la funcion para curar al personaje e imprimimos
    healCharacter(strider,20);
    strider.showHp();
    

