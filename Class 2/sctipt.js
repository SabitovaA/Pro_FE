class Employee{
    constructor(name,age,position){
        this.name = name;
        this.age = age;
        this.position = position;
    }
    getInfo(){
        console.log(`${this.name}:${this.age},${this.position}`)
    }
}



function filterEmployeesByPosition(employees, position) {
    const filteredEmployees = employees.filter(employee => employee.position === position);
    const names = filteredEmployees.map(employee => employee.name);
    return names;
}

const employee1 = new Employee('Ivan',25,'teacher');
const employee2 = new Employee('Liza',25,'designer');
const employee3 = new Employee('Anna',25,'teacher');
const employee4 = new Employee('Lena',25,'manager');
const employee5 = new Employee('Dima',25,'teacher');

const employees = [employee1, employee2, employee3, employee4,employee5];

employee1.getInfo()
const filteredNames = filterEmployeesByPosition(employees,'teacher');
console.log(filteredNames);


