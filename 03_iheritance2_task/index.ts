class Tv{
    price:number;
    model:number;
    inches:number;
    

    constructor(price:number,model:number,inches:number){
this.price=price;
this.model=model;
this.inches=inches;
    }
    displayTv(){
        console.log(`${this.price},${this.model},${this.inches}`)
    }
}

class Door extends Tv{
    height:number;
    width:number;
    weight:number;

    constructor(height:number,width:number,weight:number,price:number,model:number,inches:number){
        super(price,model,inches);
    }
}