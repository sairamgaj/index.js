var str1 = "Sairam";
for (x in str1) console.log("Hello")//statement in for in loop
   console.log("Heyy") // separate statement because it's not present in block of code // here it prints hello 10 times and then heyy 1 time

var str1 = "Sairam";
for (x in str1) {console.log("Hello")
   console.log("Heyy") } //here it prints hello heyy ....10 times

var str1="Sairam";
for (x in str1) console.log(typeof(str1))

var str1 = "Sairam";
for (x in str1) {console.log("Hello")
       console.log("Heyy") 
        console.log(x)} 

var str1 = "Sairam";
for (x in str1)
    console.log(x+1) // here it's concating the x with 1, type is string

var str1 = "Sairam";
for (x in str1)
    console.log(parseInt(x+1)) // here changing the data type from string to int

var str1 = "Sairam";
for (x in str1)
    console.log(parseInt(x)+1) // here printing the index values starting from 1 as we're specifying 


var str1="Software Developer";
for (i in str1)
    console.log(str1[i])

var str1="Software Developer";
for (i in str1)
    console.log(str1[i].toLowerCase())

var str1="Satavahana";
for (j in str1)
    console.log(str1[j].toUpperCase())


//for in loop in arrays
var arr1=[5,10,15,20,25,30,35,40,45,50]
for (i in arr1){
    console.log("js")
}

var arr1=[5,10,15,20,25,30,35,40,45,50]
for (i in arr1){
    console.log(i) //it will print the indexes of the array
}

var arr1=[5,10,15,20,25,30,35,40,45,50]
for (i in arr1){
    console.log(arr1[i])//it will print the values which are declared inside the array
}

var arr1=[5,10,15,20,25,30,35,40,45,50]
for (i in arr1){
    console.log(arr1[i]*2)//it will print the values which are declared inside the array
}

var arr1=[5,10,15,20,25,30,35,40,45,50]
for (i in arr1){
    console.log(`2x${arr1[i]}=${arr1[i]*2}`)//it will print the values which are declared inside the array
}

//for-of loop
var str3 = "hello";
for(i of str3){
    console.log(i)
}

var obj={"name":"10000 coders","location":"kphb","city":"hyd"};
for (i in obj){
    console.log(i)
}

var obj={"name":"10000 coders","location":"kphb","city":"hyd"};
for (i in obj){
    console.log(obj[i])
}

var obj={"name":"10000 coders","location":"kphb","city":"hyd"};
for (i in obj){
    console.log(`${i} is ${obj[i]}`)
}

//Methods in Objects
var obj={"name":"Sairam","Place":"Hyd","Color":"Red","strength":"55"};
obj.strength=60;
obj.Color="Pink";
delete obj.Place;
obj.Intrest="FullStack";
console.log(obj)

//Entries methods in objects
var obj={"name":"Sairam","Hobbies":"Reading Books","Likes":"Travelling","BestFrnd":"Sandeep","FavNo":"7"}
obj.location="bangalore";
delete obj.Hobbies;
obj.FavNo=3;
console.log(Object.entries(obj))

var obj2={"name":"Sairam","Hobbies":"Reading Books","Likes":"Travelling","BestFrnd":"Sandeep","FavNo":"7"};
console.log(Object.keys(obj2))
console.log(Object.values(obj2))
var x=Object.entries(obj2);
console.log(x.length)