//-----------------------forEach---------------------


//------------------1----------
// const array = [1,2,3,4,5,6,7];
// let sum = 0;

// array.forEach(function(item){
//     console.log(item);
// })


//-------------2-----------

// array.forEach(function(number){
//     console.log(number + 1);
// })


//---------------3---------

// array.forEach(function(num){
//     sum += num;
// })
// console.log(sum);

//-------------4------------

// const string = ["num","sum","number"];

// string.forEach(function(elem,index,arr){
//     console.log(arr[index] = elem.toUpperCase())
// })


//--------------5------------- 

 





//------------------------map------------------------


//----------1-------
// const array = [1,2,3,4,5,6,7];

// const arrayNew = array.map(item => item * 2)
// console.log(arrayNew);

//--------2-------
// const string = ["name","age","color"]

// const stringNew = string.map(item => item + '!')
// console.log(stringNew);

//--------3------

// const obj = [
//    {name: 'Nina', age: 21},
//    {name: 'Anna', age: 34},
//    {name: 'Alina', age:45}
// ]
// const objNew = obj.map(function(item){
//     return item.name;
// })
// console.log(objNew); 

//------4-------

// const array1 = [1,2,3,4,5,6,7];

// const square = array1.map(item => item ** 2)
// console.log(square);

//------5------

// const arrNew = ['1','2','3','4'];
// const arrString = arrNew.map(function(string) {
//     return parseInt(string);
// })
// console.log(arrString);



//----------------------filter---------------------

//-------------1----------
// const arr = [1,2,-3,4,-5,6,7]; 

// const arrFilter = arr.filter(function(number){
//     if(number % 2){
//         return number;
//     }
// })
// console.log(arrFilter);

//-----------2----------

// const string = ["num","sum","number","adidas"];

// let filteredArray = string.filter(function(string) {
//     return string.includes('a');
// });
// console.log(filteredArray);


//----------3-----------

// function arrayFilter(elem) {
//     return elem.filter((item) => item > 0)
// }
// console.log(arrayFilter(arr));

//------------4----------

// const arrObj = [
//     {price: 12},
//     {price: 27},
//     {price: 56}
// ]

// let filteredObjects = arrObj.filter(arrObj => {
//     if (arrObj.price >= 15) {
//         return true;
//     }

// })   
// console.log(filteredObjects);

//-----------5-----------

// const string = ["num","sum","number","adidas"];

// const stringNew = string.filter(string => string.length >= 5);
// console.log(stringNew); 


//------------------------------reduce-------------------

//-----------1-----------

const arr = [1,2,3,4,5,6,7];

// const arrNew = arr.reduce((elem,num) => elem + num)
// console.log(arrNew);

//---------2------------

// const arrMin = arr.reduce(function(elem) {
//     if(elem < arr.length){
//         return elem;
//     }
// })
// console.log(arrMin);

// const arrMax = arr.reduce((max,elem) => Math.max(max,elem));
// console.log(arrMin);

//--------3-------------

const string = ["num","sum","number","adidas"];

const stringNew = string.reduce((string,elem) => string+ elem )
console.log(stringNew);

//----------4-------------

const obj= [
    {name: 'cat', age: 5},
    {name: 'dog', age:7},
    {name: 'maus', age:2}
]
function newAge (objects) {
    const totalAge = objects.reduce((num, obj) => num + obj.age,0);
    return totalAge / objects.length;
}
console.log(newAge(obj));


//----------5----------






    





















