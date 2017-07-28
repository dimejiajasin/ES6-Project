/*
class Drone {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    //static methods are methods attached to the class itself. It will only exit on the class alone and not on the instance.
    static getCompany(){
        console.log('in the company')
    }


    //adding a method to the class which will be attached to each instance created.
    fly(){
        console.log(this.id)
    }

}
//creating properties directly on Drone as class properties
Drone.maxHeight = 2000;



let drone = new Drone('A123', "Flyer");
let drone2 = new Drone('B456', "Twirl");

drone.fly();
drone2.fly();

Drone.getCompany();



* Using Getters and Setters
*
*

class Drone{
    constructor(id){
        this._id=id;
    }
    get id(){
        return this._id
    }
    set id(value){
        this._id = value;
    }
}

let drone = new Drone('A123');
drone.id = "N345";
console.log(drone.id);



* Inheritance and Code organisation
*
*

class Vehicle {
    constructor(licenseNum){
        this.licenseNum = licenseNum;
    }

}

class Drone extends Vehicle {

}

class Car extends Vehicle {
    constructor(licenseNum) {
        //you must always use the super() to call the main
        super(licenseNum);

    }
}

let c = new Car('B456');

console.log(c.licenseNum);


Properties in classes and derived classes


class Vehicle {
    constructor() {
        this.gpsEnabled = true;
    }
}

class Drone extends Vehicle {
    constructor() {
        super();
    }
}

class Car extends Vehicle {
    constructor() {
        super();
        this.gpsEnabled= false;
    }
}

let c = new Car();
console.log(c.gpsEnabled);



Methods with inheritance now!


class Vehicle{
    start(){
        console.log("Starting Vehicles");
    }
    static getCompanyName(){
        console.log('My Company');
    }
}


class Car extends Vehicle{
    start(){
        super.start();
        console.log("Starting Car");
    }
    static getCompanyName(){
        super.getCompanyName();
        console.log('In My Company');
    }
}

let c = new Car();
c.getCompanyName();
*/

import {Car} from "./classes/car.js"
import {Drone} from "./classes/drone.js"
import {fleet} from "./fleet-data.js"
import {FleetDataServices} from "./services/fleet-data-service.js"

let dataService = new FleetDataServices();
dataService.loadData(fleet);
for (let car of dataService.cars)
    console.log(car.license);
// console.log(fleet);
// console.log(d);


