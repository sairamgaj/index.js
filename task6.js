var car = {brand:'Toyota','model':'Corolla','year':'2020'};
for (i in car){
    console.log(`${i} : ${(car[i])}`)
}

var numbers = [1,2,3,4,5];
for (i in numbers){
    console.log(`${numbers[i]}-HI`)
}

var fruits = ['Apple','Banana','Cherry','Date'];
for (i in fruits){
    console.log(`${i}-${fruits[i].toUpperCase()}`)
}

var obj2 = {name:"John",
            age:30,
            address:{
                city: 'Los Angeles',
                state: 'CA'
            }
        };
obj2.city= 'San Francisco';
console.log(obj2)

var car = {brand:'Toyota',model:'Camry',year:2020};
car.model = 'Fortuner';
car.year = 2022
console.log(car)

var recipe = {name: 'Pasta',servings:2,ingredients:['noodles','sauce']}
recipe.ingredients.push("Cheese");
console.log(recipe)