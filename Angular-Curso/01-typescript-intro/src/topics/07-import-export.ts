//Al hacer importaciones se importa todo el archivo, por lo que se ejecutan las variables del archivo

import {Product, taxCalculation} from './06-function-destructuring'

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPad',
        price: 150
    }
];

const tax = 0.15;
const [total, tax1] = taxCalculation({products: shoppingCart, tax:tax})

console.log('Total', total);
console.log('Tax', tax1);


