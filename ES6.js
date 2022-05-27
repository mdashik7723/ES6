class Vehicle{
    constructor(param1,param2) {
        this.color = param1;
        this.passenger = param2;
    }
    saySomething(){
        console.log(this.color);
    }
}
class Car extends Vehicle {
    constructor(color,pass,numWheel) {
        super(color,pass);
        this.wheel = numWheel;
    }
}
let obj1 = new Car("Green",6,8);
console.log(obj1);


let person1 = [1,2,3,4];
let person2 = [5,6,7,8];
let arr = [...person1,...person2];
console.log(arr);

let Person = {
 name: "Ashik",
 age: 32
}
let another = {
...Person, nationality: "Bangladeshi"
}
console.log(another);


let Something = (...numArr) => console.log(numArr);
Something(1,2,3,4,5,6,7,8,9);




//Destructuring



let arr = [1,2,3,]

let [a,b,c] = arr;

console.log(arr)

//cubes

let numbers = [1,2,3,4,7];

let cubes = numbers.map(item => item**3);
console.log(cubes);


