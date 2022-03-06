class Driver2{
    age:number;
    name:string;
    mobileNumber:number;

    constructor(age:number,name:string,mobileNumber:number){
        this.age=age;
        this.name=name;
        this.mobileNumber=mobileNumber;

    }

displayDriverDetails(){
    console.log(`\nAge:${this.age}\nname:${this.name}\n${this.mobileNumber}`)
}
}


class Zomato2 extends Driver2{
    select:string;
    restarant:string;
    price:number;
    constructor (age:number,name:string,mobileNumber,select:string,restaurant:string,price:number){
        super(age,name,mobileNumber)
this.select=select;
this.restarant=restaurant;
this.price=price;
    }
displayZomatoDetails(){
    console.log(`\nselect:${this.select}\nrestarant:${this.restarant}\nprice:${this.price}\nAge:${this.age}\nname:${this.name}\n mnuber:${this.mobileNumber}`)

}
}
let zomato3=new Zomato2(1,"vamshi",9491112941,"nonveg","mefhil",500)
zomato3.displayZomatoDetails();