//?El optional chnaging es usar los atributos que pueden ser o no declarados
//Creamos una interfaz en donde ponemos los datos que va a llevar nuestro pasajero
interface Passenger {
    name: string;
    children?: string[];
}
 //Creamos los pasajeros
const passenger1: Passenger = {
    name: 'Jorge'
}

const passenger2: Passenger = {
    name: 'Melissa',
    children: ['Natalia', 'Elizabeth']
}

// Creamos la funcion en donde vemos los pasajeros con sus atributos
const returnChildrenNumber = (passenger: Passenger) => {
/* 
    ? En este caso usamos el change porque pueden o no tener hijos, y si no tienen es undefined,
    ? pero usamos el or para que en vez de undefined mande 0 cuando no hay nada
 */    
    const howManyChildren = passenger.children?.length || 0;
/*     
    * En la siguiente linea usamos el operador que indica que estamos seguros que nunca enviaremos un null
    const howManyChildren = passenger.children!.length;
 */    console.log(passenger.name , howManyChildren);
}

returnChildrenNumber(passenger2);
