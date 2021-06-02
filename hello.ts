// syntax
function hello(a){
    console.log(a);
}

var a = "hello typescript"
hello(a);

// basics

let isMotivated : boolean = true;
console.log(isMotivated)

let myAge: number = 26;
console.log(myAge);

let myName: string = "Mazharul Hoque";
console.log(myName);

let employeeInfos : string[] = ['Naumy','Inan','Moshiur'];

//enum
enum fruits
{
    apple,
    banana,
    mango,
    orange
}
let fruitName : string = fruits[3];
console.log(fruitName);


function product(x,y){
    return x*y;
}
product(20,2);

// anonymous 
let func = function(x:number,y:number=5){
    return x*y;
}
console.log(func(2,2))

// arrow func 

let arrowFunc = (a)=> console.log(a);

console.log(arrowFunc('Mazharul Hoque Tommy'));

// classes

class MyClass {
    public j: number;

    constructor(k:number){
        this.j = k;
    }
    value(){
        return ("The number is " + this.j)
    }
}

let myClassObj = new MyClass(6);
console.log(myClassObj.value());

//inheritence 

class MyChildClass extends MyClass {

    l:number;
    constructor(m:number, k:number) {
        super(k);
        this.l = m;
    }

    value2(){
        return "value from Myclass is "+ this.j + " value from child class is " + this.l;
    }

}

let myChildClassObject = new MyChildClass(100,200);

console.log(myChildClassObject.value2());



