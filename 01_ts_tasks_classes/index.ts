class Bike{
    brandName:string
    color:string
    price:number

constructor(brandName:string,color:string,price:number){
    this.brandName=brandName;
    this.color=color;
    this.price=price;
}
}
let bike=new Bike("pulsor","green",10000)
let bike2=new Bike("cbz","grey",20000)
console.log(bike)
console.log(bike2)
//employee class

class Employee{
    id:number
    name:string
    mobileNumber:number
}
// creating object
  let employee=new Employee()
employee.id=1;
employee.name="vamshi";
employee.mobileNumber=9491112941;
console.log(`Employee:/n${employee.id}/n${employee.name}/n${employee.mobileNumber}`)

class Book{
    price:number
    name:string
    pages:number

    displayBook(){
        this.price=20;
        this.name="my friend"
        this.pages=150;
        console.log(`\nid:${this.price}\nname:${this.name}\npages:${this.pages}`)
    }

}
// let book=new Book()
book.displayBook()
