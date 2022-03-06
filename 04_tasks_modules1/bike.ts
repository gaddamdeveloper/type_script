class Bike3{
    brandName:string
    color:string
    price:number

constructor(brandName:string,color:string,price:number){
    this.brandName=brandName;
    this.color=color;
    this.price=price;

}
displayBike(){
   console.log(`brandName:${this.brandName}color:${this.color}price:${this.price}`) 
}
}
export default Bike3;