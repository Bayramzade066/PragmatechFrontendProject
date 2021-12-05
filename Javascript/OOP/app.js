// function User(name,age){
//     let user={};
//     user.name = name;
//     user.age = age;
//     return user;
// };

// console.log(User('Mehemmed',20));
// console.log(User('Rovshen',25));
// console.log(User('Rustem',23));

class User{
    constructor(name,age){
        this.name=name;
        this.age=age;
    };
    sayHello(){
        console.log(`'Hello my name is ${this.name} and i am ${this.age} years old'`)
    }
}

let Mehemmed= new User('Mehemmed',20)

Mehemmed.sayHello()