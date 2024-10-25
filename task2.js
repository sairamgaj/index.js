let x=5;
let y=x;
x=10;
console.log(x);   //output : 10
console.log(y);   //output : 5

let obj1={name:"Alice"};
let obj2=obj1;
obj1.name="Bob";
console.log(obj1.name);  //output : Bob
console.log(obj2.name);  //output : Bob

let a="hello";
let b=42;
let c=true;
let d={key:"value"};
let e=null;
let f=undefined;
console.log(typeof a);    //output : string
console.log(typeof b);    //output : number
console.log(typeof c);    //output : boolen
console.log(typeof d);    //output : object
console.log(typeof e);    //output : object
console.log(typeof f);    //output : undefined

let numbers=[10,20,30,40,50];
console.log(numbers[2]);                               //output : 30
console.log(numbers[0]);                               //output : 10 
console.log(numbers[numbers.length-1]);                //output : 50

let fruits=["apple","banana","mango"];
fruits[1]="orange";
console.log(fruits);                     //output : ['apple', 'organe', 'mango']

let matrix=[[1,2,3],[4,5,6],[7,8,9]];
console.log(matrix[1][2]);                //output : 6
console.log(matrix[2][0]);                //output : 7

let person={name:"John",age:25,city:"New York"};
console.log(person.name);                            //output : john
console.log(person.age);                             //output : 25

let car={make:"Toyato",model:"Cornolla",year:2021};
console.log(car["make"]);                                 //output : Toyata
console.log(car["model"]);                                //output : Cornalla

let book={title:"The Great Gatsby",author:"F.Scott Fitzgerald"};
book.author="Anonymous";
console.log(book.author);                              //output : Anonymous

let student={name:"Alice",grade:"A"};
student.age=20;
console.log(student);                              //output : { name: 'Alice', grade: 'A', age: 20 }