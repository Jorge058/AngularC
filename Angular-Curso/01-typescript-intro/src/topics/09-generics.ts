//? Genericos
//* Nos sirven para cuando no sabes el tipo de dato que vamos a utilizar, por lo que el programa determina el tipo 

/*Debemos tratar de no usar el tipo de dato any, ya que podemos hacer muchas cosas 
con un valor asi, pero no vamos a obtener ayuda de nuestro intellisense*/


//export function whatsMyType(argument: any): any {

export function whatsMyType <T>(argument: T): T {  //*Marcamos que nuestra funcion va a usar un generico

    return argument
}

//Nuestro programqa va a inferir el tipo de dato que se envia, pero tambien podemos indicarlo mediante <>
let amIString = whatsMyType<string>('Hola mundo');
let amINumber = whatsMyType<number>(100);
let amIArray = whatsMyType<number[]>([1,2,3,4,5]);

console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));

