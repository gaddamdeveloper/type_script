class Computer1 {
    brand: string;
    price: number;
    ram: number;
    
    constructor(brand: string, price: number, ram: number) {
        this.brand = brand;
        this.price = price;
        this.ram = ram;
        

    }
    displayComputer(){
       console.log(`brand:${this.brand}price:${this.price}`) 
    }
}
    export default Computer1;

