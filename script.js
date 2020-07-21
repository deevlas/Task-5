// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту

function Tegs(name, action, arrAtr = [nameAtr, actionAtr]) {
    this.titleTeg = name;
    this.actionTeg = action;
    this.atributes = arrAtr;
    // consoleInfo: function name() {
    //     console.log("Название тега - " + `${this.titleTeg}` + ";" + "<br/>")
    //     console.log("Действия тега - " + `${this.actionTeg}` + ";" + "<br/>")
    //     console.log("Название массива - " + `${this.nameArray}` + ";" + "<br/>")
    //     console.log("Название атрибута - " + `${this.arrAtr[0]}` + ";" + "<br/>")
    //     console.log("Действие атрибута - " + `${this.arrAtr[1]}` + ";" + "<br/>")

}


let tegA = new Tegs("a", "Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.", ["acceskey", "Активация ссылки с помощью комбинации клавиш."])
console.log(tegA)
let tegDIV = new Tegs("div", "Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.", ["align", "Задает выравнивание содержимого тега <div>"]);
console.log(tegDIV)
let tegH1 = new Tegs("h1", "HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка.", ["align", "Определяет выравнивание заголовка."]);
console.log(tegH1)
let tegSPAN = new Tegs("span", "Тег <span> предназначен для определения строчных элементов документа.", ["Универсальные атрибуты", "Универсальные атрибуты применяются практически ко всем тегам, поэтому выделены в отдельную группу, чтобы не повторять их для всех тегов."]);
console.log(tegSPAN)
let tegINPUT = new Tegs("input", "Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.", ["accept", "Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов."]);
console.log(tegINPUT)
let tegFORM = new Tegs("form", "Связывает поле с формой по её идентификатору.", ["none", "none"]);
console.log(tegFORM)
let tegOPTION = new Tegs("option", "Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.", ["disabled", "Заблокировать для доступа элемент списка."]);
console.log(tegOPTION)
let tegSELECT = new Tegs("select", "Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.", ["autofocus", "Устанавливает, что список получает фокус после загрузки страницы."]);
console.log(tegSELECT)