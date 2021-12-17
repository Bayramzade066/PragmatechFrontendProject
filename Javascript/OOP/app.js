// function User(name,age){
//     let user={};
//     user.name = name;
//     user.age = age;
//     return user;
// };

// console.log(User('Mehemmed',20));
// console.log(User('Rovshen',25));
// console.log(User('Rustem',23));

// class User{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     };
//     sayHello(){
//         console.log(`'Hello my name is ${this.name} and i am ${this.age} years old'`)
//     }
// }

// let Mehemmed= new User('Mehemmed',20)

// Mehemmed.sayHello()



// class phone{
//     constructor(model,color,inch,version){
//         this.model=model;
//         this.color=color;
//         this.inch=inch;
//         this.version=version;
//     }

//     getModel(){
//         return this.model;
//     }
//     getColor(){
//         return this.color;
//     }
//     getInch(){
//         return this.inch;
//     }
//     getVersion(){
//         return this.version;
//     }
// }


// let myPhone = new phone('Iphone','Black','6.5-inch','x');

// document.querySelector('body').innerHTML= 
// myPhone.getModel()+" "+
// myPhone.getVersion()+" "+
// myPhone.getColor()+" "+
// myPhone.getInch()+" ";

class car{
    constructor(model,color,id){
        this.model=model;
        this.color=color;
        this.id=id;
    };

    get Model(){
        return this.model;
    };
    get Color(){
        return this.color;
    }
    get Id(){
        return this.id;
    }
    Message(){
        return "Bu OOP test alertidir.";
    }
    set Model(model){
        this.model=model;
    };
    set Color(color){
        this.color=color;
    };
    set Id(id){
        this.id=id;
    };
};

class myCar extends car{
    constructor(model,color,id,topspeed){
        super(model,color,id);
        this.topspeed=topspeed;
    };
    messageAlert(){
        alert(super.Message());
    }
};

let Car = new myCar('Mercedes-GLS230','black','3','360 km/h');

document.querySelector('body').innerHTML=
Car.Model+"<br>"+
Car.Color+"<br>"+
Car.Id+"<br>";

Car.model='Tesla model x';
Car.color='Gray';
Car.id='2';

document.querySelector('body').innerHTML+=
Car.Model+"<br>"+
Car.Color+"<br>"+
Car.Id+"<br>"+
Car.topspeed+"<br>";
Car.messageAlert();
  