// Напишите класс Circle, который принимает радиус в качестве параметра конструктора. Добавьте метод area, который возвращает площадь круга, и метод circumference, возвращающий длину окружности.

class Circle{
    constructor(radius) {
        this.radius = radius;
    }
    area(){
        console.log(`Площадь круга: ${Math.PI * this.radius**2}`);
    }
    circumference() {
        console.log(`Длина окружности: ${2 * Math.PI * this.radius}`);
    }
}
// Пример использования класса Circle
const myCircle = new Circle(5);
myCircle.area()
myCircle.circumference()




// Создайте класс Book, который принимает название книги, автора и количество страниц в качестве параметров конструктора. Добавьте метод info, который выводит информацию о книге в формате "Книга: [название], Автор: [автор], Страниц: [количество]".

class Book{
    constructor(name, author, quantity){
        this.name = name;
        this.author = author;
        this.quantity = quantity;
    }
    info(){
        console.log(`"Книга: ${this.name}, Автор: ${this.author}, Страниц: ${this.quantity}"`)
    }
}
const ikigai = new Book('Ikigai','Ken Mogi',190);
console.log(ikigai);
ikigai.info()

// Напишите класс BankAccount, который принимает имя владельца и начальный баланс. Добавьте методы deposit и withdraw для управления счетом.

class BankAccount{
    constructor(name,balance){
        this.name = name;
        this.balance = balance;
    }
    deposit(sum){
        this.balance += sum;
        console.log(`Счет владельца ${this.name} пополнен ${sum}. Новый баланс: ${this.balance}`)
    }
    withdraw(sum){
        this.balance -= sum;
        console.log(`Со счета ${this.name} списано ${sum}. Новый баланс: ${this.balance}`)
    }
}
const ivan = new BankAccount("Ivan",4000);

ivan.deposit(500)
ivan.withdraw(200)

// Создайте класс Animal, который принимает имя и тип (например, "кот" или "собака") в качестве параметров конструктора. Добавьте метод sound, который выводит звук, производимый животным.

class Animal{
    constructor(kind,sound){
        this.kind = kind; 
        this.sound = sound;
    }
    sounds(){
        console.log(`${this.kind} говорит ${this.sound} `);
    }    
}
const cat = new Animal('кот','мяу');
const dog = new Animal('собака' ,'гав');
cat.sounds()
dog.sounds()

// Напишите класс Email, который принимает адрес электронной почты в качестве параметра конструктора. Добавьте методы send, receive, reply, чтобы моделировать основные функции электронной почты. Например, send - Отправка с адреса … получателю … произведена успешно, или можете поэксперементировать от себя

class Email{
    constructor(email){
        this.email = email;
    }
    send(){
        console.log(`Отправка с адреса ${this.email} произведена успешно`)
    }
    receive(){
        console.log(`В адрес ${this.email} поступило новое сообщение`)
    }

    reply(){
        console.log(`Адрес ${this.email} оветил `)

    }
}
const email = new Email('ivan@gmail.com');
email.send()
email.receive()
email.reply()