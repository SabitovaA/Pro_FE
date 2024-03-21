//-----------map----------

//----------1---------
//Создайте массив объектов, каждый из которых представляет
// собой информацию о человеке (имя, возраст и т. д.).
// Используйте метод map, чтобы создать новый массив, содержащий только имена всех людей.

const people = [
  { name: "Anna", age: 15 },
  { name: "Masha", age: 25 },
  { name: "Lira", age: 35 },
  { name: "Lars", age: 45 },
];
const peopleNew = people.map((obj) => {
  return obj.name;
});
console.log(peopleNew);

//----------2--------
//Создайте массив чисел и используйте метод map, 
//чтобы преобразовать каждое число в строку.

const array = [1, 2, 3, 4, 5, 6];

const arrayString = array.map((num) => String(num));   
console.log(arrayString);


//3 Создайте массив строк, представляющих даты, и 
//используйте метод map, чтобы преобразовать каждую 
//строку в объект Date.

const arrSrting = ['01.02','02.09','12,05', '13.01']

const arrDate = arrSrting.map((string) => Object(string))
console.log(arrDate);

// Создайте массив чисел и используйте метод map, чтобы создать 
//новый массив, содержащий квадраты каждого числа.

const number = [1,2,3,4,5,6,7,8,9]
const numberSquare = number.map((num) => num ** 2)
console.log(numberSquare);

// Создайте массив слов и используйте метод map, чтобы создать
// новый массив, содержащий длины каждого слова.
const words = ['name','number','word']
const wordString = words.map((string) => string.length)
console.log(wordString);

// ForEach:

// Создайте массив чисел и используйте метод forEach, 
//чтобы вывести в консоль каждый элемент массива, умноженный на 2.

const numbers = [1,2,3,4,5,5,6,7,7,8]
numbers.forEach(function(num) {
    console.log(num * 2);
})

// Создайте массив строк и используйте метод forEach,
// чтобы вывести в консоль каждую строку в верхнем регистре.

const stringToUpper = ['english','deutsch','türkce']
stringToUpper.forEach(function(string){
    console.log(string = string.toUpperCase());
})

// Создайте массив объектов и используйте метод forEach, 
//чтобы вывести в консоль значения определенного свойства каждого объекта.

const newPeople = [
    { name: "Anna", age: 15 },
    { name: "Masha", age: 25 },
    { name: "Lira", age: 35 },
    { name: "Lars", age: 45 },
]
newPeople.forEach(people => console.log(people.name));

// Создайте массив чисел и используйте метод forEach, 
//чтобы вывести в консоль только нечетные числа.

const num = [1,2,3,4,5]
num.forEach(function(number) {
    if(number % 2 !== 0) {
        console.log(number);
    }
})
// Создайте массив слов и используйте метод forEach,
// чтобы вывести в консоль каждое слово, у которого длина больше 5 символов.
const stringArray = ['english','deutsch','türkce','name','number','word']
stringArray.forEach(function(string) {
    if(5 < string.length){
        console.log(string);
    }
})

// Filter:

// Создайте массив чисел и используйте метод filter,
// чтобы отфильтровать только положительные числа.
const numbersNew = [1,2,-3,4,5,-5,6,7,-7,8]
const numberFilter = numbersNew.filter(function(number){
    return number > 0;
})
console.log(numberFilter);

// Создайте массив строк и используйте метод filter,
// чтобы отфильтровать только строки, содержащие более одного слова.
const stringArr = ['english','deutsch','türkce name','number word']
const stringFilter = stringArr.filter(string => string.split('').length > 1); 
console.log(stringFilter);
// Создайте массив объектов, представляющих людей, 
//и используйте метод filter, чтобы отфильтровать только совершеннолетних.

const allPeoples = [
    { name: "Anna", age: 15 },
    { name: "Masha", age: 18 },
    { name: "Lira", age: 35 },
    { name: "Lars", age: 45 },
]
const peoples = allPeoples.filter((obj) => {
    return obj.age >= 18;
})
console.log(peoples);

// Создайте массив чисел и используйте метод filter,
// чтобы отфильтровать только числа, которые делятся на 3 без остатка.
const firstArray = [33, 65, 15,78,55]
const secondArray = firstArray.filter((num) => {
    return num % 3 === 0;
})
console.log(secondArray);

// Создайте массив слов и используйте метод filter, 
//чтобы отфильтровать только слова, начинающиеся с 
//определенной буквы.

const stringNew = ['english','deutsch','türkce name','number word']
const withN = stringNew.filter(function(string) {
    return string.startsWith('n');
})
console.log(withN);

 


