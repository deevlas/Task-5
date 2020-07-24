// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту

// function Tegs(name, action, arrAtr = [nameAtr, actionAtr]) {
//     this.titleTeg = name;
//     this.actionTeg = action;
//     this.atributes = arrAtr;

// }


// let tegA = new Tegs("a", "Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.", ["acceskey", "Активация ссылки с помощью комбинации клавиш."])
// console.log(tegA)
// let tegDIV = new Tegs("div", "Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.", ["align", "Задает выравнивание содержимого тега <div>"]);
// console.log(tegDIV)
// let tegH1 = new Tegs("h1", "HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка.", ["align", "Определяет выравнивание заголовка."]);
// console.log(tegH1)
// let tegSPAN = new Tegs("span", "Тег <span> предназначен для определения строчных элементов документа.", ["Универсальные атрибуты", "Универсальные атрибуты применяются практически ко всем тегам, поэтому выделены в отдельную группу, чтобы не повторять их для всех тегов."]);
// console.log(tegSPAN)
// let tegINPUT = new Tegs("input", "Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.", ["accept", "Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов."]);
// console.log(tegINPUT)
// let tegFORM = new Tegs("form", "Связывает поле с формой по её идентификатору.", ["none", "none"]);
// console.log(tegFORM)
// let tegOPTION = new Tegs("option", "Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.", ["disabled", "Заблокировать для доступа элемент списка."]);
// console.log(tegOPTION)
// let tegSELECT = new Tegs("select", "Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.", ["autofocus", "Устанавливает, что список получает фокус после загрузки страницы."]);
// console.log(tegSELECT)



// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту


// class Teg {
//     constructor(name, action, arrAtr = [nameAtr, actionAtr]) {
//         this.nameTeg = name;
//         this.actionTeg = action;
//         this.atribName = arrAtr;
//     }
// }

// let tegsA = new Teg("a", "Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.", ["acceskey", "Активация ссылки с помощью комбинации клавиш."])
// console.log(tegsA)
// let tegsDIV = new Teg("div", "Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.", ["align", "Задает выравнивание содержимого тега <div>"]);
// console.log(tegsDIV)
// let tegsH1 = new Teg("h1", "HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка.", ["align", "Определяет выравнивание заголовка."]);
// console.log(tegsH1)
// let tegsSPAN = new Teg("span", "Тег <span> предназначен для определения строчных элементов документа.", ["Универсальные атрибуты", "Универсальные атрибуты применяются практически ко всем тегам, поэтому выделены в отдельную группу, чтобы не повторять их для всех тегов."]);
// console.log(tegsSPAN)
// let tegsINPUT = new Teg("input", "Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.", ["accept", "Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов."]);
// console.log(tegsINPUT)
// let tegsFORM = new Teg("form", "Связывает поле с формой по её идентификатору.", ["none", "none"]);
// console.log(tegsFORM)
// let tegsOPTION = new Teg("option", "Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.", ["disabled", "Заблокировать для доступа элемент списка."]);
// console.log(tegsOPTION)
// let tegsSELECT = new Teg("select", "Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.", ["autofocus", "Устанавливает, что список получает фокус после загрузки страницы."]);
// console.log(tegsSELECT)




// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// let car = {
//     "model": "KIA XCEED",
//     "producer": "Kia Motors",
//     "year": 2019,
//     "speed": 250,
//     "engine": 1368
// }

// car.drive = function () {
//     console.log("Едем сo скоростью " + `${car.speed}` + " км/ч")
// }

// car.info = function () {
//     console.log(this)
// }

// car.increaseMaxSpeed = function (newSpeed) {
//     let carSpeed = (car.speed + newSpeed);
//     console.log(carSpeed)
//     return carSpeed
// }

// car.changeYear = function (newValue) {
//     car.year = newValue;
//     console.log(car.year)
// }

// car.addDriver = function (driver) {
//     car.driver = driver;
//     console.log(car.driver)
// }

// car.drive()
// car.info()
// car.increaseMaxSpeed(50)
// car.changeYear(2020)
// car.addDriver({
//     name: "Viktor",
//     car: "Opel",
//     model: "Ventra",
//     year: 2010
// })


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================   

// function Cars(model, producer, year, maxSpeed, engine) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;

//     this.drive = function () {
//         console.log("Едем сo скоростью " + `${car.speed}` + " км/ч")
//     }
//     this.info = function () {
//         console.log(this)
//     }

//     this.increaseMaxSpeed = function (newSpeed) {
//         let carSpeed = (Cars.speed + newSpeed);
//         console.log(carSpeed)
//         return carSpeed
//     }

//     this.changeYear = function (newValue) {
//         Cars.year = newValue;
//         console.log(Cars.year)
//     }

//     this.addDriver = function (driver) {
//         Cars.driver = driver;
//         console.log(car.driver)
//     }

// }

// let kia = new Cars("XCEED", "Kia motors", 2010, 250, 1000)
// kia.changeYear(2000)



// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================


class Car {
    constructor(model, produce, year, maxSpeed, engine) {
        this.model = model;
        this.produce = produce;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;

        this.drive = function () {
            console.log("Едем сo скоростью " + `${this.maxSpeed}` + " км/ч")
        }
        this.info = function () {
            console.log(this)
        }
        this.increaseMaxSpeed = function (newSpeed) {
            this.maxSpeed += newSpeed;
            console.log(this.maxSpeed)
        }
        this.changeYear = function (newValue) {
            this.year = newValue;
            console.log(this.year)
        }
        this.addDriver = function (driver) {
            this.driver = driver;
            console.log(this.driver)
        }
    }
}


let BMW = new Car("X5", "General Motors", 2008, 290, 1800)
console.log(BMW)
BMW.increaseMaxSpeed(30)
console.log(BMW)
BMW.changeYear(1990)
console.log(BMW)
BMW.addDriver({
    name: "Viktor",
    age: 25,
    wife: true
})
console.log(BMW)


// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================

class Princesses {
    constructor(name, age, sizeFoot) {
        this.name = name;
        this.age = age;
        this.size = sizeFoot;
    }
}
let cinderella = []

const tiana = new Princesses("Tiana", 16, 40);
cinderella.push(tiana)
const belle = new Princesses("Belle", 19, 39);
cinderella.push(belle)
const jasmine = new Princesses("Jasmine", 15, 34);
cinderella.push(jasmine)
const aurora = new Princesses("Aurora", 22, 38);
cinderella.push(aurora)
const rapunzel = new Princesses("Rapunzel", 15, 32);
cinderella.push(rapunzel)
const snowWhite = new Princesses("Snow White", 21, 37);
cinderella.push(snowWhite)
const ariel = new Princesses("Ariel", 18, 36);
cinderella.push(ariel)
const merida = new Princesses("Merida", 14, 33);
cinderella.push(merida)
const elsa = new Princesses("Elsa", 18, 41);
cinderella.push(elsa)
const anna = new Princesses("Anna", 16, 35);
cinderella.push(anna)

console.log(cinderella)


class Prince {
    constructor(name, age, findShoos) {
        this.name = name;
        this.age = age;
        this.find = findShoos;
        this.target = function () {

            for (let i = 0; i < cinderella.length; i++) {

                if (cinderella[i].size === this.find) {
                    console.log(this.name + " нашел свою любовь, по имени - " + cinderella[i].name)
                }
            }
        }
    }
}
let prince = new Prince("Alladin", 21, 34)
prince.target()

let prince2 = new Prince("Alfred", 25, 37)
prince2.target()


// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================

let cindArray = []

function Cinderella(name, age, sizeFoot) {
    this.name = name;
    this.age = age;
    this.sizeFoot = sizeFoot;
}

function Princes(name, age, shoeWasFind) {
    this.name = name;
    this.age = age;
    this.shoos = shoeWasFind;
    this.findCind = function () {
        for (let cind of cindArray) {
            if (cind.sizeFoot === this.shoos) {
                console.log(cind.name)
            }
        }
    }
}

const tiana2 = new Cinderella("Tiana", 16, 40);
cindArray.push(tiana2)
const belle2 = new Cinderella("Belle", 19, 39);
cindArray.push(belle2)
const jasmine2 = new Cinderella("Jasmine", 15, 34);
cindArray.push(jasmine2)
const aurora2 = new Cinderella("Aurora", 22, 38);
cindArray.push(aurora2)
const rapunzel2 = new Cinderella("Rapunzel", 15, 32);
cindArray.push(rapunzel2)
const snowWhite2 = new Cinderella("Snow White", 21, 37);
cindArray.push(snowWhite2)
const ariel2 = new Cinderella("Ariel", 18, 36);
cindArray.push(ariel2)
const merida2 = new Cinderella("Merida", 14, 33);
cindArray.push(merida2)
const elsa2 = new Cinderella("Elsa", 18, 41);
cindArray.push(elsa2)
const anna2 = new Cinderella("Anna", 16, 35);
cindArray.push(anna2)

let prince3 = new Princes("Alladin", 22, 35)
prince3.findCind()