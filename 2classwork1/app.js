// class User {
//     constructor(name, email){
//         this.name = name;
//         this.email = email
//     }
//     login(){
//         console.log(this.name + "logged in")
//     }
// }

// const user1 = new User("Alex", "aleg@gmail.com")
// console.log(user1.name)
// console.log(user1.email)
// user1.login()
// console.log(user1)

// class Bank{
//     #balance = 0;

//     deposit(amount){
//         if (amount <= 0) return
//         this.#balance += amount
//     }
//     withdraw(amount){
//         if(amount > this.#balance){
//             console.log("Error")
//             return
//         }
//         this.#balance -= amount
//     }

//     getBalance(){
//         return this.#balance

//     }
// }

// const acc1 = new Bank()
// console.log(acc1.getBalance())
// acc1.deposit(5000)
// console.log(acc1.getBalance())
// acc1.withdraw(3000)
// console.log(acc1.getBalance())



// class Product{
//     constructor(name,price){
//         this.name = name;
//         this.price = price
//     }
//     getInfo(){
//         console.log("Name: " + this.name + ", Price: " + this.price)
//     }
//     applyDiscount(percent){
//         this.price -= this.price * percent / 100
//     }
//     getName(){
//         return this.name
//     }
//     getPrice(){
//         return this.price
//     }
//     getCount(){
//         let count = Number(prompt("enter count: "))
//         return count * this.price
//     }
// }
// const pr1 = new Product("phone", 1000)
// pr1.getInfo()
// pr1.applyDiscount(10)
// pr1.getInfo()
// console.log("Total price: " + pr1.getCount())


//мини проект: система пользователей почти как backend
// class User {
//     constructor(name,email){
//         this.name = name
//         this.email = email
//     }

//     getInfo(){
//         return `${this.name} (${this.email})`
//     }
//     getRole(){
//         return "user"
//     }
// }

// class Admin extends User{
//     constructor(name,email){
//         super(name,email)
//         this.permissions = ["read", "write", "delete", "update"]
//     }
//     deleteUser(user){
//         console.log(this.name + " deleted " + user.name)
//     }
//     getRole(){
//         return "admin"
//     }
// }

// class Modetrator extends User{
//     banUser(user){
//         console.log(this.name + " bannes " + user.name)
//     }
//     getRole(){
//         return "moderator"
//     }
// }


// const admin = new Admin("ales", "admin@gmail.com")
// const user = new User("John", "john@gmail.com")
// const mod = new Modetrator("Kate", "mog@gmail.com")


