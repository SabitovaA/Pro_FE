const array = [1,2,3,4,5,6,7,8,9];
let sum = 0;

array.forEach(el => console.log(el * 2))

array.forEach(function(elem) {  
    console.log(sum += elem)
})

const string = ["let","const","array"];

string.forEach(function(element,index,arr){
    console.log(arr[index] = element.toUpperCase())
})

const arrayNew = array.map(item => item *item)
console.log(arrayNew);

const inform = [
     {name: 'bread', price: 2},
     {name: 'milk', price: 3},
     {name: 'butter', price: 4}
]

const informNew = inform.map(function(elem){
    return elem.name;
})
console.log(informNew);

const arrayArr = [1,2,-3,4,5,-6,7,8,-9];

const arrayArrNew = arrayArr.filter(function(number){
    if(number < 0){
        return number;
    }
})
console.log(arrayArrNew);



