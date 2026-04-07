// hm12

// почитать методичку 3 урок



// let card = ["milk", "bread"]
// card.push("eggs")
// card.pop()//удалает последний
// card.unshift("carrot")//добовляет в начало
// card.shift()//удаляет первый
// console.log(card.indexOf("milk"))//ищет по индексу
// console.log(card.includes("milk"))//ищет и пишет True или False. Существует ли
// console.log(card)

// let words = ["hello", "world"]
// console.log(words.join(" "))//Обьеденяет элементы

// let nums = [10,20,30,40,50,60]
// let part = nums.slice(1,4)//делает копию массива, определяет по принципу Start и End(не включительно)
// console.log(part)
// console.log(nums)

// splice(index, сколько после него, на что изменить)
// splice(1,2,"banana")
// формула splice(index, count, на что заменить)

// let fruits = ["apple", "banana", "orange"]
// fruits.splice(0,3,"watermallow","grape", "strawberry")

// concat - обьеденяет два массива
// пишешь сначало первый массив куда ты присоединяешь пишешь конкат и в скобках что прибовляешь
// let arr1 = [1,2]
// let arr2 = [3,4]
// let result = arr1.concat(arr2)

// переворачивает
// let numbers = [1,2,3]
// numbers.reverse()

// sort - работает только со строками
// let fruits = ["banana", "orange", "apple"]
// fruits.sort()

//с цифрами
// let nums = [100,1,9,21,34,3]
// nums.sort((a,b)=>a -b)

//методы перебора массива
//forEach - по каждому пробегает
// let nums = [1,2,3]
// nums.forEach(num => {
//     console.log(num)
// })  Это перебор - перечисляет  каждый элемент

//map - ВАЖНЫЙ!!! проходит по каждому элементу массива и каждый преобразовывает
// let nums = [1,2,3,4,5]
// let doubled = nums.map(num => num * 2)

//примеры
// let words = ["hello", "javascript", "cat"]
// let lengts = words.map(word => word.length)
//показывает длину каждого слова в массиве и пишет в новом

// let names = ["ali", "aida", "nurlan"]
// let upperNames = names.map(name => name.toUpperCase())

// let students = [
//     {name: "Ali", age: 17},
//     {name: "Aruzhan", age: 18},
//     {name: "Maksat", age: 16}
// ]
// let studentsNames = students.map(student => student.name)
//пишет только имена из массива students

// let products = [
//     {title: "Phone", price: 350000},
//     {title: "Laptop", price: 550000},
//     {title: "Mouse", price: 20000},
// ]
// let cards = products.map(product => {
//     return `${product.title} - ${product.price} тг`
// })

//filter
// let numbers = [1,2,3,4,5,6,7,8,9,10]
// let evenNumbers = numbers.filter(num => num % 2 === 0)


// let prices = [500, 1000, 2000,3000,3500,4000]
// let expensive = prices.filter(price > price > 2000)

// let students = [
//     {name: "Ali", score: 83},
//     {name: "Aruzhan", score: 92},
//     {name: "Maksat", score: 67},
//     {name: "Erik", score: 100},
//     {name: "Sanzhar", score: 89}
// ]
// let expensiveStudets = students.filter(student => student.score >= 90)


// let students = [
//     {name: "Ali", score: 83, isActive: true},
//     {name: "Aruzhan", score: 92, isActive: false},
//     {name: "Maksat", score: 67, isActive: true},
//     {name: "Erik", score: 100, isActive: true},
//     {name: "Sanzhar", score: 89, isActive: false}
// ]
// let activeStudents = students.filter(student => student.isActive)


//find - находит по значению по индексу числа(только первый), допустип фильтер находит по условию и выводит массив, но фоунд находит по условию и возвращает только первый
// let nums = [5,10,15,25,35]
// let found = numf.found(num => num > 10)

//sql -> массив

// let users = [
//     {if:1, name:"ali"},
//     {if:2, name:"Dana"},
//     {if:3, name:"Aiym"}
// ]
// let user = users.find(u => u.id == 2)


//findIndex - возвращает индекс, перебор массива
//indexOf - возвращает индекс, не умеет перебирать массив

//some - он умеет бегать по массиву, находит первовхождение
//every - он должен чтобы все элементы массива подходили по условию

// let nums = [1,3,5,8]
// let hasEven = nums.some(num => num % 2 === 0)
// -
// есть хотябы один четный

//some
// let prices = [2000,5000,800,10000]
// let cheapPrice = prices.some(price => price < 1000) cheap - дешевый

//every - тоже возвращает буллего значение, дает тру если все элементы массива подходят под условие

//1)
// let numbers = [2,4,6,8,10]
// let allEven = numbers.every(num => num % 2 === 0)
// --> True

//2)
// let numbers = [2,4,6,7,10]
// let allEven = numbers.every(num => num % 2 === 0)
// --> False


//reduce -  
//sum - сумма - acc
//ключ
//current - текущее значение
//start

// let nums = [10,20,30,40]
// let sum = nums.reduce((acc, num) => {
//     return acc + num
// }, 0)


// let cart = [
//     {title: "Phone", price: 350000},
//     {title: "Keyboard", price: 30000},
//     {title: "Mouse", price: 15000}
// ]
// let total = cart.reduce((acc, item) => {
//     return acc + item.price
// }, 0)


