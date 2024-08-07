//Tarea

interface Superhero {
    name: string,
    age: number,
    //Si tenemos un objeto dentro de otro se recomienda usar una interfaz para ese objeto
    address: Address/* {
        street:string,
        country: string,
        city: string,
    } */,
    showAddress: () => string; 
}

//Interfaz para el objeto dentro del objeto
interface Address{
    street: string,
    country: string,
    city: string
}

const superHeroe: Superhero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress(){
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}

const address = superHeroe.showAddress();
console.log(address);
