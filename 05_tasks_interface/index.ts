 interface airthematic{
     add(num1:number,num2:number);
     mul(num1:number,num2:number);

 }
 class AdditionAndMultiplication implements airthematic{
     result:number;
add(num1:number,num2:number){
    this.result=num1+num2
    console.log(`additon:${this.result}`)
}
mul(num1: number, num2: number) {
    this.result=num1*num2
    console.log(`subtraction:${this.result}`)
}
 }
 let addAndmul=new AdditionAndMultiplication();
 addAndmul.add(10,20)
addAndmul.mul(10,20)



 interface airthematic1{
    sub(num1:number,num2:number);
    div(num1:number,num2:number);


 }

 class subtractionAnddivision implements airthematic1{
    result:number;
    sub(num1:number,num2:number){
    this.result=num1-num2;
    console.log(`addition${this.result}`)
    }
    div(num1:number,num2:number){
        this.result=num1/num2;
        console.log(`division${this.result}`)
    }
 }
 let subAnddiv=new subtractionAnddivision();{
     subAnddiv.sub(50,40)
     subAnddiv.div(80,20)
 }