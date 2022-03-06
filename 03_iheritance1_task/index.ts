class Book1{
    price:number
    name:string
    pages:number
    constructor(price:number,name:string,pages:number){
        this.price=price;
        this.name=name;
        this.pages=pages;
    }

    displayBook(){
                console.log(`\nid:${this.price}\nname:${this.name}\npages:${this.pages}`)
    }

}
class computer2 extends Book1{
    ram:number
    rom:number
    brand:string
    constructor(price:number,name:string,pages:number,ram:number,rom:number,brand:string){
        super(price,name,pages)
        this.ram=ram;
        this.rom=rom;
        this.pages=pages;
    }
    displayComputer2(){
        console.log(`\nram:${this.ram}\nrom:${this.rom}\npage:${this.pages}\nid:${this.price}\nname:${this.name}\npages:${this.pages}`)
    }
}
let computer=new computer2(12,"myfriend",125,10,64,"hp",)
computer.displayComputer2();