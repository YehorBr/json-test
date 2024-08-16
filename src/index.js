// 1. Створіть об'єкт JSON з інформацією про книгу. Книга повинна мати наступні поля:

const book = {
    title: "The Lord of the Rings",
    author: "John Ronald Reuel Tolkien",
    yearPublication: 1954,
    genre: "fantasy"
}

const bookStr = JSON.stringify(book)

const bookParsed = JSON.parse(bookStr)
console.log(bookParsed);

// 2. Запросіть у вашого користувача ім'я та вік за допомогою input. Створіть об'єкт JSON з інформацією про користувача, використовуючи дані, які ви отримали від користувача. Перевірте, що ваш JSON є коректним за допомогою методу JSON.parse().

const nameInput = prompt('Як тебе звати?')
const ageInput = prompt('Скільки тобі років?')

const userInfo = {
    name: nameInput,
    age: ageInput
}

console.log(userInfo);

// 3. Напишіть функцію, яка відкриває файл з даними у форматі JSON та повертає об'єкт JavaScript. Файл повинен містити інформацію про список студентів. Для кожного студента повинні бути такі поля:



// ім'я
// прізвище
// рік народження
// номер групи
// оцінки з курсів

const students =[{
    name: 'Єгор',
    lastName: 'Бруй',
    yearOfBirthday:2008,
    numberOfGroup:'414142',
    grades:{
        math: 10,
        english: 10,
    }


},
{
    name: 'Андрій',
    lastName: 'Юрченко',
    yearOfBirthday:2009,
    numberOfGroup:'414142',
    grades:{
        math: 9,
        english: 8,
    }


},
{
    name: 'Артем',
    lastName: 'Кочуков',
    yearOfBirthday:2008,
    numberOfGroup:'414142',
    grades:{
        math: 7,
        english: 7,
    }


}]

function studentsData(studentsList){
    const studentsListStr = JSON.stringify(studentsList)
    const studentsListParse = JSON.parse(studentsListStr)

    return studentsListParse 
}

studentsListParse = studentsData(students)
console.log(studentsListParse);

const arrOfDishes = [{
    dish:'Грецький салат',
    description:'традиційна страва грецьких селян.',
    price: 90,
    ingredient:['огірок', 'помідор', 'болгарський перець', 'червона цибуля', 'оливки', 'фета'],
},
{
    dish:'Борщ',
    description:'українська рідка страв.',
    price: 120,
    ingredient:['буряк', 'капуста', 'картопля', 'морква', 'яловичина','томатна паста' ],
},
{
    dish:'Паста карбонара',
    description:'популярна італійська паста',
    price: 110,
    ingredient:['спагетті', 'бекон', 'оливкова олія', 'пармезан', 'часник','яйця' ],
}]

const arrOfDishesStr = JSON.stringify(arrOfDishes)
const arrOfDishesParsed =JSON.parse(arrOfDishesStr)

console.log(arrOfDishesParsed);

const films = {
    filmsList:[
        {
          title:'Інтерстеллар',
          yearPublication:2014,
          Director:'Крістофер Нолан',
          genre: 'Наукова фантастика, Драма',
          cast: ["Меттью Макконахі", "Енн Гетевей", "Джессіка Честейн"],  
        },{
            title:'Джентльмени',
            yearPublication:2019,
            Director:'Ґай Річі',
            genre: 'кримінальна комедія',
            cast: ["Меттью Макконахі", "Чарлі Ганнем", "Мішель Докері"],  
        }
    ]
}

const filmsStr = JSON.stringify(films);
const filmsParsed = JSON.parse(filmsStr);

console.log(filmsParsed);