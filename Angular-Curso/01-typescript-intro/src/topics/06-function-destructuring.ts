//Para el ejercicio 7 debemos exportar la interfaz por lo que le añadimos un export

export interface Product{
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
}

export interface  TaxCalculationOptions {
    tax:number;
    products: Product[];
}

export function taxCalculation(options: TaxCalculationOptions): number[] {
    
    let total = 0
    options.products.forEach( ({price}) => {
        total += price
    })
    /* options.products.forEach (product => {
        total+= product.price;
    }) */

    return [total, total * options.tax];
}


const shoppingCart = [phone, tablet]
const tax = 0.15;

/* const result = taxCalculation({products:shoppingCart, tax: tax})
console.log('Total', result[0]);
console.log('Tax', result[1]); */


//Tarea, ddesestructrar el código
    //Desestrctura de objetos
    const {description, price} = phone; 
    console.log('Descripcion: ', description, 'Precio: ',price);
    const {description:descriptiont, price:pricet} = tablet; 
    console.log('Descripcion: ', descriptiont, 'Precio: ',pricet);

    //Desestructura de funcion
    const [total, taxtotal] = taxCalculation({products: shoppingCart, tax: tax})
    console.log('Total',total );
    console.log('Tax', taxtotal);

    //Desestructura de arreglos
    const [product1, product2] = shoppingCart
    console.log(product1, product2);