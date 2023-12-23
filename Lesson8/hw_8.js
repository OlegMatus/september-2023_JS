// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
// створити пустий масив, наповнити його 10 об'єктами new User(....)
let userArray = [];
// for (let i = 0; i < 10; i++){
//     let user = new User(
//         // `${i}`, 'John', 'Travolta', 'john23@gmail.com', '0662233444');
//         i + 1,
//         `Name${i + 1}`,
//         `Surname${i + 1}`,
//         `email${i + 1}@example.com`,
//         `+1234567890${i}`
//     )
//     userArray.push(user);
// }
userArray.push(
    new User(1, 'John', 'Travolta', 'john23@gmail.com', '+380662233445'),
    new User(2, 'Bruce', 'Willis', 'bruce99@gmail.com', '+380662233444'),
    new User(3, 'Angelina', 'Jolie', 'jolie23@gmail.com', '+380662233443'),
    new User(4, 'Sherlock', 'Holmes', 'sherlock007@gmail.com', '+380662233442'),
    new User(5, 'Olja', 'K', 'olja15@gmail.com', '+380662233448'),
    new User(6, 'Scarlett', 'Johansson', 'scarlet13@gmail.com', '+380662233441'),
    new User(7, 'Andriy', 'Shevchenko', 'sheva49@gmail.com', '+380662233441', ['chicken', 'apple', 'orange', 'beer']),
    new User(8, 'Olha', 'Harlan', 'olja25@gmail.com', '+380662233441', ['chicken', 'orange']),
)
console.log(userArray);
// - Взяти масив з User[] з попереднього завдання, та відфільтрувати, залишивши тільки об'єкти з парними id (filter)
console.log(userArray.filter((user) => user.id % 2 === 0));
// - Взяти масив з User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(userArray.sort((a, b) => a.id - b.id));
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
let clientArray = [];
clientArray.push(
    new Client(1, 'John', 'Travolta', 'john23@gmail.com', '+380662233445', ['apple', 'orange']),
    new Client(2, 'Bruce', 'Willis', 'bruce99@gmail.com', '+380662233444', ['apple', 'orange', 'banana', 'meat']),
    new Client(3, 'Angelina', 'Jolie', 'jolie23@gmail.com', '+380662233443', ['apple', 'orange','juice']),
    new Client(4, 'Sherlock', 'Holmes', 'sherlock007@gmail.com', '+380662233442', ['apple', 'orange', 'strawberry']),
    new Client(5, 'Olja', 'K', 'olja15@gmail.com', '+380662233448', ['cheese', 'apple', 'orange', 'wine', 'cake']),
    new Client(6, 'Scarlett', 'Johansson', 'scarlet13@gmail.com', '+380662233441', ['mushrooms', 'apple', 'orange']),
    new Client(7, 'Andriy', 'Shevchenko', 'sheva49@gmail.com', '+380662233441', ['chicken', 'apple', 'orange', 'beer']),
    new Client(8, 'Olha', 'Harlan', 'olja25@gmail.com', '+380662233441', ['chicken', 'orange']),
)
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
//
console.log(clientArray.sort((c1, c2) => (c1.order.length - c2.order.length)));
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
function Car(model, producer, year, maxSpeed, volume) {
    this.model = model
    this.producer = producer
    this.year = year
    this.maxSpeed = maxSpeed
    this.volume = volume

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    this.info = function () {
        console.log('model:' , this.model);
        console.log('producer:' ,this.producer);
        console.log('year:', this.year);
        console.log('maxSpeed:', this.maxSpeed);
        console.log('volume:', this.volume);
        console.log('driver: ', this.driver);
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    }
    this.changeYear = function (newValue) {
        this.year = newValue;
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}
let car = new Car('Q7', 'Audi', 2021, 260, 3.0);
car.drive()
car.info()
car.increaseMaxSpeed(22)
car.changeYear(2022)
car.addDriver({ name: 'Borys', age: 55, exp: 40 })
car.info()
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
class Car2 {
    constructor(model, producer, year, maxSpeed, volume) {
        this.model = model
        this.producer = producer
        this.year = year
        this.maxSpeed = maxSpeed
        this.volume = volume
    }
    drive () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    info () {
        console.log('model: ', this.model)
        console.log('producer: ', this.producer);
        console.log('year: ', this.year);
        console.log('maxSpeed: ', this.maxSpeed);
        console.log('volume: ', this.volume);
        console.log('driver: ', this.driver);
    }
    increaseMaxSpeed(newSpeed){
        this.maxSpeed += newSpeed
    }
    changeYear(newYear){
        this.year = newYear;
    }
    addDriver(driver){
        this.driver = driver;
    }
}

console.log('---------CLASS-------------')
let car2 = new Car2('Q7', 'Audi', 2021, 260, 3.0);
car2.drive()
car2.info()
car2.increaseMaxSpeed(33)
car2.info()
car2.changeYear(2015)
car2.info()
car2.addDriver({name: 'John', age: 44, exp: 11})
car2.info()
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Cinderella extends Human{
    constructor(name, age, footSize) {
        super(name, age);
        this.footSize = footSize;
    }
}
let cinderellaArr = [
    new Cinderella('Asya', 16, 28),
    new Cinderella('Olja', 30, 39),
    new Cinderella('Lisa', 44, 41),
    new Cinderella('Masha', 39, 43),
    new Cinderella('Lola', 28, 35),
    new Cinderella('Mia', 34, 37),
    new Cinderella('Bri', 22, 30),
    new Cinderella('Javelina', 9, 19),
];
// Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
class Prince extends Human {
    constructor(name, age, bootCinderella) {
        super(name, age);
        this.bootCinderella = bootCinderella;
    }
    findCinderella(cinderellaArr) {
        if (!this.bootCinderella) throw new Error('no boots')
        for (const cinderella of cinderellaArr) {
            if (cinderella.footSize === this.bootCinderella){
                return cinderella;
            }
        }
    }
    findCinderella2(arr){
        return arr.find((cinderella) => cinderella.footSize === this.bootCinderella)
    }
}
let prince = new Prince('Bayractar', 25, 19);
let findCinderella = prince.findCinderella(cinderellaArr);
let findCinderella2 = prince.findCinderella2(cinderellaArr);
console.log(findCinderella);
console.log(findCinderella2);
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// console.log(cinderellaArr.find((cinderella) => cinderella.footSize === this.bootCinderella));