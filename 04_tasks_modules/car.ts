class Car{
    id:number;
    color:string;
    brand:string;

    constructor(id:number,color:string,brand:string){
        this.id=id;
        this.color=color;
        this.brand=brand;
    }

    displayCarDetails(){
        console.log(`Id :${this.id}  Color :${this.color} Brand :${this.brand}`);
    }
}

export  default Car;