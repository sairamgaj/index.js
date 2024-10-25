var arr = [1,2,3,4,5,6];
for( x in arr){
//console.log(2,`*`,x,`=`,(2*(parseInt(x))));
console.log(`2x${arr[x]}=${arr[x]*2}`)
}

//for of loop prints the values directly whereas for in loop prints the indexes.
var str1="welcome";
for(i of arr){
    console.log(i)
}

//for in loop and for of loop for objects: it will take keys, for objects we cant use for of loop.We can only use for in loop for objects.

var obj = {"name":"23r","strength":"55","session":"js"};
for (j in obj){
    console.log(j)
}

var obj1 = {"name":"23r","strength":"55","session":"js"}
for (j in obj1){
    console.log(`${j} is ${obj1[j]}`)
}

//Methods in objects
var obj1 = {"name":"23r","strength":"55","session":"js"} //changing the value of strength
obj1.strength=60;
console.log(obj1)


var obj1 = {"name":"23r","strength":"55","session":"js"} //changing the value of strength
obj1.strength=60;
delete obj1.strength; //deleting property
console.log(obj1)


var obj1 = {"name":"23r","strength":"55","session":"js"} //changing the value of strength
obj1.strength=60;
delete obj1.strength; //deleting property
obj1.location="hyd";
console.log(obj1)

//Method Entries: if we use entries method in the object it will print all the entries.It takes every entry as an array and pushes into another array.It exracts all the key vvalue pairs and inserts into new array
var obj1 = {"name":"23r","strength":"55","session":"js"} //changing the value of strength
obj1.strength=60;
delete obj1.strength; //deleting property
obj1.location="hyd";
console.log(Object.entries(obj1))

//we can't use directly length for objects


//practice
var obj1 = {"name":"23r","strength":"55","session":"js","mentor":"harish sir","location1":"kphb colony","Degree":"All","yop":"2024"};
for(x in obj1){
    console.log(x) // to print only the key
}

var obj1 = {"name":"23r","strength":"55","session":"js","mentor":"harish sir","location1":"kphb colony","Degree":"All","yop":"2024"};
for(x in obj1){
    console.log(obj1[x]) //to print the value
}

var obj1 = {"name":"23r","strength":"55","session":"js","mentor":"harish sir","location1":"kphb colony","Degree":"All","yop":"2024"};
for(x in obj1){
    console.log(`${x} is ${obj1[x]}`)   
}

var arr2=[1,2,3,4,5,6,7,8,9,10];
for (x in arr2){
console.log(`5x${arr2[x]}=${arr2[x]*5}`)
}