class Car{
    /*
    creating constructor in java
    public Car(){
        //default constructor
    }
    */

    /*
    creating constructor in javaScript
    only one constructor can be created
    constructor(){
        console.log("default constructor")

    }
    */

    //parameterize constructor
    constructor(make, model, year, color){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        console.log("I won: " + year + " " + make + " " + model + " which is: " + color + " color")
    }

    /*
    creating method in java
    public void drive(){

    }
    */


   //creating method
   drive(){ 
    console.log("you drive the car");
   } 

   break(){
    console.log("You step on the break")
   }

   add(a,b){
    return a+b;
   }

   multiply(c,d){
    console.log(c*d);
   }
}

/*
creating object in java
Car car = new car();
*/

//creating object of the class
let car1 = new Car("Honda", "civic", 2023, "White");
//creating more one more object
let car2 = new Car('Toyota', "Camry", 2021, 'Silver');
car1.drive();
car1.break()
console.log(car1.add(10,15));
car1.multiply(2,2)

//we can also individually get the value of the variable
console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);