
const name = 'Strider';

/* Se pueden declarar dos tipos de variables en una misma 
en este caso vemos que se puede hacer un numero o una cadena. Tambien se da el caso donde le asignamos 
un valor ecpecifico*/
    let hpPoints: number | string = 95; 
    hpPoints = 'Hola mundo'

    let hpPoints2: number | 'full' =95
    hpPoints2= 'full'

    const isAlive: boolean = true;

    console.log({name, hpPoints, isAlive});
    

export {};